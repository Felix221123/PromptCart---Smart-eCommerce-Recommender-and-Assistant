import { NextFunction, Request, Response } from 'express'
import * as httpStatus from 'http-status'
import { AppDataSource } from '../../../../data-source'
import { User } from '~/packages/database/models/user'






// api starting point
export const userHello = async (req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.OK).json({ hello: 'user controller here from admin' })
}
