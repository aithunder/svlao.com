const express = require ('express');
const router = express.Router();

const studentController = require ('../controllers/ethereum');

router.get ('/student', studentController.getStudent);
router.get ('/mark', studentController.getMark);

module.exports = router;