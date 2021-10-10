const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const router = require('./routes')
const cors = require('cors');
require('./utils/standart_response')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router);
app.set("token_private_key",require('./config').private_key)



app.listen(3005, () => {
    console.log('application running...');
});