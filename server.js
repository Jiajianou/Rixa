var app = require("express")();

app.set("view engine", "ejs");


app.get("/", (req, res) => {

  res.render("index");

});

app.listen(4000, ()=>{
  console.log("The server is running.");
});
