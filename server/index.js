const express = require("express")
const cors = require("cors")
const environment = require("dotenv")
const authRoutes = require("./routes/auth")
const connectDB = require("./database/database")

environment.config({
    path: "./config/config.env"
})

const app = express()

app.use(cors())

connectDB(process.env.MONGO_URI)

app.use(express.json())

app.use("/api/v1/auth", authRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})

