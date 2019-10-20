const express = require ('express');
const router = express.Router();

const studentController = require ('../controllers/ethereum');

router.get ('/student', studentController.getStudent);
router.get ('/list', studentController.getListStudent);
router.get ('/mark', studentController.getMark);
router.get ('/contract', studentController.getSmartContract);
router.get ('/owner', studentController.getOwner);

module.exports = router;