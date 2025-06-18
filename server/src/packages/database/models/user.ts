// tslint:disable:variable-name
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Timestamp, CreateDateColumn, OneToMany } from 'typeorm'
import config from '../../../config/index'
import { Order } from './order'


@Entity(`${config.DB.MAIN_SCHEMA}.users`)
export class User extends BaseEntity {

  // users id, PRIMARY KEY
  @PrimaryGeneratedColumn("uuid")
  public id: string

  // users first name
  @Column('varchar')
  public firstName: string

  // users last name
  @Column('varchar')
  public lastName: string

  // users email
  @Column('varchar')
  public email: string

  // users orders
  @OneToMany(() => Order, order => order.user)
  orders: Order[]

  // users password
  @Column('varchar')
  public password: string

  // users role
  @Column('varchar')
  public role: string

  // users created at
  @CreateDateColumn()
  public created_at: Date

  // users status
  @Column()
  status: string

  // users updated at
  @Column({ type: "timestamp", nullable: true })
  public updated_at?: Timestamp

  // sessionToken management
  @Column({ type: "text", nullable: true })
  sessionToken: string


}
