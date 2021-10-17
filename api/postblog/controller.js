const { data, blog } = require("../data");
const { loginDataPost } = require("../login/controller");

const postblogDataPost = function (req, res) {
  console.log("postblogData post request");
  const blg = req.body;
  blog.push(blg);

  res.status(200).json("added");
};

module.exports = {
  postblogDataPost: postblogDataPost,
};
