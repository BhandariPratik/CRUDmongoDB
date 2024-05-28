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


mongoose.connect("mongodb+srv://pratikbhandari00722:um6sybxItRkt2t34@cruddemo.c9h14zt.mongodb.net/?retryWrites=true&w=majority&appName=CRUDdemo")
    .then((res) => {
        console.log('connection Successfully')
        app.listen(4000, () => {
            console.log('Serveris running on PORT 4000')
        })
    })
    .catch((err) => {
        console.log('Database Connection Err', err)
    })