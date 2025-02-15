import { EventRaw, TransferData } from "../../interfaces/interfaces";
import { TransferType, VerifiedContract } from "../../model";
import * as erc1155 from "../../abi/ERC1155";
import { SubstrateBlock } from "@subsquid/substrate-processor";
import { findNativeAddress, toChecksumAddress } from "../../util";
import { provider } from "../../processor";
import { TokenHolderManager } from "../tokenHolderManager";
import { AccountManager } from "../accountManager";
import { ethers } from "ethers";

export const processErc1155BatchTransfer = async (
    eventRaw: EventRaw,
    blockHeader: SubstrateBlock,
    token: VerifiedContract,
    accountManager: AccountManager,
    tokenHolderManager: TokenHolderManager
): Promise<TransferData[]> => {    
    const transfersData: TransferData[] = [];
    const tokenAddress = token.id;
    const [, from, to, ids, values_ ] = erc1155.events.TransferBatch.decode(eventRaw.args.log || eventRaw.args);
    const toAddress = await findNativeAddress(to);
    const fromAddress = await findNativeAddress(from);
    const toEvmAddress = toChecksumAddress(to);
    const fromEvmAddress = toChecksumAddress(from);

    if (toAddress !== '0x') accountManager.process(toAddress, blockHeader);
    if (ethers.utils.isAddress(toEvmAddress) && toEvmAddress !== ethers.constants.AddressZero) {
        try {
            const toBalances = await new erc1155.Contract(tokenAddress, provider).balanceOfBatch(Array.from({length: ids.length}, () => toEvmAddress), ids);
            for (let i = 0; i < ids.length; i++) {
                tokenHolderManager.process(toAddress, toEvmAddress, BigInt(toBalances[i].toString()), blockHeader.timestamp, token, Number(ids[i]));
            }
        } catch (e) {}
    }

    if (fromAddress !== '0x') accountManager.process(fromAddress, blockHeader);
    if (ethers.utils.isAddress(fromEvmAddress) && fromEvmAddress !== ethers.constants.AddressZero) {
        try {
            const fromBalances = await new erc1155.Contract(tokenAddress, provider).balanceOfBatch(Array.from({length: ids.length}, () => fromEvmAddress), ids);
            for (let i = 0; i < ids.length; i++) {
                tokenHolderManager.process(fromAddress, fromEvmAddress, BigInt(fromBalances[i].toString()), blockHeader.timestamp, token, Number(ids[i]));
            }
        } catch (e) {}
    }

    for (let i = 0; i < ids.length; i++) {
        transfersData.push({
            id: eventRaw.id,
            blockId: blockHeader.id,
            extrinsicId: eventRaw.extrinsic.id,
            toAddress: toAddress,
            fromAddress: fromAddress,
            token: token,
            toEvmAddress: toEvmAddress,
            fromEvmAddress: fromEvmAddress,
            type: TransferType.ERC1155,
            amount: BigInt(values_[i].toString()),
            success: true,
            timestamp: new Date(blockHeader.timestamp),
            denom: null,
            nftId: BigInt(ids[i].toString()),
            errorMessage: '',
            feeAmount: 0n, // TODO
        });
    }

    return transfersData;
}