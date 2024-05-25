const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json() , express.urlencoded({extended : true}))
app.use(cors({credentials: true, origin: 'http://localhost:5173'}));

require('./config/mongoose.config')
require('./routes/Animal.routes')(app)


app.listen(8000 , () => console.log('working')) 