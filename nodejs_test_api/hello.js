// hello.js

module.exports = (req, res, next) => {
  res.header("X-Hello", "World");
  //   if (req.path == "/users") {
  //     next();
  //   } else {
  //     res.status(404).json({ err: "넌 못지나간다" });
  //   }
};
