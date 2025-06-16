import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { AppDataSource } from '~/data-source'

export async function getConnection(): Promise<DataSource> {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize()
  }
  return AppDataSource
}

export async function closeConnection(): Promise<void> {
  if (AppDataSource.isInitialized) {
    await AppDataSource.destroy()
  }
}