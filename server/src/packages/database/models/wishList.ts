// tslint:disable:variable-name
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Timestamp, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm'
import config from '../../../config/index'
import { Product } from './product'
import { User } from './user'



@Entity(`${config.DB.MAIN_SCHEMA}.wishList`)
export class WishList extends BaseEntity {

    // order id, PRIMARY KEY
    @PrimaryGeneratedColumn("uuid")
    public id: string

    // user relation, FOREIGN KEY
    @ManyToOne(() => User, { nullable: false })
    @JoinColumn({ name: "user_id" })
    user!: User

    // product relation, FOREIGN KEY
    @ManyToOne(() => Product, { nullable: false })
    @JoinColumn({ name: "product_id" })
    product!: Product

    // order unit price
    @Column("timestamp with time zone")
    public addedAt: Date

}
