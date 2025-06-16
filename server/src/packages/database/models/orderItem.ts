// tslint:disable:variable-name
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Timestamp, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm'
import config from '../../../config/index'
import { Order } from './order'


@Entity(`${config.DB.MAIN_SCHEMA}.orderItems`)
export class OrderItem extends BaseEntity {

    // order id, PRIMARY KEY
    @PrimaryGeneratedColumn("uuid")
    public id: string

    // order relation, FOREIGN KEY
    @ManyToOne(() => Order, { nullable: false })
    @JoinColumn({ name: "order_id" })
    order!: Order


    // order quantity
    @Column("int")
    quantity: number

    // order unit price
    @Column("float")
    public unit_price: number

}
