// tslint:disable:variable-name
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Timestamp, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm'
import config from '../../../config/index'
import { Order } from './order'


@Entity(`${config.DB.MAIN_SCHEMA}.payments`)
export class Payment extends BaseEntity {

    // order id, PRIMARY KEY
    @PrimaryGeneratedColumn("uuid")
    public id: string

    // order relation, FOREIGN KEY
    @ManyToOne(() => Order, { nullable: false })
    @JoinColumn({ name: "order_id" })
    order!: Order

    // payment method
    @Column("varchar")
    paymentMethod: string

    // order quantity
    @Column("varchar")
    status: string

    // payment amount
    @Column("float")
    public amount: number

}
