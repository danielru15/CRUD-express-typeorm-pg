import {Router } from "express";
import { createUser, getUserId, getUsers, removeUser, udpateActive, updateUser } from "../controllers/userController";


export const router = Router()

router.get('/',getUsers)
router.get('/:id',getUserId)
router.post('/', createUser)
router.delete('/:id',removeUser)
router.put('/:id',updateUser)
router.patch('/:id', udpateActive)