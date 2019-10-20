const smartContract = require('../models/ethereum');
const config = require('../utils/config');

// function get mark per subject of a student:
function getMarkByStudentAndSubject(studentId, subject) {
  return new Promise((resolve, reject) => {
    smartContract.methods.CacThongTinDiem(studentId, subject.subjectId).call().then(result => {
      if (result)
        resolve({
          subjectName: result.subjectName || subject.subjectName,
          value: result.value || 0
        });
      else
        reject("lỗi tìm điểm " + subject.subjectName + " của sinh viên " + studentId);
    });
  })
}

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
    if (config.CONTRACT_ABI && config.CONTRACT_ADDRESS)
      res.status(200).json({ "ABI": config.CONTRACT_ABI, "address": config.CONTRACT_ADDRESS });
    else
      res.status(404).json({ message: "Không tìm thấy địa chỉ smart contract nào trong hệ thống" });
  },
  getListStudent: async function (req, res) {
    const promiseArray = [];

    smartContract.methods.TongSinhVien().call().then(async soLuongSV => {
      for (let i = 0; i < soLuongSV; i++) {
        let promiseTemp = await getStudentIdByIndex(i);
        promiseArray.push(promiseTemp);
      }
      await Promise.all(promiseArray).then(value => {
        return res.status(200).json(value);
      });
    });
  },
  getStudent: function (req, res) {
    const result = {};

    smartContract.methods.CacThongTinCoBan(req.query.id).call().then(thongTinCoBan => {
      result.thongTinCoBan = thongTinCoBan;

      smartContract.methods.CacThongTinKhoaHoc(req.query.id).call().then(thongTinKhoaHoc => {
        result.thongTinKhoaHoc = thongTinKhoaHoc;

        smartContract.methods.CacThongTinLienHe(req.query.id).call().then(thongTinLienHe => {
          result.thongTinLienHe = thongTinLienHe;

          smartContract.methods.CacThongTinKhac(req.query.id).call().then(thongTinKhac => {
            result.thongTinKhac = thongTinKhac;

            smartContract.methods.CacHinhDaiDien(req.query.id).call().then(hinhDaiDien => {
              result.hinhDaiDien = hinhDaiDien;
              res.status(200).json(result);
            });
          });
        });
      });
    });
  },
  getMark: async function (req, res) {
    const promiseArray = [];
    for (let i = 0; i < config.SUBJECT.length; i++) {
      let promiseTemp = await getMarkByStudentAndSubject(req.query.id, config.SUBJECT[i]);
      promiseArray.push(promiseTemp);
    }
    await Promise.all(promiseArray).then(value => {
      return res.status(200).json(value);
    });
  }
}