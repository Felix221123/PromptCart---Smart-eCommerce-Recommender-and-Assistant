import { NextFunction, Request, Response } from 'express'
import * as httpStatus from 'http-status'
import { AppDataSource } from '../../../../data-source'




// api starting point
export const productHello = async (req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.OK).json({ hello: 'product controller here from admin' })
}
