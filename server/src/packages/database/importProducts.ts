import { AppDataSource } from '../../data-source'
import { Product } from '../database/models/product'
import axios from 'axios'

async function importProducts() {
    await AppDataSource.initialize()

    const { data } = await axios.get('https://dummyjson.com/products?limit=194')
    const products = data.products

    for (const p of products) {
        const product = new Product()
        product.title = p.title
        product.description = p.description
        product.price = p.price
        product.stock = p.stock
        product.category = p.category
        product.rating = p.rating
        product.warrantyInformation = p.warrantyInformation
        product.availabilityStatus = p.availabilityStatus
        product.reviews = p.reviews?.map(({ rating, comment, reviewerName, reviewerEmail }) => ({
            rating,
            comment,
            reviewerName,
            reviewerEmail
        }))
        product.shippingInformation = p.shippingInformation
        product.returnPolicy = p.returnPolicy
        product.images = p.images

        await product.save()
    }

    console.log('✅ Products imported successfully')
    process.exit(0)
}

importProducts().catch((err) => {
    console.error('❌ Failed to import products', err)
    process.exit(1)
})
