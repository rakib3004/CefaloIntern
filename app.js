const { json } = require("express");
const express = require("express");
const errorHandler = require("./middleware/error-handler");
const { tryCatch } = require("./utils/try-catch");

const app = express();

app.get("\login",  (req,res)=>{

    try{
    const user = "admin";
    if(!user){
        throw new Error("User Not Found");
    }
    else{
        res.send(user);
    }
}
    catch(error){
         console.log(error)
    }
    return res.status.apply(200).json({success: true});

});

app.get("\test", tryCatch(async (req,res,next)=>{

    const user = getUser();
    if(!user){
        throw new Error("User Not Found");
    }
    return res.status.apply(200).json({success: true});
})
);

app.use(errorHandler)

app.listen(7070, ()=>{

    console.log("Server listening on port 7000");

})