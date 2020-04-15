var Articulo = require('../models/articulo')
var sql = require("mssql");
var config = require("../config/db")();

function getSuc(req, res, sucID) {

  sql.connect(config, function (err) {

    if (err) {
      console.log("ERROR IN CONNECT");
      console.log(err);
    }

    var request = new sql.Request()
      .execute('dbo.API_GetSucID', (err, result) => {
        if (err) {
          res.send(err);
        }
        if(result.returnValue == 0) {
          res.status(200).json(result.recordset);
        }
        sql.close()
      });
  });
};

var controller = {
  get: function (req, res) {
    var sucID = {
      id: req.params.id
    }
    getSuc(req, res, sucID);
  }
};

module.exports = controller;