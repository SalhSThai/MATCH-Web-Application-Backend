const express = require('express');
const upload = require('../middlewares/upload');

const adminController = require('../controllers/adminController');
const authenticate = require('../middlewares/authenticate');

const router = express.Router();

router.route('/createInterest').post(
  authenticate,
  upload.fields([
    { name: 'icon', maxCount: 1 },
    { name: 'interestImage', maxCount: 1 }
  ]),
  adminController.createInterest
);

router.get('/getAll', authenticate, adminController.getAll);
router.get('/getOne/:id', authenticate, adminController.getOne);

router.delete(
  '/deleteInterest/:id',
  authenticate,
  adminController.deleteInterest
);

router.patch(
  '/updateInterest/:id',
  authenticate,
  upload.fields([
    { name: 'icon', maxCount: 1 },
    { name: 'interestImage', maxCount: 1 }
  ]),
  adminController.updateInterest
);

module.exports = router;
