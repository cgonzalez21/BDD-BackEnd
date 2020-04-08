var Empresa = require('../models/empresa');
var sql = require("mssql");
var config = require("../config/db")();

function getEmpresa(req, res, cliente) {
    var empresa = [];

    sql.connect(config, function (err) {

        if (err) {
            console.log("ERROR IN CONNECT");
            console.log(err);
        }

        var request = new sql.Request()
            .on('row', function (columns) {
                empresa.push(new Empresa(columns));
            })
            .execute('dbo.API_GetEmpresa', (err, result) => {
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
    get: function (req, res) {
        getEmpresa(req, res);
    },
};

module.exports = controller;