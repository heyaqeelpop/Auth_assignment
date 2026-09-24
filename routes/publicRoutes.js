const express = require("express");
const router = express.Router();

router.get("/info",(req,res)=>{
    res.status(200).json({
        message : "This is Public Information"
    })
})

module.exports=router;