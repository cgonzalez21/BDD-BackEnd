var sql = require("mssql");
var config = require("../config/db")();
var Inventario = require('../models/inventario');


function getInv(req, res, inventario) {

  sql.connect(config, function (err) {

    if (err) {
      const resp = {
        code: 500,
        message: "ERROR IN DATA BASE CONNECTION",
        error: err
      }
      res.send(resp);
    }
    else {
      var request = new sql.Request()
        .input('i_id_suc', sql.VarChar, inventario.id_sucursal)
        .execute('dbo.API_GetOneInv', (err, result) => {
          if (err) {
            const resp = {
              code: 401,
              message: "Ha ocurrido un error, lo sentimos. Intente mas tarde"
            };
            res.send(resp);
          }
          if (result.returnValue == 0 && result.recordset.length > 0) {
            const resp = {
              code: 200,
              message: "OK",
              data: result.recordset
            }
            res.status(200).json(resp);
          }
          sql.close()
        });
    }

  });
};


var controller = {
  get: function (req, res) {
    var inventario = {
      id_sucursal: req.params.id
    }
    getInv(req, res, inventario);
  }
};

module.exports = controller;