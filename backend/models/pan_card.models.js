import mongoose from "mongoose"

const PanSchema = new mongoose.Schema({
    full_name :{
        type:String,
        required:[true,"Name is required"],
    },
    father_name:{
        type:String,
        required:[true,"Name is required"],
    },

    dob:{
        type:Date,
        required:[true,"Number is required"],
    },

    gender:{
        type:String,
        required:[true,"gender is required"],   
    },

    aadhar_number:{
      type:Number,
      required:[true,"Aadhar is manadatory"],
    },

    email:{
        type:String,
        required: [true, 'Email is required'],
        unique: true, 
        trim: true, 
        match: [/.+@.+\..+/, 'Please enter a valid email address'] 
    },

    phone:{
        type:Number,
        required: [true, 'Phone Number is required'],
    },

    address:{
        type:String,
        required: [true, 'Aadhar is required'],
    }
});




const PanCollection = mongoose.model('pan',PanSchema);
export default PanCollection;