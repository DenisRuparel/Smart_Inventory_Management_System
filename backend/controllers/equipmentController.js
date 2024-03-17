import Equipment from "../models/equipmentModel.js";

export const createEquipment = async(req, res)=>{
    try {

        const equipmentData = new Equipment(req.body);

        if(!equipmentData){
            return res.status(404).json({msg: "Equipment data not found"});
        }

        await equipmentData.save();
        res.status(200).json({msg: "Equipment created successfully"});

    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const getAllEquipment = async(req, res) =>{
    try {

        const equipmentData = await Equipment.find();
        if(!equipmentData){
            return res.status(404).json({msg:"Equipment data not found"});
        }
        res.status(200).json(equipmentData);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const getOneEquipment = async(req, res) =>{
    try {

        const id = req.params.id;
        const equipmentExist = await Equipment.findById(id);
        if(!equipmentExist){
            return res.status(404).json({msg: "Equipment not found"});
        }
        res.status(200).json(equipmentExist);
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const updateEquipment = async(req, res) =>{
    try {

        const id = req.params.id;
        const equipmentExist = await Equipment.findById(id);
        if(!equipmentExist){
            return res.status(401).json({msg:"Equipment not found"});
        }

        const updatedData = await Equipment.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({msg: "Equipment updated successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}


export const deleteEquipment = async(req, res) =>{
    try {

        const id = req.params.id;
        const equipmentExist = await Equipment.findById(id);
        if(!equipmentExist){
            return res.status(404).json({msg: "Equipment not exist"});
        }
        await Equipment.findByIdAndDelete(id);
        res.status(200).json({msg: "Equipment deleted successfully"});
        
    } catch (error) {
        res.status(500).json({error: error});
    }
}