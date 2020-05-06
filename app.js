const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const bodyParser = require('body-parser')
const PORT = process.env.PORT || config.get("PORT")
const app = express()
app.use(bodyParser.json())
app.use("/api/auth", require("./routes/userRoutes"))
async function start() {
    try {
        app.listen(PORT,() => {
            
            console.log(`Server has been started on ${PORT} and mongoDB has connected`)

        })
        await mongoose.
        connect(config.get("mongoUri"),
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                useCreateIndex:true
            }
        )}
    catch (e) {
            console.log(e)
        }
}
start()




