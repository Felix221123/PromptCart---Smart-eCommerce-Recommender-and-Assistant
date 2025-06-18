import { NextFunction, Request, Response } from 'express'
import * as httpStatus from 'http-status'
import { AppDataSource } from '../../../../data-source'
import { User } from '~/packages/database/models/user'


// all users
export const allUsers = async (_req: Request, _res: Response, _next: NextFunction) => {
    try {
        const usersRepository = AppDataSource.getRepository(User)
        const users = await usersRepository.find()
        return _res.status(200).json({ message: "All users", users })
    } catch (error) {
        return _res.status(500).json({ message: "Internal server error", error })
    }
}



// api starting point
export const userHello = async (req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.OK).json({ hello: 'user controller here from admin' })
}
