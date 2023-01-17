const { json } = require("express");
const express = require("express");

const app = express();

app.get("\test", async(req,res)=>{

    try{
    const user = getUser();
    if(!user){
        throw new Error("User Not Found");
    }
}
    catch(error){
            console.log(error);

        return res.status(400).send(error.message); 
         
    }


    return res.status.apply(200).json({success: true});

});

app.listen(4000, ()=>{

    console.log("Server listening on port 4000");
    
})