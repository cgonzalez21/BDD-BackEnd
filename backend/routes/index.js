var express = require('express');
var router = express.Router();
var empresa = require('../controllers/empresa');
var cliente = require('../controllers/cliente');
var inventario = require('../controllers/inventario');
var sucursal = require("../controllers/sucursal");

//routers of client
router.get("/getClient/:id", cliente.get);
router.post("/saveClient", cliente.save);

//routers of empresa
router.get("/getEmpresa", empresa.get);

//routers of inventory
router.get("/getInventario/:id", inventario.get);

//routers of sucursal
router.get("/getSucursal", sucursal.get);


module.exports = router;