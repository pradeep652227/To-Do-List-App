const express = require("express");
const app = express();
const port = 4000;

app.set("title", "MySite");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

/*Handling post requests and data*/
let date;
let itemsArray = [];
let idx = 0;

app.post("/", (req, res) => {
  let listItem = req.body.itemName;
  itemsArray[idx++] = listItem;
  res.render("list", { Date: date, listItems: itemsArray });
});
app.get("/", (req, res) => {
  let today = new Date();
  let options = { weekday: "long", month: "short", day: "numeric" };
  date = today.toLocaleDateString("en-US", options);
  res.render("list", { Date: date, listItems: itemsArray });
});
app.listen(process.env.PORT || port, () => {
  console.log("server is up and runnig");
});
