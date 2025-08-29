import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm"
import config from "../../../config/index"
import { Product } from "./product"

@Entity(`${config.DB.MAIN_SCHEMA}.product_embeddings`)
export class ProductEmbedding extends BaseEntity {
    // FK to products
    @PrimaryColumn("uuid")
    product_id: string

    @OneToOne(() => Product, { onDelete: "CASCADE" })
    @JoinColumn({ name: "product_id" })
    product: Product

    // text embedding (OpenAI text-embedding-3-large)
    @Column({ nullable: true })
    text_embedding: string

    // image embedding (clip model from transformers library - Hugging face)
    @Column({ nullable: true })
    image_embedding: string
}