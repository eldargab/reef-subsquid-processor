import { EventRaw, ERC721Data, TransferData } from "../../interfaces/interfaces";
import { TransferType, VerifiedContract } from "../../model";
import * as erc721 from "../../abi/ERC721";
import { SubstrateBlock } from "@subsquid/substrate-processor";
import { findNativeAddress, toChecksumAddress } from "../../util";
import { provider } from "../../processor";
import { TokenHolderManager } from "../tokenHolderManager";
import { ethers } from "ethers";
import { AccountManager } from "../accountManager";

export const processErc721Transfer = async (
    eventRaw: EventRaw,
    blockHeader: SubstrateBlock,
    token: VerifiedContract,
    accountManager: AccountManager,
    tokenHolderManager: TokenHolderManager
): Promise<TransferData> => {
    const tokenAddress = token.id;
    const [from, to, tokenId ] = erc721.events.Transfer.decode(eventRaw.args.log || eventRaw.args);

    const toAddress = await findNativeAddress(to);
    const toEvmAddress = toChecksumAddress(to);
    if (toAddress !== '0x') accountManager.process(toAddress, blockHeader);
    if (ethers.utils.isAddress(toEvmAddress) && toEvmAddress !== ethers.constants.AddressZero) {
        try {
            const toBalance = await new erc721.Contract(tokenAddress, provider).balanceOf(toEvmAddress);
            tokenHolderManager.process(toAddress, toEvmAddress, BigInt(toBalance.toString()), blockHeader.timestamp, token, Number(tokenId));
        } catch (e) {}
    }
        
    const fromAddress = await findNativeAddress(from);
    const fromEvmAddress = toChecksumAddress(from);
    if (fromAddress !== '0x') accountManager.process(fromAddress, blockHeader)
    if (ethers.utils.isAddress(fromEvmAddress) && fromEvmAddress !== ethers.constants.AddressZero) {
        try {
            const fromBalance = await new erc721.Contract(tokenAddress, provider).balanceOf(fromEvmAddress);
            tokenHolderManager.process(fromAddress, fromEvmAddress, BigInt(fromBalance.toString()), blockHeader.timestamp, token, Number(tokenId));
        } catch (e) {}
    }

    const transferData = {
        id: eventRaw.id,
        blockId: blockHeader.id,
        extrinsicId: eventRaw.extrinsic.id,
        toAddress: toAddress,
        fromAddress: fromAddress,
        token: token,
        toEvmAddress: toChecksumAddress(to),
        fromEvmAddress: toChecksumAddress(from),
        type: TransferType.ERC721,
        amount: BigInt('1'),
        success: true,
        timestamp: new Date(blockHeader.timestamp),
        denom: (token.contractData as ERC721Data).symbol,
        nftId: BigInt(tokenId.toString()),
        errorMessage: '',
        feeAmount: 0n, // TODO
    };

    return transferData;
}