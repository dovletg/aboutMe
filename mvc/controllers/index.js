
const getHomePage = function(req, res) {
  res.render("index", {title: "About Me"});
}


module.exports = {
  getHomePage
}
