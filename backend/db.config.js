const mongoose = require('mongoose')

function ConnectToDB(){
    mongoose.connect(`mongodb+srv://kashif:iqbal@cluster0.jedzu.mongodb.net/Candidate_referral?retryWrites=true&w=majority&appName=Cluster0`)
        .then(()=>{
            console.log("Connected to DB")
        })
        .catch((err)=>{
            console.error("there is an error in DB", err.message)
        })
}

module.exports = ConnectToDB