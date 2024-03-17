import express from 'express'
import {createEquipment, deleteEquipment, getAllEquipment, getOneEquipment, updateEquipment} from '../controllers/equipmentController.js'
const router = express.Router()
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

//create equipment
router.post("/createequipment", verifyAdmin, createEquipment)

//update equipment
router.put("/updateequipment/:id", verifyAdmin, updateEquipment)

//delete equipment
router.delete("/deleteequipment/:id", verifyAdmin, deleteEquipment)

//get single equipment
router.get("/getoneequipment/:id", verifyAdmin, verifyUser, getOneEquipment)

//get all equipment
router.get("/getallequipment/", verifyAdmin, verifyUser, getAllEquipment)

export default router;