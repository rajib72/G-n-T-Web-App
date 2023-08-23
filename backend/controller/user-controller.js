import User from "../model/User";
import bcrypt from 'bcryptjs'

//get all users
export const getAllUser = async(req,res,next)=>{
    let users;
    try {
        users = await User.find()
    } catch (error) {
        console.log(error);
    }
    if(!users){
        return res.status(404).json({message: "No Users Found"})
    }
    return res.status(200).json({users})
}

//signup
export const signup = async(req,res,next)=>{
    const {name,email,password} = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({email})//checking if there is any user in the db using body email param

    } catch (error) {
        console.log(error);
    }
    if(existingUser){
        return res.status(400).json({message : "User Already Exists! Login Instead"})
    }
    const hashedPassword = bcrypt.hashSync(password)//hashing the password
    //creating new user
    const user=new User({
        name,
        email,
        password:hashedPassword,
        projectHistory:[]
    })
  
    
    //save the user
    try {
        await user.save()//saving the data to the db
    } catch (error) {
        console.log(error);
    }
    return res.status(200).json({user})
}

//login

export const login = async (req,res,next)=>{
    const {email,password} = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({email})//checking if there is any user in the db using body email param

    } catch (error) {
        console.log(error);
    }
    if(!existingUser){
        return res.status(404).json({message : "Could'nt Find user"})
    }
    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password)
    if(!isPasswordCorrect){
        return res.status(400).json("Incorrect Password")
    }
    return res.status(200).json({message:"Login Successfull"})
}
