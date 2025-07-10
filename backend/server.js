const express = require('express')
const router = require('./Routes/candidate.route')
const app = express();
const ConnectToDB  = require("./db.config")
const cors = require('cors')

app.use(express.json())
app.use(cors())


app.get("/",(req,res)=>{
    res.json({msg:"Hello!"})
})

app.use("/",router)

app.listen(3000,()=>{
    console.log(`Server is running at http://localhost:3000`);
    ConnectToDB()
})