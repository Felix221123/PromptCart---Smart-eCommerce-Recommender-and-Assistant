import "reflect-metadata"
import 'dotenv/config'
import { DataSource } from 'typeorm'
import config from './config'
import { Order } from "./packages/database/models/order"
import { Product } from "./packages/database/models/product"
import { User } from "./packages/database/models/user"
import { WishList } from "./packages/database/models/wishList"
import { OrderItem } from "./packages/database/models/orderItem"
import { Payment } from "./packages/database/models/payment"
import { ProductEmbedding } from "./packages/database/models/productEmbedding"


export const AppDataSource = new DataSource({
    // database connection
    type: 'postgres',
    database: config.DB.NAME,
    host: config.DB.HOST,
    password: config.DB.PASSWORD,
    port: config.DB.PORT,
    username: config.DB.USER,

    // database settings
    logging: false,
    synchronize: false,

    // entity file path and migration file path
    entities: [Order, Product, User, WishList, OrderItem, Payment, ProductEmbedding],
    migrations: ['src/packages/database/migrations/**/*.ts'],

    // ssl
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
})

