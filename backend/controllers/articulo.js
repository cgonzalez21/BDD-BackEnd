var Articulo = require ('../models/articulo')
var sql = require("mssql");
var config = require("../config/db")();

function getAll(req, res) {
  var articulo = [];
  sql.connect(config, function (err) {

    if (err) {
      console.log("ERROR IN CONNECT");
      console.log(err);
    }

    var request = new sql.Request()
      .on('row', function (columns) {
        articulo.push(new Articulo(columns));
      })
      .execute('dbo.API_GetAllArticulo', (err, result) => {
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
  get: function (req, res){
    getAll(req, res);
  }
};

module.exports = controller;