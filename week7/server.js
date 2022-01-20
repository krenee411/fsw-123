const express = require('express');
const app = express();
var cors = require('cors')
app.use(cors())


const DataRouter = require('./capstone/DataRouter/DataRouter')
const PORT = 9000;

//middleware
app.use(express.json())

//routes
app.use('/dataArray', DataRouter)
  
app.listen(90, function () {
    console.log('CORS-enabled web server listening on port 90')
})

app.listen(PORT, () => {
    console.log(`App started on port : ${PORT}`)
})
