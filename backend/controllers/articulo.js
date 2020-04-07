var dbConnector = require('../repository/tediousconnector');
var Request = require('tedious').Request;
var Articulo = require ('../models/articulo')



function getAll(req, res) {
	var articulo = [];
	var request = new Request("dbo.API_GetAllArticulo", function(err, rowCount) {
    if (err) {
      console.log(err);
      res.status(500).json({ error: err.message });
    } else {
      res.json(articulo);
      dbConnector.closeConnection(request.__connection);
    }
  });

  request.on('row', function(columns) {
    articulo.push(new Articulo(columns));
  });

  dbConnector.callProcedure(request);
};



var controller = {
  getAll: function (req, res){
    getAll(req, res);
  }
};

module.exports = controller;

