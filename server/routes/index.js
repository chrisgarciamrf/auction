import express from 'express';
import { renderBidForm, saveBid, getWinner, clearDatabase} from '../controllers/bidController';
import { renderContact } from '../controllers/contactController';

const router = express.Router();

router.get('/', renderBidForm);
router.get('/contact', renderContact);
router.get('/getWinner', getWinner);

router.post('/saveBid', saveBid);
router.post('/clearDatabase', clearDatabase)

export default router;


