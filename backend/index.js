import express  from "express"
import cors from "cors"
import bodyParser from "body-parser"
import './config.js'
import './models/register.models.js'
import './models/pan_card.models.js'
import registerCollection from "./models/register.models.js"
import bcrypt from 'bcryptjs'
import PanCollection from "./models/pan_card.models.js"

const app = express()
const port = 3000

app.use(express.json())
app.use(cors()) 
app.use(bodyParser.json())



app.get('/', (req, res) => { 
    res.send('Hello World!')
})

app.post('/register',async (req, res) => {
    const data = {
        email : req.body.email,
        username : req.body.username,
        password: req.body.password
    }

    const existingUser = await registerCollection.findOne({name:data.name,email:data.email});


    if(existingUser){
        res.send("name and email exists");
    }

    else{
        const salt = 10;
        const hashPassword =  await bcrypt.hash(data.password,salt);
        data.password = hashPassword;

        const userData = await registerCollection.insertMany(data);
        console.log(userData);
    }

});

app.post('/login',async(req,res)=>{
    const check = await registerCollection.findOne({name:req.body.username});

    if(!check){
        res.send("Username not found");
    }

    const isPasswordMatch = await bcrypt.compare(req.body.password,check.password);

    if(!isPasswordMatch){
        res.send("Wrong details");
    }
});

app.post('/submit',async(req,res)=>{
 const data = {
    full_name:req.body.full_name,
    father_name: req.body.father_name,
    dob:req.body.dob,
    gender:req.body.gender,
    aadhar_number:req.body.aadhar_number,
    email:req.body.email,
    phone:req.body.phone,
    address:req.body.address,
};

const userData1 = await PanCollection.insertMany(data);
console.log(userData1);
});




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})