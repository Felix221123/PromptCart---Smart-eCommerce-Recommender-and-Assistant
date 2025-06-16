// tslint:disable:variable-name
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Timestamp, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm'
import config from '../../../config/index'
import { User } from './user'


@Entity(`${config.DB.MAIN_SCHEMA}.orders`)
export class Order extends BaseEntity {

    // order id, PRIMARY KEY
    @PrimaryGeneratedColumn("uuid")
    public id: string

    // order created at
    @CreateDateColumn()
    public created_at: Date

    // user relation, FOREIGN KEY
    @ManyToOne(() => User, { nullable: false })
    @JoinColumn({ name: "user_id" })
    user!: User

    // order status
    @Column()
    status: string

    // users total amount
    @Column("float")
    total_amount: number

    // users updated at
    @Column({ type: "timestamp", nullable: true })
    public updated_at?: Timestamp


}
