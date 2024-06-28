const express = require("express");
const connectDB = require("./db/dbConnection");
const router = require("./routes/v1");


const app = express();

app.listen(3000,
    () => {
        console.log("heyyyyy CRUDDDDDD");
    }
)

app.use(express.json())
app.use("/v1",router)
connectDB()