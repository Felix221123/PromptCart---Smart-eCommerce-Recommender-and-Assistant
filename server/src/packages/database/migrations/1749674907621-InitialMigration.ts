import { MigrationInterface, QueryRunner } from "typeorm"

export class InitialMigration1749674907621 implements MigrationInterface {
    name = 'InitialMigration1749674907621'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "status" character varying NOT NULL, "updated_at" TIMESTAMP, "sessionToken" uuid DEFAULT uuid_generate_v4(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`)
        await queryRunner.query(`CREATE TABLE "orders" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "status" character varying NOT NULL, "total_amount" double precision NOT NULL, "updated_at" TIMESTAMP, "user_id" uuid NOT NULL, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`)
        await queryRunner.query(`CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "price" double precision NOT NULL, "stock" integer NOT NULL, "category" character varying NOT NULL, "rating" double precision NOT NULL, "warrantyInformation" character varying NOT NULL, "availabilityStatus" character varying NOT NULL, "reviews" json, "shippingInformation" character varying NOT NULL, "returnPolicy" character varying NOT NULL, "images" text array NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`)
        await queryRunner.query(`CREATE TABLE "wishList" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "addedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "user_id" uuid NOT NULL, "product_id" uuid NOT NULL, CONSTRAINT "PK_f7593e6101e2ec9fc7b61a9a687" PRIMARY KEY ("id"))`)
        await queryRunner.query(`CREATE TABLE "orderItems" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" integer NOT NULL, "unit_price" double precision NOT NULL, "order_id" uuid NOT NULL, CONSTRAINT "PK_b1b864ba2b7d5762d34265cc8b8" PRIMARY KEY ("id"))`)
        await queryRunner.query(`CREATE TABLE "payments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "paymentMethod" character varying NOT NULL, "status" character varying NOT NULL, "amount" double precision NOT NULL, "order_id" uuid NOT NULL, CONSTRAINT "PK_197ab7af18c93fbb0c9b28b4a59" PRIMARY KEY ("id"))`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "payments"`)
        await queryRunner.query(`DROP TABLE "orderItems"`)
        await queryRunner.query(`DROP TABLE "wishList"`)
        await queryRunner.query(`DROP TABLE "products"`)
        await queryRunner.query(`DROP TABLE "orders"`)
        await queryRunner.query(`DROP TABLE "users"`)
    }

}
