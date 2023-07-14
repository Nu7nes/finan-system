import express from 'express';
import config from '../controllers/config.js';
import amountController from '../controllers/amountController.js';
import groupController from '../controllers/groupController.js';
import path from 'path';
const router = express.Router();
import cors from 'cors';

const options = {
    origin: "http://localhost:3000"
}

// router.get('/', (req, res) => { res.render('/public/index') });
// router.get('/', (req, res) => { res.sendFile(path.join(__dirname, 'public')) })
router.get('/time', config.getTime);
router.get('/amounts', amountController.all);
router.get('/amounts/:id', amountController.byId)
router.get('/:type/:group', amountController.redirect);
router.get('/groups', groupController.all);
router.get('/group/:group', groupController.same);


// router.post('/new/amount', express.urlencoded({ extended: true }), amountController.addAmount);
router.post('/new/amount', express.json(), amountController.addAmount);
// router.post('/new/group', express.urlencoded({ extended: true }), groupController.addGroup);
router.post('/new/group', express.json(), groupController.addGroup);

router.put('/deleteGroup', express.json(), groupController.deleteGroup);
router.delete('/deleteAmount', express.json(), amountController.deleteAmount);
// router.post('/', express.urlencoded({ extended: true }), linkController.addLink);


export default router;