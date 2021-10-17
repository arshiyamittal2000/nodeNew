const { data } = require("../data");


const loginDataPost = function(req,res){
    console.log("loginData post request")
    const iserD = req.body
    console.log(iserD)
    checker = false
    console.log(data.length)
    for(var i=0;i<data.length;i++){
        if(data[i].email == iserD.email && data[i].password == iserD.password){
            res.json({
                "message": "Successfully Logged IN"
            })
            checker = true
            break
        }
        else if(data[i].email == iserD.email && data[i].password != iserD.password){
            res.json({
                "message": "Invalid Credentials"
            })
            checker = true
            break
        }
    }
    if(checker==false) {    
        res.json({
            "message": "User Not Found"
        })
    }
}

module.exports = {
    loginDataPost:loginDataPost
}
