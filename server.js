const express = require('express');
const app = express();

const archivoDB = require('./conexion')

const rutapedido = require('./servidor/pedido')

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


app.use('/api/pedido', rutapedido)

app.get('/', (req, res) =>{
    res.end('Bienvenidos al servidor mis ninos...')
})

//Configuration basic server

app.listen(5000, function() {
  console.log(`SERVER.JS FUNCIONANDO EN EL PUERTO CORRECTAMENTE `);
});
