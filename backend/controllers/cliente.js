var sql = require("mssql");
var config = require("../config/db")();



function getCliente(req, res, cliente) {
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
        .input('i_cedula', sql.VarChar, cliente.cedula)
        .execute('dbo.API_GetCliente', (err, result) => {
          if (err) {
            const resp = {
              code: 404,
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
              message: "El cliente no se encuentra creado"
            }
            res.status(200).json(resp);
          }
          sql.close()
        });
    }

  });
};



function saveClient(req, res, new_cliente) {
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
        .input('i_Nombre_cl', sql.VarChar, new_cliente.nombre)
        .input('i_Apellido_cl', sql.VarChar, new_cliente.apellido)
        .input('i_Telefono_cl', sql.VarChar, new_cliente.telefono)
        .input('i_Correo_cl', sql.VarChar, new_cliente.correo)
        .input('i_Cedula_cl', sql.VarChar, new_cliente.cedula)
        .execute('dbo.API_PutCliente', (err, result) => {
          if (err) {
            const resp = {
              code: 404,
              message: "Ha ocurrido un error, lo sentimos. Intente mas tarde"
            };
            res.send(resp);
          }
          if (result.returnValue == 0) {
            const resp = {
              code: 200,
              message: "Client created succesfuly!!"
            }
            res.status(200).json(resp);
          }
          sql.close()

        });
    }
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