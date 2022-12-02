const express = require("express");
const app = express();
const port = 3000;
var cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/sound/:name", (req, res) => {
  const { name } = req.params;

  console.log(name);

  if (name == "cat") {
    res.json({ sound: "야옹" });
  } else if (name == "dog") {
    res.json({ sound: "멍멍" });
  } else if (name == "pig") {
    res.json({ sound: "꿀꿀" });
  } else {
    res.json({ sound: "none" });
  }
});

// app.use(express.json());

// app.post("/user/:id", (req, res) => {
//   const q = req.params;
//   console.log(q.id);
//   const p = req.body;

//   console.log("p", p);

//   res.send(p.id + " " + { message: " Hello world !" });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
