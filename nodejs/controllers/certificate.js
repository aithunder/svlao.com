const smartContract = require('../models/ethereum').certificateContract;
const smartContractStudent = require('../models/ethereum').studentContract;
const config = require('../utils/config');

// function get student id with index:
function getStudentIdByIndex(index) {
  return new Promise((resolve, reject) => {
    smartContract.methods.CacMaSinhVien(index).call().then(maSV => {
      if (maSV)
        resolve(maSV);
      else
        reject("Lỗi tìm mã sinh viên theo thứ tự");
    });
  });
}

module.exports = {
	getOwner: function (req, res) {
    smartContract.methods.Owner().call().then(owner => {
      if (owner) res.status(200).json(owner);
      else res.status(404).json({ message: "Không tìm thấy tài khoản" });
    })
  },
  getSmartContract: function (req, res) {
    if (config.CERTIFICATE_CONTRACT_ABI && config.CERTIFICATE_CONTRACT_ADDRESS)
      res.status(200).json({ "ABI": config.CERTIFICATE_CONTRACT_ABI, "address": config.CERTIFICATE_CONTRACT_ADDRESS });
    else
      res.status(404).json({ message: "Không tìm thấy địa chỉ smart contract nào trong hệ thống" });
  },
	getListCertificate: async function (req, res) {
    const promiseArray = [];

    smartContract.methods.TongBangTotNghiep().call().then(async soLuongBang => {
      for (let i = 0; i < soLuongBang; i++) {
        let promiseTemp = await getStudentIdByIndex(i);
        promiseArray.push(promiseTemp);
      }
      await Promise.all(promiseArray).then(value => {
        return res.status(200).json(value);
      });
    });
  },
	getCertificate: function (req, res) {
    const result = {};
		smartContractStudent.methods.CacThongTinCoBan(req.query.id).call().then(thongTinCoBan => {
			result.thongTinCoBan = thongTinCoBan;
			smartContract.methods.CacBangTotNghiep(req.query.id).call().then(bangTotNghiep => {
				result.thongTinBangTotNghiep = bangTotNghiep;
				res.status(200).json(result);
			});
		}); 
  },
}
