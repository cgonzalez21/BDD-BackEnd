var express = require('express');
var router = express.Router();
var empresa = require('../controllers/empresa');
var cliente = require('../controllers/cliente');
var inventario = require('../controllers/inventario');
var articulo = require("../controllers/articulo");
var sql = require("mssql");

//routers of client
router.get("/getClient/:id", cliente.get);
router.post("/saveClient", cliente.save);

//routers of empresa
router.get("/getEmpresa", empresa.get);

//routers of inventory
router.get("/getAllInventario", inventario.getAll);
router.get("/getInventario/:id", inventario.getOne);

//routers of articule
router.get("/getAllArticulo", articulo.get);


module.exports = router;