const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoute = require("./routes/auth");

const app = express();
app.use(express.json());
dotenv.config();

app.use(cors());

mongoose.connect(
    process.env.ATLAS_URI,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    },
    (err) => {
        if (err) console.log(err)
        console.log("The database is connected");
    }
);


app.use("/api", authRoute);

app.listen(9000, () => {
    console.log("The server is running on port 9000");
});