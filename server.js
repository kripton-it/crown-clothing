const path = require("path"); // native module
const express = require("express"); // library to build API server easier
const cors = require("cors"); // Cross Origin Requests
const bodyParser = require("body-parser");

// доступ к секретному ключу
if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, function(err) {
  if (err) {
    throw err;
  }

  console.log("Server running on port " + port);
});

// обработка запроса на route '/payment'
app.post("/payment", function(req, res) {
  const charge = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  };
  stripe.charges.create(charge, function(stripeErr, stripeRes) {
    if (stripeErr) {
      res.status(500).send({
        error: stripeErr
      });
    } else {
      res.status(200).send({
        success: stripeRes
      });
    }
  });
});
