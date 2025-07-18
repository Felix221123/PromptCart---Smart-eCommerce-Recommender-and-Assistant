import fs from 'fs'
import http from 'http'
import config from '~/config'
import { getConnection } from './packages/database'
import server from './server'

const PORT = config.SERVER_PORT || '5500'


async function onStart(): Promise<any> {
  try {
    await getConnection()
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.log(err)
    throw err
  }
}

const currentServer = http.createServer(server)

currentServer.listen(PORT, onStart)

// tslint:disable-next-line:no-console
console.log(`Server up and running on http://localhost:${PORT}`)