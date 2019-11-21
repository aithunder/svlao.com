const express = require ('express');
const router = express.Router();

const studentController = require ('../controllers/ethereum');

router.get ('/student/list', studentController.getListStudentBasic);
router.get ('/student/detail', studentController.getDetailStudentBasic);
router.get ('/result/list', studentController.getListStudentResult);
router.get ('/result/detail', studentController.getDetailStudentResult);
router.get ('/mark', studentController.getMark);
router.get ('/contract', studentController.getSmartContract);
router.get ('/owner', studentController.getOwner);

module.exports = router;
