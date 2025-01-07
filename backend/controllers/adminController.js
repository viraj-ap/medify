
import validator from "validator"
import bcrypt from "bcrypt"
import {v2 as cloudinary} from "cloudinary"
import doctoModel from "../models/doctorModel.js"

//API for adding doctor

const addDoctor = async (req,res) =>{
    try {

        const{name , email, password,speciality,degree,experience,about,fees,address} = req.body
        const imageFile = req.file
         if(!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address ){
            return res.json({success:false , message : "Missing details"})
         }

         //email validation
         if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email!"})
         }

         // password validation
         if(password.length < 8){

            return res.json({success:false,message:"Password should be at least 8 characters long!"})

         }

         // hashing password 
         const salt = await bcrypt.genSalt(10)
         const hashedPassword = await bcrypt.hash(password,salt)

        //  upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
        const imageUrl = imageUpload.secure_url

        //adding into DB

        const doctorData = {
            name,
            email,
            password:hashedPassword,
            image : imageUrl,
            speciality,
            degree,
            experience,
            about,
            fees,
            address:JSON.parse(address),
            date : Date.now()
        }

        const newDoctor = new doctoModel(doctorData)
        await newDoctor.save()

        res.json({success:true,message:"doctor added successfully!"})
        


    } catch (error) {

        console.log(error)
        res.json({ success: false, message: error.message});

    }
}

export {addDoctor}