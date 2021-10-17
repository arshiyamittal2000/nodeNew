const { data } = require("../data");

const RegisterDataPost = function(req,res){
    console.log("RegisterData post request")
    const iserD = req.body
    console.log(iserD)
    checker = false
    console.log(data.length)
    for(var i=0;i<data.length;i++){
        if(data[i].email == iserD.email){
            
            res.send("user already exists");    
            checker = true
            break
        }
    }
    if(checker==false) {    
        data.push(iserD);
        console.log(data);
        res.send("User Registered: " + JSON.stringify(data));
    }
}

module.exports = {
    RegisterDataPost:RegisterDataPost
}