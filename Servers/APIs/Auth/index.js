import express from"express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const Router = express.Router();

//Models
import {UserModel} from "../../Databse/Users";

/*
Route        /signup
Descrip      Signup with email and password
Params       None
Access       Public
Method       POST
*/

Router.post("/signup", async(req,res) => {
    try{
        const {email, password, fullname, phoneNumber} = req.body.credentials;

        //Check whether email or phoneNumber exist already
        const checkUserByEmail = await UserModel.findOne({email});
        const checkUserByPhone = await UserModel.findOne({phoneNumber});

        if(checkUserByEmail || checkUserByPhone){
            return res.json({error : "User already exists"});
        }

        //Hashing
        const bcrypt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password, bcryptSalt);

        //DB 
        await UserModel.create({
            ...req.body.credentials,
            password: hashedPassword
        });

        //JWT Auth Token 
        //For adding extra layers of security
        const token = jwt.sign({user: {fullname, email}}, "ZomatoApp");

        return res.status(200).json({token});
        
    }
    catch(error){
        return res.status(500).json ({error: error.message});
    }
});

export default Router;

//Hashing
//Encrypting a word to some non understandable word is called hashing. 
//Repeating hashing again agin is called sorting.
//For example: Somya encrypted to : skdjfhjosbhdvjk1256.
