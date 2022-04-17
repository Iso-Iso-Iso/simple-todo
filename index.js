const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve("public")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public", "index.html"));
});

app.get("*", (req, res) => {
  res.redirect("/");
});

app.listen(process.env.PORT || 80);
