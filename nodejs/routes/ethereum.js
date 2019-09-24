const express = require ('express');
const router = express.Router();

const studentController = require ('../controllers/ethereum');

router.post ('/student', studentController.setStudent);
router.get ('/student', studentController.getStudent);
router.post ('/mark', studentController.setMark);
router.get ('/mark', studentController.getMark);

module.exports = router;