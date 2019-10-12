const smartContract = require('../models/ethereum');
const config = require('../utils/config');

// function get mark per subject of a student:
function getMarkByStudentAndSubject(studentId, subject) {
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
            res.status(404).json({ message: "Không tìm thấy thông tin chi tiết của sinh viên" });
        });
      }
      else {
        res.status(404).json({ message: "Không tìm thấy thông tin của sinh viên" });
      }
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