module.exports = class Data1671886389661 {
    name = 'Data1671886389661'

    async up(db) {
        await db.query(`CREATE TABLE "chain_info" ("id" character varying NOT NULL, "count" integer NOT NULL, CONSTRAINT "PK_1b82ce2acbc16bfc7f84bfdc8ff" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "event" ("id" character varying NOT NULL, "index" integer NOT NULL, "phase" text NOT NULL, "section" text NOT NULL, "method" text NOT NULL, "data" jsonb NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_id" character varying, "block_id" character varying, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_129efedcb305c80256db2d57a5" ON "event" ("extrinsic_id") `)
        await db.query(`CREATE INDEX "IDX_2b0d35d675c4f99751855c4502" ON "event" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_454df5a5a16bb99a92c08f7870" ON "event" ("section") `)
        await db.query(`CREATE INDEX "IDX_f38992d3f393b04d1739fcb271" ON "event" ("method") `)
        await db.query(`CREATE TABLE "account" ("id" character varying NOT NULL, "evm_address" text, "identity" jsonb, "active" boolean NOT NULL, "free_balance" numeric NOT NULL, "locked_balance" numeric NOT NULL, "available_balance" numeric NOT NULL, "reserved_balance" numeric NOT NULL, "vested_balance" numeric NOT NULL, "voting_balance" numeric NOT NULL, "nonce" integer NOT NULL, "evm_nonce" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_id" character varying, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_22bbd4c1019b6727a8c0660b87" ON "account" ("evm_address") `)
        await db.query(`CREATE INDEX "IDX_d9c630ee6c2f1bcc56e46bab5a" ON "account" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_07daaf78eea6db5636f187de32" ON "account" ("active") `)
        await db.query(`CREATE TABLE "contract" ("id" character varying NOT NULL, "bytecode" text NOT NULL, "bytecode_context" text NOT NULL, "bytecode_arguments" text NOT NULL, "gas_limit" integer NOT NULL, "storage_limit" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "extrinsic_id" character varying, "signer_id" character varying, CONSTRAINT "PK_17c3a89f58a2997276084e706e8" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_5474bf708e87b70509781ed759" ON "contract" ("extrinsic_id") `)
        await db.query(`CREATE INDEX "IDX_c36378dd820dcbc9e74e71fe24" ON "contract" ("signer_id") `)
        await db.query(`CREATE TABLE "extrinsic" ("id" character varying NOT NULL, "index" integer NOT NULL, "hash" text NOT NULL, "args" jsonb NOT NULL, "docs" text NOT NULL, "method" text NOT NULL, "section" text NOT NULL, "signer" text NOT NULL, "status" character varying(7) NOT NULL, "error_message" text, "type" character varying(8) NOT NULL, "signed_data" jsonb, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_id" character varying, CONSTRAINT "PK_80d7db0e4b1e83e30336bc76755" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_a3b99daba1259dab0dd040d4f7" ON "extrinsic" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_1f45de0713a55049009e8e8127" ON "extrinsic" ("hash") `)
        await db.query(`CREATE INDEX "IDX_fee06ac3db4d6eaeab04d0e5eb" ON "extrinsic" ("method") `)
        await db.query(`CREATE INDEX "IDX_f27ce26722a5bff4dad664d4cb" ON "extrinsic" ("section") `)
        await db.query(`CREATE INDEX "IDX_001ddf290faf765f9dfd9154d3" ON "extrinsic" ("signer") `)
        await db.query(`CREATE TABLE "block" ("id" character varying NOT NULL, "height" integer NOT NULL, "hash" text NOT NULL, "author" text NOT NULL, "state_root" text NOT NULL, "parent_hash" text NOT NULL, "extrinsic_root" text NOT NULL, "finalized" boolean NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "processor_timestamp" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_d0925763efb591c2e2ffb267572" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_bce676e2b005104ccb768495db" ON "block" ("height") `)
        await db.query(`CREATE INDEX "IDX_f8fba63d7965bfee9f304c487a" ON "block" ("hash") `)
        await db.query(`CREATE INDEX "IDX_97862dcc0742e14c96127c78b1" ON "block" ("finalized") `)
        await db.query(`CREATE TABLE "evm_event" ("id" character varying NOT NULL, "event_index" integer NOT NULL, "extrinsic_index" integer NOT NULL, "contract_address" text NOT NULL, "data_raw" jsonb NOT NULL, "data_parsed" jsonb NOT NULL, "method" text NOT NULL, "type" character varying(10) NOT NULL, "status" character varying(7) NOT NULL, "topic0" text, "topic1" text, "topic2" text, "topic3" text, "event_id" character varying, "block_id" character varying, CONSTRAINT "PK_44bf1b82a2d71af8a303f7cb835" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_7d98b97b55aff4e00bb6e158d2" ON "evm_event" ("event_id") `)
        await db.query(`CREATE INDEX "IDX_6ff61ffc7cbb34a9f078a47336" ON "evm_event" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_85b1ac612c398463f116085628" ON "evm_event" ("contract_address") `)
        await db.query(`CREATE INDEX "IDX_9ffad651e13bb682b655a0fdfa" ON "evm_event" ("method") `)
        await db.query(`CREATE INDEX "IDX_7b757e81aa29c3a985cbd01a77" ON "evm_event" ("type") `)
        await db.query(`CREATE INDEX "IDX_90a88b806140536b2adce0bc5b" ON "evm_event" ("status") `)
        await db.query(`CREATE INDEX "IDX_fe3397060550546b69b7aefe4c" ON "evm_event" ("topic0") `)
        await db.query(`CREATE INDEX "IDX_c0dc7d49081c7bcfaf00ae3728" ON "evm_event" ("topic1") `)
        await db.query(`CREATE INDEX "IDX_417f512ff9c092dfb557d2ee3a" ON "evm_event" ("topic2") `)
        await db.query(`CREATE INDEX "IDX_6453610c1fbf78c537a64afff6" ON "evm_event" ("topic3") `)
        await db.query(`CREATE TABLE "verified_contract" ("id" character varying NOT NULL, "name" text NOT NULL, "filename" text, "source" jsonb NOT NULL, "optimization" boolean NOT NULL, "compiler_version" text NOT NULL, "compiled_data" jsonb NOT NULL, "args" jsonb NOT NULL, "runs" integer NOT NULL, "target" text NOT NULL, "type" character varying(7), "contract_data" jsonb, "timestamp" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_f0ff6f230d652bc4608f4f2d2e3" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_f5cb550e3c99f83463c201d52c" ON "verified_contract" ("name") `)
        await db.query(`CREATE INDEX "IDX_ffd8de09a235e8c2943b3a5fca" ON "verified_contract" ("filename") `)
        await db.query(`CREATE INDEX "IDX_9ae7c95c8da0d91cd644d395e0" ON "verified_contract" ("type") `)
        await db.query(`CREATE TABLE "transfer" ("id" character varying NOT NULL, "to_evm_address" text, "from_evm_address" text, "type" character varying(7) NOT NULL, "amount" numeric NOT NULL, "fee_amount" numeric NOT NULL, "denom" text, "nft_id" numeric, "error_message" text, "success" boolean NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block_id" character varying, "extrinsic_id" character varying, "to_id" character varying, "from_id" character varying, "token_id" character varying, CONSTRAINT "PK_fd9ddbdd49a17afcbe014401295" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_2699bb80b8c7c68d263fab954b" ON "transfer" ("block_id") `)
        await db.query(`CREATE INDEX "IDX_06f5863364b6acc2e315ceba39" ON "transfer" ("extrinsic_id") `)
        await db.query(`CREATE INDEX "IDX_0751309c66e97eac9ef1149362" ON "transfer" ("to_id") `)
        await db.query(`CREATE INDEX "IDX_76bdfed1a7eb27c6d8ecbb7349" ON "transfer" ("from_id") `)
        await db.query(`CREATE INDEX "IDX_b27b1150b8a7af68424540613c" ON "transfer" ("token_id") `)
        await db.query(`CREATE INDEX "IDX_36e52d061cb1c5c005d21f8083" ON "transfer" ("to_evm_address") `)
        await db.query(`CREATE INDEX "IDX_87c7c399ac70332445d0b89e71" ON "transfer" ("from_evm_address") `)
        await db.query(`CREATE INDEX "IDX_f4007436c1b546ede08a4fd7ab" ON "transfer" ("amount") `)
        await db.query(`CREATE INDEX "IDX_51ae33a762c6d328b7f06682c4" ON "transfer" ("fee_amount") `)
        await db.query(`CREATE INDEX "IDX_b05698353014d1a3ae32dae35e" ON "transfer" ("denom") `)
        await db.query(`CREATE INDEX "IDX_52fc453ba5ff660f331db4b359" ON "transfer" ("nft_id") `)
        await db.query(`CREATE INDEX "IDX_d0b7149e0dea3bfc1ffa8742a2" ON "transfer" ("success") `)
        await db.query(`CREATE TABLE "token_holder" ("id" character varying NOT NULL, "evm_address" text, "nft_id" numeric, "type" character varying(8) NOT NULL, "balance" numeric NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "token_id" character varying, "signer_id" character varying, CONSTRAINT "PK_c5e10d5c2543fac00a5d3086a2c" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_77bdccde4b3585013306c3606f" ON "token_holder" ("signer_id") `)
        await db.query(`CREATE INDEX "IDX_abfdc68704fc31c98bb5fccc9a" ON "token_holder" ("evm_address") `)
        await db.query(`CREATE INDEX "IDX_183817f049e88fb6b9816484b6" ON "token_holder" ("balance") `)
        await db.query(`CREATE UNIQUE INDEX "IDX_c09d54833688f9c5bc2fdb9714" ON "token_holder" ("token_id", "signer_id", "nft_id") `)
        await db.query(`CREATE TABLE "newly_verified_contract_queue" ("id" character varying NOT NULL, CONSTRAINT "PK_dcd1f77cdae813c72da9fb7007d" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "verification_request" ("id" character varying NOT NULL, "name" text NOT NULL, "filename" text, "source" jsonb NOT NULL, "optimization" boolean NOT NULL, "compiler_version" text NOT NULL, "args" jsonb NOT NULL, "runs" integer NOT NULL, "target" text NOT NULL, "success" boolean NOT NULL, "message" text, "timestamp" TIMESTAMP WITH TIME ZONE, CONSTRAINT "PK_9d9499e0fabae343c7ec3ecfac9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_205072c31614c0b02a83f9ea36" ON "verification_request" ("name") `)
        await db.query(`CREATE INDEX "IDX_5a87aab17f5edc6401131fd9b1" ON "verification_request" ("filename") `)
        await db.query(`CREATE INDEX "IDX_14b74c4e8154891d28ec2a2244" ON "verification_request" ("success") `)
        await db.query(`CREATE TABLE "staking" ("id" character varying NOT NULL, "type" character varying(6) NOT NULL, "amount" numeric NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "signer_id" character varying, "event_id" character varying, CONSTRAINT "PK_37377c2d716ef7341fd21d76e78" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_6ee1999545992b2cd1ba1f1f65" ON "staking" ("signer_id") `)
        await db.query(`CREATE INDEX "IDX_c4f2c390140b9ff847dae45002" ON "staking" ("event_id") `)
        await db.query(`CREATE INDEX "IDX_e837120901fd17225e43f7d421" ON "staking" ("type") `)
        await db.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_129efedcb305c80256db2d57a59" FOREIGN KEY ("extrinsic_id") REFERENCES "extrinsic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_2b0d35d675c4f99751855c45021" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "account" ADD CONSTRAINT "FK_d9c630ee6c2f1bcc56e46bab5a8" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "contract" ADD CONSTRAINT "FK_5474bf708e87b70509781ed759b" FOREIGN KEY ("extrinsic_id") REFERENCES "extrinsic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "contract" ADD CONSTRAINT "FK_c36378dd820dcbc9e74e71fe24d" FOREIGN KEY ("signer_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "extrinsic" ADD CONSTRAINT "FK_a3b99daba1259dab0dd040d4f74" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "evm_event" ADD CONSTRAINT "FK_7d98b97b55aff4e00bb6e158d28" FOREIGN KEY ("event_id") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "evm_event" ADD CONSTRAINT "FK_6ff61ffc7cbb34a9f078a473367" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_2699bb80b8c7c68d263fab954b0" FOREIGN KEY ("block_id") REFERENCES "block"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_06f5863364b6acc2e315ceba39a" FOREIGN KEY ("extrinsic_id") REFERENCES "extrinsic"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_0751309c66e97eac9ef11493623" FOREIGN KEY ("to_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_76bdfed1a7eb27c6d8ecbb73496" FOREIGN KEY ("from_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_b27b1150b8a7af68424540613c7" FOREIGN KEY ("token_id") REFERENCES "verified_contract"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "token_holder" ADD CONSTRAINT "FK_fc70f9ab515920d249fa5e9a8ba" FOREIGN KEY ("token_id") REFERENCES "verified_contract"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "token_holder" ADD CONSTRAINT "FK_77bdccde4b3585013306c3606fc" FOREIGN KEY ("signer_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "staking" ADD CONSTRAINT "FK_6ee1999545992b2cd1ba1f1f657" FOREIGN KEY ("signer_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "staking" ADD CONSTRAINT "FK_c4f2c390140b9ff847dae450025" FOREIGN KEY ("event_id") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "chain_info"`)
        await db.query(`DROP TABLE "event"`)
        await db.query(`DROP INDEX "public"."IDX_129efedcb305c80256db2d57a5"`)
        await db.query(`DROP INDEX "public"."IDX_2b0d35d675c4f99751855c4502"`)
        await db.query(`DROP INDEX "public"."IDX_454df5a5a16bb99a92c08f7870"`)
        await db.query(`DROP INDEX "public"."IDX_f38992d3f393b04d1739fcb271"`)
        await db.query(`DROP TABLE "account"`)
        await db.query(`DROP INDEX "public"."IDX_22bbd4c1019b6727a8c0660b87"`)
        await db.query(`DROP INDEX "public"."IDX_d9c630ee6c2f1bcc56e46bab5a"`)
        await db.query(`DROP INDEX "public"."IDX_07daaf78eea6db5636f187de32"`)
        await db.query(`DROP TABLE "contract"`)
        await db.query(`DROP INDEX "public"."IDX_5474bf708e87b70509781ed759"`)
        await db.query(`DROP INDEX "public"."IDX_c36378dd820dcbc9e74e71fe24"`)
        await db.query(`DROP TABLE "extrinsic"`)
        await db.query(`DROP INDEX "public"."IDX_a3b99daba1259dab0dd040d4f7"`)
        await db.query(`DROP INDEX "public"."IDX_1f45de0713a55049009e8e8127"`)
        await db.query(`DROP INDEX "public"."IDX_fee06ac3db4d6eaeab04d0e5eb"`)
        await db.query(`DROP INDEX "public"."IDX_f27ce26722a5bff4dad664d4cb"`)
        await db.query(`DROP INDEX "public"."IDX_001ddf290faf765f9dfd9154d3"`)
        await db.query(`DROP TABLE "block"`)
        await db.query(`DROP INDEX "public"."IDX_bce676e2b005104ccb768495db"`)
        await db.query(`DROP INDEX "public"."IDX_f8fba63d7965bfee9f304c487a"`)
        await db.query(`DROP INDEX "public"."IDX_97862dcc0742e14c96127c78b1"`)
        await db.query(`DROP TABLE "evm_event"`)
        await db.query(`DROP INDEX "public"."IDX_7d98b97b55aff4e00bb6e158d2"`)
        await db.query(`DROP INDEX "public"."IDX_6ff61ffc7cbb34a9f078a47336"`)
        await db.query(`DROP INDEX "public"."IDX_85b1ac612c398463f116085628"`)
        await db.query(`DROP INDEX "public"."IDX_9ffad651e13bb682b655a0fdfa"`)
        await db.query(`DROP INDEX "public"."IDX_7b757e81aa29c3a985cbd01a77"`)
        await db.query(`DROP INDEX "public"."IDX_90a88b806140536b2adce0bc5b"`)
        await db.query(`DROP INDEX "public"."IDX_fe3397060550546b69b7aefe4c"`)
        await db.query(`DROP INDEX "public"."IDX_c0dc7d49081c7bcfaf00ae3728"`)
        await db.query(`DROP INDEX "public"."IDX_417f512ff9c092dfb557d2ee3a"`)
        await db.query(`DROP INDEX "public"."IDX_6453610c1fbf78c537a64afff6"`)
        await db.query(`DROP TABLE "verified_contract"`)
        await db.query(`DROP INDEX "public"."IDX_f5cb550e3c99f83463c201d52c"`)
        await db.query(`DROP INDEX "public"."IDX_ffd8de09a235e8c2943b3a5fca"`)
        await db.query(`DROP INDEX "public"."IDX_9ae7c95c8da0d91cd644d395e0"`)
        await db.query(`DROP TABLE "transfer"`)
        await db.query(`DROP INDEX "public"."IDX_2699bb80b8c7c68d263fab954b"`)
        await db.query(`DROP INDEX "public"."IDX_06f5863364b6acc2e315ceba39"`)
        await db.query(`DROP INDEX "public"."IDX_0751309c66e97eac9ef1149362"`)
        await db.query(`DROP INDEX "public"."IDX_76bdfed1a7eb27c6d8ecbb7349"`)
        await db.query(`DROP INDEX "public"."IDX_b27b1150b8a7af68424540613c"`)
        await db.query(`DROP INDEX "public"."IDX_36e52d061cb1c5c005d21f8083"`)
        await db.query(`DROP INDEX "public"."IDX_87c7c399ac70332445d0b89e71"`)
        await db.query(`DROP INDEX "public"."IDX_f4007436c1b546ede08a4fd7ab"`)
        await db.query(`DROP INDEX "public"."IDX_51ae33a762c6d328b7f06682c4"`)
        await db.query(`DROP INDEX "public"."IDX_b05698353014d1a3ae32dae35e"`)
        await db.query(`DROP INDEX "public"."IDX_52fc453ba5ff660f331db4b359"`)
        await db.query(`DROP INDEX "public"."IDX_d0b7149e0dea3bfc1ffa8742a2"`)
        await db.query(`DROP TABLE "token_holder"`)
        await db.query(`DROP INDEX "public"."IDX_77bdccde4b3585013306c3606f"`)
        await db.query(`DROP INDEX "public"."IDX_abfdc68704fc31c98bb5fccc9a"`)
        await db.query(`DROP INDEX "public"."IDX_183817f049e88fb6b9816484b6"`)
        await db.query(`DROP INDEX "public"."IDX_c09d54833688f9c5bc2fdb9714"`)
        await db.query(`DROP TABLE "newly_verified_contract_queue"`)
        await db.query(`DROP TABLE "verification_request"`)
        await db.query(`DROP INDEX "public"."IDX_205072c31614c0b02a83f9ea36"`)
        await db.query(`DROP INDEX "public"."IDX_5a87aab17f5edc6401131fd9b1"`)
        await db.query(`DROP INDEX "public"."IDX_14b74c4e8154891d28ec2a2244"`)
        await db.query(`DROP TABLE "staking"`)
        await db.query(`DROP INDEX "public"."IDX_6ee1999545992b2cd1ba1f1f65"`)
        await db.query(`DROP INDEX "public"."IDX_c4f2c390140b9ff847dae45002"`)
        await db.query(`DROP INDEX "public"."IDX_e837120901fd17225e43f7d421"`)
        await db.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_129efedcb305c80256db2d57a59"`)
        await db.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_2b0d35d675c4f99751855c45021"`)
        await db.query(`ALTER TABLE "account" DROP CONSTRAINT "FK_d9c630ee6c2f1bcc56e46bab5a8"`)
        await db.query(`ALTER TABLE "contract" DROP CONSTRAINT "FK_5474bf708e87b70509781ed759b"`)
        await db.query(`ALTER TABLE "contract" DROP CONSTRAINT "FK_c36378dd820dcbc9e74e71fe24d"`)
        await db.query(`ALTER TABLE "extrinsic" DROP CONSTRAINT "FK_a3b99daba1259dab0dd040d4f74"`)
        await db.query(`ALTER TABLE "evm_event" DROP CONSTRAINT "FK_7d98b97b55aff4e00bb6e158d28"`)
        await db.query(`ALTER TABLE "evm_event" DROP CONSTRAINT "FK_6ff61ffc7cbb34a9f078a473367"`)
        await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_2699bb80b8c7c68d263fab954b0"`)
        await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_06f5863364b6acc2e315ceba39a"`)
        await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_0751309c66e97eac9ef11493623"`)
        await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_76bdfed1a7eb27c6d8ecbb73496"`)
        await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_b27b1150b8a7af68424540613c7"`)
        await db.query(`ALTER TABLE "token_holder" DROP CONSTRAINT "FK_fc70f9ab515920d249fa5e9a8ba"`)
        await db.query(`ALTER TABLE "token_holder" DROP CONSTRAINT "FK_77bdccde4b3585013306c3606fc"`)
        await db.query(`ALTER TABLE "staking" DROP CONSTRAINT "FK_6ee1999545992b2cd1ba1f1f657"`)
        await db.query(`ALTER TABLE "staking" DROP CONSTRAINT "FK_c4f2c390140b9ff847dae450025"`)
    }
}
