require('dotenv').config();
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');
const productRoutes = require('./routes/pruductRoutes.js')


//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use(express.json())

//routes
app.use('/api/product',productRoutes)


app.get('/', (req, res) => {
    res.send('HEllo Node API')
})


mongoose.connect(process.env.END_POINT)
    .then((res) => {
        console.log('connection Successfully')
        app.listen(process.env.PORT, () => {
            console.log(`Serveris running on PORT ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log('Database Connection Err', err)
    })