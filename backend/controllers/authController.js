import User from "../models/userModel.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const signup = async(req, res) => {
    try{
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            photo: req.body.photo
        })

        await newUser.save()

        res.status(200).json({
            success: true,
            message: "Successfully Created..!",
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "Failed to Created..!",
        });
        console.log(err);
    }
};

export const signin = async(req, res) => {
    
    const email = req.body.email

    try{
        const user = await User.findOne({email})

        if (!user) {
            return res.status(404).json({success: false, message: 'User Not Found..!'})
        }

        const checkCorrectPassword = await bcrypt.compare(req.body.password, user.password)

        if(!checkCorrectPassword){
            return res.status(401).json({success: false, message: 'Incorrect Email Or Password..!'})
        }

        const {password, role, ...rest} = user._doc

        const token = jwt.sign(
            {id: user._id, role: user.role}, 
            process.env.JWT_SECRET_KEY, 
            {expiresIn: "1500d"}
        );

        res.cookie('accessToken', token, {
            httpOnly: true, 
            expires: token.expiresIn
        })
        .status(200)
        .json({
            token,
            data: {... rest},
            role,
        });
    }
    catch(err){
        res
            .status(500)
            .json({success: false, message: 'Failed to Login..!'});
    }
};