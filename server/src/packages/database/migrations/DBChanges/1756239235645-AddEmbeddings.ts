import { MigrationInterface, QueryRunner } from "typeorm";

export class AddEmbeddings1756239235645 implements MigrationInterface {
    name = 'AddEmbeddings1756239235645'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_embeddings" ("product_id" uuid NOT NULL, "text_embedding" double precision array, "image_embedding" double precision array, CONSTRAINT "PK_fc33b0a1def3d64ec41f42fd890" PRIMARY KEY ("product_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product_embeddings"`);
    }

}
