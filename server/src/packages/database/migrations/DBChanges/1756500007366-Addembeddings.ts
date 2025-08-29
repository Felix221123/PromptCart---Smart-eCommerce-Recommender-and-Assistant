import { MigrationInterface, QueryRunner } from "typeorm";

export class Addembeddings1756500007366 implements MigrationInterface {
    name = 'Addembeddings1756500007366'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS vector`);
        await queryRunner.query(`
            CREATE TABLE "product_embeddings"
            ("product_id" uuid NOT NULL,
            "text_embedding" vector(3072),
            "image_embedding" vector(768),
            CONSTRAINT "PK_fc33b0a1def3d64ec41f42fd890" PRIMARY KEY ("product_id"))`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product_embeddings"`);
    }

}
