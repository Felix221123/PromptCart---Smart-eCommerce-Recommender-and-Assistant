// tslint:disable-next-line:no-var-requires
/* eslint-disable @typescript-eslint/no-require-imports */
require('tsconfig-paths/register')

import * as http from 'http'
import app from '../../server'

module.exports = async (): Promise<any> => {
  const server = http.createServer(app)
  server.listen(3000)
  global.__appServer__ = server
}
