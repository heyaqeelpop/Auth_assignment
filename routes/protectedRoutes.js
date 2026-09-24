const express = require("express")

const router = express.Router()

router.get("/profile",(req,res)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({
            error : "Authentication header Required"
        })
    }
    if(!authHeader.startsWith("Bearer ")){
        return res.status(401).json({
            error : "Bearer token required"
        })
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
    return res.status(401).json({
      error: "Token required"
     });
   }

  return res.status(200).json({
    message: "Token received",
    token
  });


})

 module.exports = router;