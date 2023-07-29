const protectedRoute = (req, res) => {
  res.status(200).json({
    msg: "Token verification successful. You can now access this route.",
  });
};

module.exports = { protectedRoute };
