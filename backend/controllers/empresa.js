var sql = require("mssql");
var config = require("../config/db")();

function getEmpresa(req, res, cliente) {
    console.log(config);
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
            var request = new sql.Request();

            request.execute('dbo.API_GetEmpresa', (err, result) => {
                if (err) {
                    const resp = {
                        code: 404,
                        message: "ERROR",
                        error: err
                    }
                    res.send(resp);
                }
                if (result.returnValue == 0) {
                    const resp = {
                        code: 200,
                        message: "OK",
                        data: result.recordset
                    }
                    res.json(resp);
                }
                sql.close()
            });
        }
    });
};



var controller = {
    get: function (req, res) {
        getEmpresa(req, res);
    },
};

module.exports = controller;