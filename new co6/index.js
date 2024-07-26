const express = require("express");
const app = express();
app.use(express.json());
// get all blog in homepage

const myStudent = [
  { id: 1, name: "emmanuel", age: 25 },
  { id: 2, name: "chimaobi", age: 19 },
  { id: 3, name: "samuel", age: 26 },
  { id: 4, name: "micheal", age: 24 },
  { id: 5, name: "franklin", age: 25 },
];

app.get("/", (req, res) => {
  const body = req.body;
  console.log(body);
  res.json(myStudent);
});

app.post("/", (req, res) => {
  const body = req.body;
  const joined = { id: myStudent.length + 1, ...body };
  myStudent.push(joined);
  res.json(body);
});

app.get("/one/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  const oneItem = myStudent.find((item) => item.id == id);
  res.json(oneItem);
});

app.listen(5000, () => {
  console.log("app is running");
});
