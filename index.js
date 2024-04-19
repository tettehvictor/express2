const express = require('express')
const fs = require('fs')
const port = 2030
const app = express();

const productRoute = require("./routes/productRoute")
const userRoute = require('./routes/userRoute')
const serviceRoute = require('./routes/serviceRoute')

const homepage = fs.readFileSync("./pages/index.html", "utf-8")


app.get('/', (req, res) => {
 res.send(homepage)
})

app.use(productRoute)
app.use(userRoute)
app.use(serviceRoute)

app.use(express.json())
app.listen(port, () => {
    console.log(`server started successfully. click http://localhost:${port} to open webite`)
})