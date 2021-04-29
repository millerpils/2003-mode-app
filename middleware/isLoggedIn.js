// middleware function to check if logged in
module.exports = isLoggedIn = (req, res, next) => {
  // isAuthenticated is a passport function
  if (req.isAuthenticated()) {
    return next();
  }

  // if not logged in, redirect to home
  res.render("home");
};
