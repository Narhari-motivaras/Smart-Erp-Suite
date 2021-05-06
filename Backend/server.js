const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const addItem = require("./routes/additem");
const signup = require("./routes/signup");
const signin = require("./routes/signin");
const addservice = require("./routes/addservice");
const addbrand = require("./routes/addbrand");
const addgroup = require("./routes/addgroup");
const addinvoice = require("./routes/addinvoice");
const adddelivery = require("./routes/adddeliverychallan");
const addquotation = require("./routes/quotation");
const addclient = require("./routes/addclient");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Method','GET, POST, DELETE, PATCH');

      next();
});


app.use("/signup", signup);
app.use("/signin",signin);

app.use("/additem", addItem);
app.use("/Master/addservice", addservice);
app.use("/Master/addbrand", addbrand);
app.use("/Master/addgroup", addgroup);

app.use("/sale/newinvoice", addinvoice);
app.use("/sale/deliverychallan", adddelivery);
app.use("/sale/newquotation", addquotation);

app.use("/client/addclient", addclient);


mongoose
  .connect("mongodb://localhost:27017/ERP", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    app.listen(5000);
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log("Something went Wrong");
  });
