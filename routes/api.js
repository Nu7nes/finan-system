const express = require('express');
const amountController = require('../controllers/amountController');
const groupController = require('../controllers/groupController');
const router = express.Router();
const cors = require('cors');

const options = {
    origin: "http://localhost:3000"
}

// router.get('/', (req, res) => { res.render('index') });

router.get('/:type', amountController.redirect);;

router.get('/:group', groupController.redirect);

// router.post('/', express.urlencoded({ extended: true }), linkController.addLink);


module.exports = router;