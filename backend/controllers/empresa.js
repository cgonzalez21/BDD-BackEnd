var dbConnector = require('../repository/tediousconnector');
var Request = require('tedious').Request;
var Empresa = require('../models/empresa');

function getInformation(req, res) {
    var information = [];
    var request = new Request("dbo.API_GetEmpresa", function (err, rowCount) {
        if (err) {
            console.log(err);
            res.status(500).json({ error: err.message });
        } else {
            res.json(information);
            dbConnector.closeConnection(request.__connection);
        }
    });

    request.on('row', function (columns) {
        information.push(new Empresa(columns));
    });

    dbConnector.callProcedure(request);
};


var controller = {
    get: function (req, res) {
        getInformation(req, res);
    },
};

module.exports = controller;