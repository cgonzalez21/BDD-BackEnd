var express = require('express');
var router = express.Router();
var empresa = require('../controllers/empresa');
var cliente = require('../controllers/cliente');
var inventario = require ('../controllers/inventario');
var articulo = require ("../controllers/articulo");

//routers of client
router.get("/getClient", cliente.get);
router.post("/saveClient", cliente.save);

//routers of empresa
router.get("/getEmpresa", empresa.get);

//routers of inventory
router.get("/getInventario", inventario.getAll);
router.get("/getInventario/:id_almacen", inventario.getOne);

//routers of articule
router.get("/getAllArticulo", articulo.getAll);
module.exports = router;