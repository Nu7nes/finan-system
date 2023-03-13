const express = require('express');
const amountController = require('../controllers/amountController');
const groupController = require('../controllers/groupController');
const router = express.Router();
const cors = require('cors');

const options = {
    origin: "http://localhost:3000"
}

// router.get('/', (req, res) => { res.render('index') });
router.get('/amounts', amountController.all)

router.get('/:type/:group', amountController.redirect);

router.get('/groups', groupController.all)

router.get('/group/:group', groupController.same);


router.post('/amount',express.urlencoded({ extended: true }), amountController.addAmount);

router.post('/group',express.urlencoded({ extended: true }), groupController.addGroup);

// router.post('/', express.urlencoded({ extended: true }), linkController.addLink);


module.exports = router;