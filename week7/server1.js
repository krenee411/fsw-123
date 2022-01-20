const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())


const ListRouter = require('./capstone/DataRouter/ListRouter')
const PORT = 8000;

//middleware
app.use(express.json())

//routes
app.use('/listArray', ListRouter)

app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
})

app.listen(PORT, () => {
    console.log(`App started on port : ${PORT}`)
})
