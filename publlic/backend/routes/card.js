const express = require("express");

const CompraController = require("../controllers/card");

const router = express.Router();

router.post("/saveCard", CompraController.saveCard);

router.get("/", CompraController.getCard);

module.exports = router;
