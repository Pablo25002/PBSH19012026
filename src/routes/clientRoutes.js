const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const { verifyToken } = require('../controllers/authController');

router.post('/', verifyToken, clientController.createClient);
router.get('/search', verifyToken, clientController.searchClient);
router.get('/', verifyToken, clientController.getClients);
router.get('/:id', verifyToken, clientController.getClientById);
router.put('/:id', verifyToken, clientController.updateClient);
router.delete('/:id', verifyToken, clientController.deleteClient);

module.exports = router;
