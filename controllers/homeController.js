module.exports = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.render("home", { user: {} });
  }

  res.redirect("/restaurants");
};
