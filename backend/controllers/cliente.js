var Client = require('../models/cliente');
var NewClient = require('../models/cliente_nuevo');
var sql = require("mssql");
var config = require("../config/db")();



function getCliente(req, res, cliente) {
  var ente = [];

  sql.connect(config, function (err) {

    if (err) {
      console.log("ERROR IN CONNECT");
      console.log(err);
    }

    var request = new sql.Request()
      .input('i_cedula', sql.VarChar, req.params.id)
      .on('row', function (columns) {
        ente.push(new Client(columns));
      })
      .execute('dbo.API_GetCliente', (err, result) => {
        if (err) {
          res.send(err);
        }
        else {
          res.send(result.recordsets);
        }
        sql.close()
      });
  });
};



function saveClient(req, res, new_cliente) {
  var ente = [];

  sql.connect(config, function (err) {

    if (err) {
      console.log("ERROR IN CONNECT");
      console.log(err);
    }

    var request = new sql.Request()
      .input('i_Nombre_cl', sql.VarChar, new_cliente.nombre)
      .input('i_Apellido_cl', sql.VarChar, new_cliente.apellido)
      .input('i_Telefono_cl', sql.VarChar, new_cliente.telefono)
      .input('i_Correo_cl', sql.VarChar, new_cliente.correo)
      .input('i_Cedula_cl', sql.VarChar, new_cliente.cedula)
      .execute('dbo.API_PutCliente', (err, result) => {
        if (err) {
          res.send(err);
        }
        else {
          res.status(200).json("Client created succesfuly!!");
        }
        sql.close()

      });
  });
}


var controller = {
  get: function (req, res) {
    var cliente = {
      cedula: req.params.id
    };
    getCliente(req, res, cliente);
  },
  save: function (req, res) {
    var new_cliente = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      telefono: req.body.telefono,
      correo: req.body.correo,
      cedula: req.body.cedula
    };
    saveClient(req, res, new_cliente);
  }
};

module.exports = controller;