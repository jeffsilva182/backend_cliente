const express = require('express');
const ClienteController = require ('../controllers/clienteController.js');
const router = express.Router();
 
router.post('/produto', ClienteController.Insert);
router.get('/produto', ClienteController.SelectAll);
router.get('/produto/:id', ClienteController.SelectDetail);
router.put('/produto/:id', ClienteController.Update);
router.delete('/produto/:id', ClienteController.Delete);
module.exports = router;