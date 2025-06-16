import bodyParser from 'body-parser'
import compression from 'compression'
import cors from 'cors'
import express from 'express'
import { NextFunction, Request, Response } from 'express'
import helmet from 'helmet'
import httpStatus from 'http-status'
import morgan from 'morgan'
import rateLimit from 'express-rate-limit'
import cookieParser from 'cookie-parser'
import xss from 'xss-clean'
import hpp from 'hpp'


import config from '~/config'

import { handleErrors } from '~/packages/api/middlewares/error'
import router from '~/packages/api/router'

const app = express()

// Set security HTTP headers for production
// if (config.NODE_ENV === 'production') {
//   app.enable('trust proxy')
// }


// Set Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }))
app.use(express.urlencoded({ extended: true, limit: '10kb' }))

// Set Cookie parser
app.use(cookieParser())

// Set security HTTP headers
app.use(helmet())

// Limit requests from the same API
const limiter = rateLimit({
  max: 100,
  message: 'Too many requests from this IP, Please try again in an hour!',
  windowMs: 60 * 60 * 1000,
  validate: {
    validationsConfig: false,
    default: true
  }
})

app.use('/', limiter)


// Data sanitization against XSS
app.use(xss());

// Prevent http param pollution
app.use(hpp());

// Implement CORS
app.use(cors());

app.options('*', cors());

app.use(compression());

app.disable('x-powered-by');

app.use(
  morgan(config.LOGGING.TYPE, {
    skip: (_req: Request, res: Response) => res.statusCode < httpStatus.BAD_REQUEST,
    stream: process.stderr,
  }),
)

app.use(
  morgan(config.LOGGING.TYPE, {
    skip: (_req: Request, res: Response) => res.statusCode >= httpStatus.BAD_GATEWAY,
    stream: process.stdout,
  }),
)

app.use(bodyParser.json())

app.use(router)

app.use(handleErrors)

export default app
