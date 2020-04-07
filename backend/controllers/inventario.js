var dbConnector = require('../repository/tediousconnector');
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

function getAllInv(req, res) {
  var information = [];
  var request = new Request("dbo.API_GetAllInv", function (err, rowCount) {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    } else {
      res.json(information);
      dbConnector.closeConnection(request.__connection);
    }
  });

  request.on('row', function (columns) {
    information.push(new Information(columns));
  });

  dbConnector.callProcedure(request);
};

function getOne(req, res, inventario) {
  var products = [];
  var request = new Request("dbo.API_GetOneInv", function (err, rowCount) {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.json(products);
      dbConnector.closeConnection(request.__connection);
    }
  });

  request.on('row', function (columns) {
    products.push(new Product(columns));
  });

  request.addParameter('i_id_suc', TYPES.VarChar, inventario.id_almacen);

  dbConnector.callProcedure(request);
};

var controller = {
  getOne: function (req, res) {
    var inventario = {
      cedula: req.params.id_almacen
    }
    getOne(req, req, inventario);
  },
  getAll: function (req, res) {
    getAllInv(req, res);
  },
};

module.exports = controller;