const { data, blog } = require("../data");

const getblogDataPost = function (req, res) {
  console.log("getblogData post request");
  const { name, email } = req.body;
  let a = null;
  blog.map((cur) => {
    if (cur.name === name && cur.email === email) a = cur;
  });
  res.status(200).json(a);
};

module.exports = {
  getblogDataPost: getblogDataPost,
};
