const { error } = require("console");
const express = require("express");
const mongoose = require("mongoose");
const user = require("./models/userModels");
const app = express();
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("hello wordl")
});
app.get("/home", (req, res) => {
  res.send("hi jomar")
});

app.post('/user', async (req, res) => {
  try {
    const User = await user.create(req.body);
    res.status(200).json(user) /*  */
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message })
  }
  /* console.log(req.body);
    res.send(req.body) */
});
mongoose.set("strictQuery");
mongoose
  .connect(
    "mongodb+srv://ramilojomar2001:iJH70G00hSXHHhXU@cluster0.zrheudg.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("node api is running    ");
    });
    console.log("database Connected Succesfully");
  })
  .catch(() => {
    console.log(error);
  });
