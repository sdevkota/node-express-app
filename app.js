const express = require("express");
const cors=require('cors');
const bodyParser = require("body-parser");
//const AppError = require(__dirname,"/util/classes/AppError");

const app = express();

//routes
const userRoutes=require('./app/routes/user.js');

//middlewares
//comnfiiguration for cors
let corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200,
    methods: "GET, PUT"
}

app.use(cors(corsOptions));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routing
userRoutes(app);
// Main Route
app.get("/", (req, res,next) => {
  res.json({ message: "Welcome to the app" });
});
//
const port = process.env.PORT || "8080";

// set port, listen for requests
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})