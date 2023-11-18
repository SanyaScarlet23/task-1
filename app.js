//!Povikuvam paketi i voedno insatlirame:
// npm install express
// npm init -y ( i vo pckage json zapishuvame: "start": "node app.js")
// npm install ejs
// npm install mongoose
// npm install dotenv
// npm install db
// npm install express-jwt
//?Ako se odi za avtentikacija i token togash plus
// npm install cookie-parser
// npm install validator
// npm install bcryptjs
// npm install jsonwebtoken

const express = require("express");
const db = require("./pkg/db/index");

//?Za avtentikacija i JWT togsh i dolunavedenite konstanti kje treba da se definiraat:
//?const jwt = require("express-jwt");
//?const cookieParser = require("cookie-parser");

const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const kursevi = require("./handlers/kursevi");
const akademii = require("./handlers/akademii");
const viewHandler = require("./handlers/viewHandler");
//Ako uspeeme da stavime i token i avtentizacija const authHandler = require("./handlers/authHandler");

//?Funkcija da se povrzeme so data bazata
db.init(); 

app.set("view engine", "ejs");  
app.use(express.json());

//?Rutite
app.get("/akademii", akademii.getAll);
app.get("/akademii/:id", akademii.getOne);
app.post("/akademii", akademii.create);
app.patch("/akademii/:id", akademii.update);
app.delete("/akademii/:id", akademii.delete);
app.get("/kursevi", kursevi.getAll);
app.get("/kursevi/:id", kursevi.getOne);
app.post("/kursevi", kursevi.create);
app.patch("/kursevi/:id", kursevi.update);
app.delete("/kursevi/:id", kursevi.delete);

app.use(express.static("public"));



app.listen(process.env.PORT, (err) => {
    if (err) {
      return console.log("Could not start service");
    }
    console.log(`Service started successfully on port ${process.env.PORT}`);
  });