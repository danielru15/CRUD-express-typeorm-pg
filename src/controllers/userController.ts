import { Request, Response } from "express"
import { users } from "../entities/user"



export const createUser = async (req:Request,res:Response) => {
    const {firstname, lastname} = req.body
    const user = new users()
    user.firstname=firstname
    user.lastname=lastname

    try {
        await user.save()
        res.status(200).send(user)
        
    } catch (error) {
       res.status(400).send(error);
    }
    
}

export const getUsers = async (req:Request,res:Response) => {
    try {
        const user = await users.find()
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error)
        
    }

}

export const getUserId = async (req:Request,res:Response) => {
    try {
        const id= parseInt(req.params.id)
        const User = await users.findOneBy({id:id})
        /*
        const user = await users.find({
            where: {
                id:id
            }
        })
        */
        
        if (!User) {
            return res.status(404).json({message:'usuario no existe'})
        }

        res.status(200).json(User)
       
        
    } catch (error) {
        res.status(400).json(error)
    }
}

export const updateUser =async (req:Request, res:Response) => {
    try {
        const id= parseInt(req.params.id)
        const {firstname, lastname, active} = req.body
        const User = await users.findOneBy({id:id})
        if(!User) {
            return res.status(404).json({message:'usuario no existe'})
        } 
        const user = await users.update({id:id},
        { 
            firstname:firstname, 
            lastname:lastname,
            active:active 
        })
        res.status(200).send(user)
    } catch (error) {
        res.send(error)
    }
    
}

export const udpateActive =async (req:Request,res:Response) => {
    const id= parseInt(req.params.id)
    const user = await users.findOneBy({id:id})
    const {active} = req.body
    try {
        if(!user) {
            return res.status(404).json({message:'usuario no existe'})
        } 
        

        user.active= active
        user.save()
        res.sendStatus(204)

    } catch (error) {
        res.status(400).send(error)
    }
}

export const removeUser = async (req:Request,res:Response) => {
    try {
        const id= parseInt(req.params.id)
        const user = users.findOneBy({id:id})
        if(!user) {
            return res.status(404).json({message:'usuario no existe'})
        } 
        await users.delete({id:id})
        res.sendStatus(204)
    } catch (error) {
        res.status(400).json(error)
    }
    
}
