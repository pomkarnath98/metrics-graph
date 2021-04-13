const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const authRoute = require("./routes/auth");

const PORT = process.env.PORT || 9000;
const app = express();
app.use(express.json());
dotenv.config();

app.use(cors());

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) console.log(err);
    console.log("The database is connected");
  }
);

app.use("/api", authRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
