const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;

// MongoDB connection
console.log(process.env.MONGODB_URL);
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

//schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});

//
const userModel = mongoose.model("user", userSchema);

//API
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Signup
app.post("/Signup", async (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  try {
    const result = await userModel.findOne({ email: email });
    console.log(result);

    if (result) {
      res.send({ message: "Email id is already registered",alert : false});
    } else {
      const data = new userModel(req.body);
      const savedData = await data.save();
      res.send({ message: "Successfully signed up",alert: true });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

// Login
app.post("/Login", async (req, res) => {
  try {
    console.log(req.body);
    const { email } = req.body;

    const result = await userModel.findOne({ email: email });

    if (result) {
      console.log(result);
      const dataSend = {
          _id:result._id,
          firstName: result.firstName,
          lastName: result.lastName,
          email: result.email,
          image: result.image,
      };
      console.log(dataSend)
      res.send({ message: "Login successful", alert: true,data : dataSend });
    }
    else{
      res.send({ message: "Email is not available, please sign up", alert: false})
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => console.log("Server is running on port :" + PORT));
