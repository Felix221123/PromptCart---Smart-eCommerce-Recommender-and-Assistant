import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import config from '../../../config/index'
import { User } from '../../database/models/user'
import { AppDataSource } from '../../../data-source'

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Access token missing or malformed" })
    }

    const token = authHeader.split(" ")[1]

    try {
        const decoded: any = jwt.verify(token, config.AUTH.TOKEN_SECRET)

        const usersRepository = AppDataSource.getRepository(User)
        const user = await usersRepository.findOne({ where: { id: decoded.id } })

        if (!user || user.sessionToken !== token) {
            return res.status(403).json({ message: "Invalid session or token expired" })
        }

        // Attach full user to request
        req.user = user
        next()
    } catch (err) {
        return res.status(401).json({ message: "Unauthorized", error: err })
    }
}
