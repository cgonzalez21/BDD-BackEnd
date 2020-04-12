var sql = require("mssql");
var config = require("../config/db")();

function getEmpresa(req, res, cliente) {
    sql.connect(config, function (err) {

        if (err) {
            console.log("ERROR IN CONNECT");
            console.log(err);
        }

        var request = new sql.Request();

        request.execute('dbo.API_GetEmpresa', (err, result) => {
            if (err) {
                res.send(err);
            }
            if (result.returnValue == 0) {
                res.json(result.recordset);
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