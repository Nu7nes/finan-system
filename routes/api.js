const express = require('express');
const config = require('../controllers/config')
const amountController = require('../controllers/amountController');
const groupController = require('../controllers/groupController');
const path = require('path')
const router = express.Router();
const cors = require('cors');

const options = {
    origin: "http://localhost:3000"
}

// router.get('/', (req, res) => { res.render('/public/index') });
// router.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'public')) })
router.get('/time', config.getTime);
router.get('/amounts', amountController.all)
router.get('/:type/:group', amountController.redirect);
router.get('/groups', groupController.all)
router.get('/group/:group', groupController.same);


router.post('/new/amount', express.urlencoded({ extended: true }), amountController.addAmount);
router.post('/new/group', express.urlencoded({ extended: true }), groupController.addGroup);

router.delete('/deleteGroup', express.json(), groupController.deleteGroup);
router.delete('/deleteAmount', express.json(), amountController.deleteAmount);
// router.post('/', express.urlencoded({ extended: true }), linkController.addLink);


module.exports = router;