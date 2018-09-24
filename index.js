var express = require("express");
var app = express();

//APP CONFIGURATION
//Set view engine for node.js
app.set("view engine", "ejs");
//Tell node where the css files are located
app.use(express.static(__dirname + "/public"));
// app.use(express.static("public"));

//HOME PAGE
app.get("/", function(req, res) {
  res.render("index");
});
//ABOUT PAGE
app.get("/about", function(req, res) {
  res.render("about");
});
//PORTFOLIO PAGE
app.get("/portfolio", function(req, res) {
  res.render("portfolio");
});
// SKILLS PAGE
app.get("/skills", function(req, res) {
  res.render("skills");
});
// CONTACT PAGE
app.get("/contact", function(req, res) {
  res.render("contact");
});

var port = process.env.PORT || 8080;

app.listen(port, console.log("APP STARTED! on port" + port));

// const ADD = 'ADD';

// function addMessage(){
//     return {
//         type: ADD,
//         message: 'HEllo'
//     }
// }

function messageReducer(state = [], action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        message: action.message
      };
  }
}

// store.dispatch(addMessage())
