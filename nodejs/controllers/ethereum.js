const smartContract = require('../models/ethereum');
const config = require('../utils/config');

function getMark(studentId, subject) {
  return new Promise((resolve, reject) => {
    smartContract.methods.getMark(studentId, subject.subjectId).call({ from: config.MINER_WALLET }).then(result => {
      if (result)
        resolve({
          subjectName: result.subjectName || subject.subjectName,
          value: result.value || 0
        });
      else
        reject("lỗi tìm điểm môn " + subject.subjectName + " của sinh viên " + studentId);
    });
  })
}

module.exports = {
  setStudent: function (req, res) {
    // return 2 txhash for client if transaction successful:
    const result = {};
    const { id, name, birth, school, level, majors, course, year, phone, email, dormitory, scholarshipType, laosCirculars, vnCirculars, mainJob, admissionYear, endYear, note } = req.body;

    smartContract.methods.setStudent(id, name, birth, school, level, majors, course, year, phone, email)
      .send({ from: config.MINER_WALLET, gas: 1500000, gasPrice: '30000000000000' }, (err, txhash) => {
        if (!err && txhash) {
          result.studentTxhash = txhash;
          smartContract.methods.setDetailStudent(id, dormitory, scholarshipType, laosCirculars, vnCirculars, mainJob, admissionYear, endYear, note)
            .send({ from: config.MINER_WALLET, gas: 1500000, gasPrice: '30000000000000' }, (err, txhash) => {
              if (txhash) {
                result.detailStudentTxhash = txhash;
                console.log("Đã lưu thông tin của sinh viên " + id);
                return res.status(200).json(result);
              }
              else {
                console.log("Lôi khi lưu thông tin chi tiết sinh viên: " + err);
                return res.status(400).json({ message: "Lôi khi lưu thông tin chi tiết sinh viên" });
              }
            });
        }
        else {
          console.log("Lôi khi lưu thông tin sinh viên: " + err);
          return res.status(400).json({ message: "Lôi khi lưu thông tin sinh viên" });
        }
      });
  },
  getStudent: function (req, res) {
    const result = {};

    smartContract.methods.getStudent(req.query.id).call({ from: config.MINER_WALLET }).then(student => {
      if (student) {
        result.student = student;
        smartContract.methods.getDetailStudent(req.query.id).call({ form: config.MINER_WALLET }).then(detailStudent => {
          if (detailStudent) {
            result.detail = detailStudent;
            return res.status(200).json(result);
          }
          else
            reject("Not found detail student info with provided id");
        });
      }
      else {
        reject("Not found student info with provided id");
      }
    });
  },
  setMark: function (req, res) {
    const { studentId, subjectId, subjectName, value } = req.body;
    smartContract.methods.setMark(studentId, subjectId, subjectName, value)
      .send({ from: config.MINER_WALLET, gas: 1500000, gasPrice: '30000000000000' }, (err, txhash) => {
        if (txhash) {
          console.log("Đã lưu điểm môn " + subjectName + " cho sinh viên " + studentId);
          return res.status(200).json(txhash);
        }
        else {
          console.log("Lưu điểm không thành công");
          return res.status(400).json({ message: "Lưu điểm không thành công" });
        }
      });
  },
  getMark: async function (req, res) {
    const promiseArray = [];
    for (let i = 0; i < config.SUBJECT.length; i++) {
      let promiseTemp = await getMark(req.query.id, config.SUBJECT[i]);
      promiseArray.push(promiseTemp);
    }
    await Promise.all(promiseArray).then(value => {
    return res.status(200).json(value);
    });
  }
}

// , gas: 1500000, gasPrice: '30000000000000'
//id,
//name,
//birth,
//school,
//level,
//majors,
//course,
//year,
//phone,
//email,
//dormitory,
//scholarshipType,
//laoCirculars,
//vnCirculars,
//mainJob,
//admissionYear,
//endYear,
//note