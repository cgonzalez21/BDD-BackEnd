var sql = require("mssql");
var config = require("../config/db")();

function getSuc(req, res) {

  sql.connect(config, function (err) {

    if (err) {
      const resp = {
        code: 500,
        message: "Lo sentimos, error en conexión con base de datos. Intente mas tarde",
        error: err
      }
      res.send(resp);
    }
    else {
      var request = new sql.Request()
        .execute('dbo.API_GetSucID', (err, result) => {
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
          if (result.recordset.length == 0) {
            const resp = {
              code: 300,
              message: "Lo sentimos no hay sucursales disponibles"
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
    getSuc(req, res);
  }
};

module.exports = controller;