import {Router} from "express"

import { listCliente, createCliente, deleteCliente, updateCliente } from "../services/cliente"

const router = Router()

router.get('/', async (req, res) => {
    const userCliente = await listCliente()
    res.send(userCliente)
})

router.post('/', async (req, res) => {
    try{
       const cliente = await createCliente(req.body)
        res.status(201).send(cliente)
    }catch(err){
       res.status(400).send(err)
    }
    //const user = await createUser(req.body)
   // res.status(201).send(user)
})

router.delete('/:userId', async (req, res) => {
    await deleteCliente(req.params.userId)
    res.send()
})

router.put('/:userId', async (req, res) => {
    await updateCliente(req.params.userId, req.body)
    res.send()
})

export default router