var sql = require("mssql");
var config = require("../config/db")();

function getVentas(req, res, venta) {
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
        .input('id_sucursal', sql.VarChar, venta.id_suc)
        .execute('dbo.API_GetCompras', (err, result) => {
          if (err) {
            const resp = {
              code: 400,
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
              message: "El cliente no ha realizado ventas"
            }
            res.status(200).json(resp);
          }
          sql.close()
        });
    }
  });
};



function saveVenta(req, res, new_venta) {
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
        .input('i_cedula', sql.VarChar, new_venta.cedula)
        .input('i_id_art', sql.VarChar, new_venta.id_art)
        .input('i_cantidad', sql.Int, new_venta.cantidad)
        .input('i_id_suc', sql.VarChar, new_venta.id_suc)
        .execute('dbo.API_PostVenta', (err, result) => {
          if (err) {
            const resp = {
              code: 404,
              message: "Ha ocurrido un error, lo sentimos. Intente mas tarde",
              error: err
            };
            res.send(resp);
          }
          if (result.returnValue == 0) {
            const resp = {
              code: 200,
              message: "La venta ha sido procesada."
            }
            res.status(200).json(resp);
          }
          sql.close()

        });
    }
  });
}


var controller = {
  getAll: function (req, res) {
    var venta = {
      id_suc: req.params.id
    };
    getVentas(req, res, venta);
  },
  save: function (req, res) {
    var new_venta = {
      cedula: req.body.cedula,
      id_art: req.body.id_art,
      cantidad: req.body.cantidad,
      id_suc: req.body.id_suc
    };
    saveVenta(req, res, new_venta);
  }
};

module.exports = controller;