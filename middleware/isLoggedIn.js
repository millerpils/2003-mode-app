module.exports = (req, res, next) => {
  // isAuthenticated is a passport function -
  // if not logged in, render home
  if (!req.isAuthenticated()) {
    // return res.redirect("/");
  }

  next();
};
