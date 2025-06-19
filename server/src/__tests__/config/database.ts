import { closeConnection, getConnection } from '../../packages/database/index'

beforeAll(() => getConnection())
afterAll(() => closeConnection())
