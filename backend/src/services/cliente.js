import databaseConnection from '../utils/database'
import User from '../models/cliente'

export const listCliente = async () => {
    await databaseConnection()
    const clientes = await User.find()
    return clientes
}

export const  createCliente = async (user) => {
    await databaseConnection()
    const createdUser = await User.create(user)
    return createdUser
}

export const deleteCliente = async (id) => {
    await databaseConnection()
    await User.findByIdAndDelete(id)
}

export const updateCliente = async (id, newBody) => {
    await databaseConnection()
    await User.findByIdAndUpdate(id, newBody)
}  