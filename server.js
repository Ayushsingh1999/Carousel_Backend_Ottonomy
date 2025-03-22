const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoDB = require('./config/db')
const port = process.env.PORT
const imageRoutes = require('./routes/imageRoutes')


const app = express()


dotenv.config()
mongoDB()

app.use(express.json())
app.use(cors({
    origin: "*", // Frontend URL
    methods: "GET,POST,PUT,DELETE",
    credentials: true
  }));

app.use('/uploads',express.static('uploads'));

app.use('/api/images',imageRoutes)

app.listen(port,()=>
{
    console.log(`Server is listening on port ${port}`)
})

