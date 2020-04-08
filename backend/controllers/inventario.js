var sql = require("mssql");
var config = require("../config/db")();
var Inventario = require('../models/inventario');

function getAllInv(req, res) {
  var inventario = [];
  sql.connect(config, function (err) {

    if (err) {
      console.log("ERROR IN CONNECT");
      console.log(err);
    }

    var request = new sql.Request()
      .on('row', function (columns) {
        inventario.push(new Inventario(columns));
      })
      .execute('dbo.API_GetAllInv', (err, result) => {
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


function getOne(req, res, inventario) {
  var inv = [];

  sql.connect(config, function (err) {

    if (err) {
      console.log("ERROR IN CONNECT");
      console.log(err);
    }

    var request = new sql.Request()
      .input('i_id_suc', sql.VarChar, inventario.id_sucursal)
      .on('row', function (columns) {
        inv.push(new Inventario(columns));
      })
      .execute('dbo.API_GetOneInv', (err, result) => {
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


var controller = {
  getOne: function (req, res) {
    var inventario = {
      id_sucursal: req.params.id
    }
    getOne(req, res, inventario);
  },
  getAll: function (req, res) {
    getAllInv(req, res);
  }
};

module.exports = controller;