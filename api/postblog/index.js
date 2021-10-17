const express = require("express");
const controller = require("../register/controller");
const Router = express.Router;


const router = new Router();

router.post("/postblogData",controller.RegisterDataPost);


module.exports = router;