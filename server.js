const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
dotenv.config({ path: "config.env" });

const PORT = process.env.PORT || 8080;

app.use(morgan("tiny"));
  
const connectdb = require("./server/database/connection");

connectdb();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/' , require('./server/routes/routes'));

 
 
app.listen(PORT, () => {
  console.log(`Connected on http://localhost:${PORT}`);
});
