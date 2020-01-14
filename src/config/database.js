const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://userb:userb123@clustermongo-l9enx.mongodb.net:/vuttr',{ //mongodb://localhost:27017/vuttr_db
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => { 
    console.log('Conectado ao Banco de Dados');
}).catch(err => {
    console.error(`Error: ${err}`);
    throw err;
});