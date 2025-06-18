import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import config from '../../../config/index'

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({ message: 'Access token missing' })
    }

    jwt.verify(token, config.AUTH.TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid or expired token' })
            
        // Attach user to request
        req.user = user
        next()
    })
}
