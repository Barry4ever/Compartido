var express = require("express"),
    app     = express(),
    cons    = require('consolidate'), // Esto es para el motor de plantillas
    bodyParser = require("body-parser"),
    fs      = require('fs'),
    solc    = require('solc'); // Esto no se para que lo usas pero te he instalado el paquete

// Aqui se configura el motor de plantillas
app.engine('html', cons.handlebars);
app.set('view engine', 'html');
app.set('views', __dirname + '/web');
app.use(express.static(__dirname + '/web/static'));
app.use(bodyParser.json());

app.get('/',function(req,res){
  res.render('index', {title: "Marquez gay"}); // aqui se llama a la plantilla y se le pasa la variable "title"
});


app.post('/recibir_datos_en_el_servidor', function(req, res){
  console.log(req.body); // esto son los parametros que recibes del cliente y que se muestran en la consola del servidor.
  
  res.json( { resultado: 'Esto viene del servidor' } ); // este es el json que se le envia al cliente y que ves en el html
});


app.listen(3000, function () {
  console.log('Esto es lo que hace que el servidor este escuchando en el puerto 3000!');
});