import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { AppDataSource } from '~/data-source'

export async function getConnection(): Promise<DataSource> {
    if (!AppDataSource.isInitialized) {
        await AppDataSource.initialize()
        console.log("Database initialized")

        // Ensure pgvector extension exists
        await AppDataSource.query('CREATE EXTENSION IF NOT EXISTS vector')
    }
    return AppDataSource
}

export async function closeConnection(): Promise<void> {
    if (AppDataSource.isInitialized) {
        await AppDataSource.destroy()
        console.log("Database connection closed")
    }
}
