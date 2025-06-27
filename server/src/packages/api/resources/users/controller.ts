import { NextFunction, Request, Response } from 'express'
import * as httpStatus from 'http-status'
import { AppDataSource } from '../../../../data-source'
import bcrypt from 'bcrypt'
import { User } from '~/packages/database/models/user'
import jwt, { SignOptions} from 'jsonwebtoken'
import config from '../../../../config/index'

// registering users
export const register = async (_req: Request, _res: Response, _next: NextFunction) => {
  const { firstName, lastName, email, password } = _req.body

  try {

    // get the repository
    const usersRepository = AppDataSource.getRepository(User)

    // check if the user already exists
    const existingUser = await usersRepository.findOne({ where: { email } })  

    // if user already exist then log an console.error;
    if (existingUser){
      return _res.status(400).json({ message: "User already exists with the same email" })
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // save the new users ito the database
    const user = new User()
    user.firstName = firstName
    user.lastName = lastName
    user.email = email
    user.password = hashedPassword
    user.role = "user"
    user.status = "active"
    user.sessionToken = null

    // save the user
    if (!user) {
      return _res.status(400).json({ message: "Invalid user data" })
    } else if (user) {
      await usersRepository.save(user)
      return _res.status(201).json({ message: "User registered successfully", user })
    } else {
      return _res.status(400).json({ message: "Failed to register user" })
    }
    
  } catch (error) {
    return _res.status(500).json({ message: "Internal server error", error })
  }
}

// logging in users
export const login = async (_req: Request, _res: Response, _next: NextFunction) => {
  const { email, password } = _req.body

  try {

    // get the repository
    const usersRepository = AppDataSource.getRepository(User)

    // check if the user already exists
    const existingUser = await usersRepository.findOne({ where: { email } })

    // if user already exist then log an console.error;
    if (!existingUser){
      return _res.status(400).json({ message: "User does not exist" })
    }

    // check if the password is correct
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

    // if password is incorrect then log an console.error;
    if (!isPasswordCorrect){
      return _res.status(400).json({ message: "Incorrect password" })
    }

    // Create session token
    const payload = {
      id: existingUser.id,
      email: existingUser.email,
      role: existingUser.role,
    }


    const token = jwt.sign(
      payload, 
      config.AUTH.TOKEN_SECRET, 
      {
        expiresIn: config.AUTH.TOKEN_EXPIRATION_TIME as SignOptions['expiresIn'],
      }
    )

    // Optional: Save session token to DB
    existingUser.sessionToken = token
    await usersRepository.save(existingUser)

    return _res.status(200).json({
      message: "User logged in successfully",
      token,
      user: {
        id: existingUser.id,
        email: existingUser.email,
        role: existingUser.role,
      },
    })

  } catch (error) {
    return _res.status(500).json({ message: "Internal server error", error })
  }
}

