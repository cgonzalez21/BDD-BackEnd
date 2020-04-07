var dbConnector = require('../repository/tediousconnector');
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var Client = require('../models/cliente')
var NewClient = require('../models/cliente_nuevo')

function getCliente(req, res, cliente) {
  var ente = [];
  var request = new Request("dbo.API_GetCliente", function (err, rowCount) {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    } else {
      res.json(ente);
      dbConnector.closeConnection(request.__connection);
    }
  });

  request.on('row', function (columns) {
    ente.push(new Client(columns));
  });
  
  //request.addParameter('i_cedula', TYPES.VarChar, cliente.cedula);
  console.log(request)
  dbConnector.callProcedure(request);
};

function saveClient(req, res, new_cliente) {
  var ente = [];
  var request = new Request("dbo.API_PutCliente", function (err, rowCount) {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err });
    } else {
      res.json(ente);
      dbConnector.closeConnection(request.__connection);
    }
  });

  request.on('row', function (columns) {
    ente.push(new NewClient(columns));
  });

  request.addParameter('Nombre_cl', TYPES.VarChar, new_cliente.name);
  request.addParameter('Apellido_cl', TYPES.VarChar, new_cliente.apellido);
  request.addParameter('Telefono_cl', TYPES.VarChar, new_cliente.telefono);
  request.addParameter('Correo_cl', TYPES.VarChar, new_cliente.correo);
  request.addParameter('Cedula_cl', TYPES.VarChar, new_cliente.cedula);

  dbConnector.callProcedure(request);
};

var controller = {
  get: function (req, res) {
    var cliente = {
      cedula: req.body.cedula
    };
    console.log(cliente.cedula);
    getCliente(req, res, cliente)
  },
    save: function (req, res) {
    var new_cliente = {
      name: req.body.name,
      apellido: req.body.apellido,
      telefono: req.body.telefono,
      correo: req.body.correo,
      cedula: req.body.cedula
    };
    saveClient(req, res, new_cliente);
  }
};

module.exports = controller;

