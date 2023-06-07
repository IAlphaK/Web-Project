const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./models/index");
const custroutes = require("./routes/customer.routes");
const admroutes = require("./routes/admin.routes");
const crtroutes = require("./routes/cart.routes");
const { handle404Error } = require('./errorHandlers');

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
app.use(express.static('pages'));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// redirect root URL to home.html
app.get('/', (req, res) => {
  res.status(200).sendFile('index.html', {root: __dirname + '/pages'});
});


app.use("/api/cust", custroutes);
app.use("/api/adm", admroutes);
app.use("/api/crt", crtroutes);

app.use(handle404Error);

// set up 404 error page
app.get('*', (req, res) => {
  res.status(404).sendFile('404.html', {root: __dirname});
});

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port http://127.0.01:${PORT} .`);
});
