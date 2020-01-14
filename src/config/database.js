require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.URL_CONNECT,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => { 
    console.log('Conectado ao Banco de Dados');
}).catch(err => {
    console.error(`Error: ${err}`);
    throw err;
});