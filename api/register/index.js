const express = require("express");
const controller = require("./controller");
const Router = express.Router;


const router = new Router();


router.post("/registerData",controller.RegisterDataPost);

module.exports = router;





/* router.post('/register',(req,res)=>{
    const {name,email, password} = req.body;
    let errors = [];
    console.log(' Name ' + name+ ' email :' + email+ ' pass:' + password);
    if(regsiterUser.email === body.email ) {
        errors.push({msg : "user already exists"})
    }
    registerUser.push(body)

}) */
