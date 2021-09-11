import asyncHandler from 'express-async-handler'
import User from '../models/userSchema.js'

import generateToken from '../utils/generateToken.js'

// POST
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      id: user._id,
      email: user.email,
      name: user.name,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(401)
    throw new Error('Invalid credentials')
  }
})

// GET
const getProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404)
    throw new Error('Sorry, not able to fetch the user.')
  }
})

// PUT
const updateProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedProfile = await user.save()

    res.send({
      _id: updatedProfile._id,
      name: updatedProfile.name,
      email: updatedProfile.email,
      token: generateToken(user._id),
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

// GET
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({})

  res.send({ users })
})

// POST
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(401)

    throw new Error('User already exists')
  } else {
    const user = await User.create({ name, email, password })

    if (user) {
      res.send({
        _id: user._id,
        name: user.name,
        password: user.password,
        email: user.email,
        token: generateToken(user._id),
      })
    } else {
      res.status(401)
      throw new Error('Not able to create a user')
    }
  }
})

//PUT
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    if (req.body.password) {
      user.password = req.body.password
    }

    const updatedProfile = await user.save()

    if (updatedProfile) {
      res.send({
        _id: updatedProfile._id,
        name: updatedProfile.name,
        email: updatedProfile.email,
        token: generateToken(updatedProfile._id),
      })
    }
  } else {
    res.status(401)
    throw new Error('Sorry cannot able to fetch the user')
  }
})

//DELETE
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()

    res.json({ message: 'Data removed' })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

//Get user by id
const getUserById = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    res.json({ user })
  } catch (err) {
    res.status(404)

    throw new Error('User not found')
  }
})

export {
  authUser,
  getProfile,
  updateProfile,
  getUsers,
  registerUser,
  updateUser,
  deleteUser,
  getUserById,
}
