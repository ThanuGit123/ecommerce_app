import isEmail from "validator/lib/isEmail.js"; 
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const createToken = (id) => {
  console.log("JWT_SECRET:", process.env.JWT_SECRET); 
  return jwt.sign({ id }, process.env.JWT_SECRET);
};


const loginUser = async (req, res) => {
  try
  {
    const {email,password}=req.body;

    const user =await userModel .findOne({email})

    if(!user)
    {
       return res.json({ success: false, message: "User Does Not Exists.." });
    }
    const isMatch =await bcrypt .compare(password,user.password);

    if(isMatch)
    {
      const token=createToken(user._id)
      res.json({success:true ,token })
    }
    else{
      res.json({success:false,message:"Invalid Password"})
    }
  }
  catch(error)
  {
      console.log(error);
    res.json({ success: false, message: error.message });
  }
  
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User Already Exists.." });
    }

    // ✅ Validate Email Format
    if (!isEmail(email)) {
      return res.json({ success: false, message: "Please Enter Valid Email" });
    }

    // ✅ Validate Password Strength
    if (password.length < 8) {
      return res.json({ success: false, message: "Please Enter Strong Password" });
    }

    // ✅ Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // ✅ Create New User
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword
    });

    const user = await newUser.save();
    const token = createToken(user._id);

    res.json({ success: true, token });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// ✅ Admin Login (Empty for now)
const adminLogin = async (req, res) => {
  // You can add admin login logic here later
};

// ✅ Export all controllers
export { loginUser, registerUser, adminLogin };
