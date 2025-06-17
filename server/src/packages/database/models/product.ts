// tslint:disable:variable-name
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Timestamp, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm'
import config from '../../../config/index'


@Entity(`${config.DB.MAIN_SCHEMA}.products`)
export class Product extends BaseEntity {

    // product id, PRIMARY KEY
    @PrimaryGeneratedColumn("uuid")
    public id: string

    // users total amount
    @Column("varchar")
    title: string

    // product description
    @Column("varchar")
    public description: string

    // product price
    @Column("float")
    public price: number

    // stock
    @Column("int")
    public stock: number

    // category
    @Column("varchar")
    public category: string

    // rating
    @Column("float")
    public rating: number

    // warranty information for the product
    @Column("varchar")
    public warrantyInformation: string

    // availability status
    @Column("varchar")
    public availabilityStatus: string

    // product reviews
    @Column("json", { nullable : true })
    reviews: { rating: number, comment: string, reviewerName: string, reviewerEmail: string }[]

    // shipping info
    @Column("varchar")
    public shippingInformation: string

    // return policy
    @Column("varchar")
    public returnPolicy: string

    // product image
    @Column("text", { array: true })
    public images: string[]

    // created at
    @CreateDateColumn()
    public created_at: Date

}
