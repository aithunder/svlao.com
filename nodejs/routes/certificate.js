const express = require ('express');
const router = express.Router();

const certificateController = require ('../controllers/certificate');

router.get ('/certificate', certificateController.getCertificate);
router.get ('/list', certificateController.getListCertificate);
router.get ('/contract', certificateController.getSmartContract);
router.get ('/owner', certificateController.getOwner);

module.exports = router;
