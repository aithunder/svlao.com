const studentBasicContract = require('../models/ethereum').studentBasicContract;
const studentResultContract = require('../models/ethereum').studentResultContract;
const config = require('../utils/config');

// get student basic id from index:
function getStudentBasicIdByIndex(index) {
    return new Promise((resolve, reject) => {
        studentBasicContract.methods.CacMaSinhVien(index).call().then(maSV => {
            if (maSV)
                resolve(maSV);
            else
                reject("Lỗi tìm mã sinh viên theo thứ tự");
        });
    });
}

// get student result id from index:
function getStudentResultIdByIndex(index) {
    return new Promise((resolve, reject) => {
        studentResultContract.methods.CacMaSinhVien(index).call().then(maSV => {
            if (maSV)
                resolve(maSV);
            else
                reject("Lỗi tìm mã sinh viên theo thứ tự");
        });
    });
}

// get thong tin co ban:
function getThongTinCoBan(maSV) {
    return new Promise((resolve, reject) => {
        studentBasicContract.methods.CacThongTinCoBan(maSV).call().then(result => {
            if (result)
                resolve(result);
            else
                reject("Không tìm được thông tin sinh viên");
        });
    });
}

// get thong tin lien he:
function getThongTinLienHe(maSV) {
    return new Promise((resolve, reject) => {
        studentBasicContract.methods.CacThongTinLienHe(maSV).call().then(result => {
            if (result)
                resolve(result);
            else
                reject("Không tìm được thông tin sinh viên");
        });
    });
}

// get thong tin khoa hoc:
function getThongTinKhoaHoc(maSV) {
    return new Promise((resolve, reject) => {
        studentBasicContract.methods.CacThongTinKhoaHoc(maSV).call().then(result => {
            if (result)
                resolve(result);
            else
                reject("Không tìm được thông tin sinh viên");
        });
    });
}

// get thong tin khac:
function getThongTinKhac(maSV) {
    return new Promise((resolve, reject) => {
        studentBasicContract.methods.CacThongTinKhac(maSV).call().then(result => {
            if (result)
                resolve(result);
            else
                reject("Không tìm được thông tin sinh viên");
        });
    });
}

// get thong tin ngoai khoa:
function getThongTinNgoaiKhoa(maSV) {
    return new Promise((resolve, reject) => {
        studentBasicContract.methods.CacThongTinNgoaiKhoa(maSV).call().then(result => {
            if (result)
                resolve(result);
            else
                reject("Không tìm được thông tin sinh viên");
        });
    });
}

// get thong tin doan doi:
function getThongTinDoan(maSV) {
    return new Promise((resolve, reject) => {
        studentBasicContract.methods.CacThongTinDoan(maSV).call().then(result => {
            if (result)
                resolve(result);
            else
                reject("Không tìm được thông tin sinh viên");
        });
    });
}

// get hinh dai dien:
function getHinhDaiDien(maSV) {
    return new Promise((resolve, reject) => {
        studentBasicContract.methods.CacHinhDaiDien(maSV).call().then(result => {
            if (result)
                resolve(result);
            else
                reject("Không tìm được thông tin");
        });
    });
}

// get thong tin bang:
function getThongTinBang(maSV) {
    return new Promise((resolve, reject) => {
        studentResultContract.methods.CacThongTinBang(maSV).call().then(result => {
            if (result)
                resolve(result);
            else
                reject("Không tìm được thông tin sinh viên");
        });
    });
}

// get thong tin thuc tap:
function getThongTinThucTap(maSV) {
    return new Promise((resolve, reject) => {
        studentResultContract.methods.CacThongTinThucTap(maSV).call().then(result => {
            if (result)
                resolve(result);
            else
                reject("Không tìm được thông tin sinh viên");
        });
    });
}

// get mark per subject of a student:
function getMarkByStudentAndSubject(studentId, subject) {
    // console.log(subject);
    return new Promise((resolve, reject) => {
        studentResultContract.methods.CacThongTinDiem(studentId, subject.subjectId).call().then(result => {
            if (result)
                resolve({
                    subjectName: result.Ten || subject.subjectName,
                    value: result.KetQua || 0
                });
            else
                reject("lỗi tìm điểm " + subject.subjectName + " của sinh viên " + studentId);
        });
    })
}

// get total student basic amount:
function getAmountStudentBasic() {
    return new Promise((resolve, reject) => {
        studentBasicContract.methods.TongSinhVien().call().then(result => {
            if (result)
                resolve(result);
            else
                reject("Không tìm được thông tin");
        });
    });
}

// get total student result amount:
function getAmountStudentResult() {
    return new Promise((resolve, reject) => {
        studentResultContract.methods.TongBangTotNghiep().call().then(result => {
            if (result)
                resolve(result);
            else
                reject("Không tìm được thông tin");
        });
    });
}

// get student basic name:
function getStudentBasicName(maSV) {
    return new Promise((resolve, reject) => {
        studentBasicContract.methods.CacTenSinhVien(maSV).call().then(result => {
            if (result)
                resolve(result);
            else
                reject("Không tìm được thông tin sinh viên");
        });
    });
}

// get student result name:
function getStudentResultName(maSV) {
    return new Promise((resolve, reject) => {
        studentResultContract.methods.CacTenSinhVien(maSV).call().then(result => {
            if (result)
                resolve(result);
            else
                reject("Không tìm được thông tin sinh viên");
        });
    });
}

// get a student basic:
function getStudenBasicWithIndex(index) {
    const data = {};
    return new Promise(async (resolve, reject) => {
        const id = await getStudentBasicIdByIndex(index);
        const name = await getStudentBasicName(id);
        if (id && name) {
            data.id = id;
            data.name = name;
            resolve(data);
        }
        else reject("Không tìm được thông tin sinh viên");
    });
}

// get a student result:
function getStudenResultWithIndex(index) {
    const data = {};
    return new Promise(async (resolve, reject) => {
        const id = await getStudentResultIdByIndex(index);
        const name = await getStudentResultName(id);
        if (id && name) {
            data.id = id;
            data.name = name;
            resolve(data);
        }
        else reject("Không tìm được thông tin sinh viên");
    });
}

module.exports = {
    // get contract information:
    getSmartContract: function (req, res) {
        if (config.STUDENT_BASIC_CONTRACT_ABI && config.STUDENT_BASIC_CONTRACT_ADDRESS && config.STUDENT_RESULT_CONTRACT_ABI && config.STUDENT_RESULT_CONTRACT_ADDRESS)
            res.status(200).json({ "studentBasic": { "ABI": config.STUDENT_BASIC_CONTRACT_ABI, "address": config.STUDENT_BASIC_CONTRACT_ADDRESS }, "studentResult": { "ABI": config.STUDENT_RESULT_CONTRACT_ABI, "address": config.STUDENT_RESULT_CONTRACT_ADDRESS } });
        else
            res.status(404).json({ message: "Không tìm thấy địa chỉ smart contract nào trong hệ thống" });
    },
    // get basic owner:
    getOwner: function (req, res) {
        studentBasicContract.methods.Owner().call().then(owner => {
            if (owner) res.status(200).json(owner);
            else res.status(404).json({ message: "Không tìm thấy tài khoản" });
        })
    },
    // get result owner:
    getOwner: function (req, res) {
        studentResultContract.methods.Owner().call().then(ownerStudentBasic => {
            if (ownerStudentBasic) {
                studentResultContract.methods.Owner().call().then(ownerStudentResult => {
                    if (ownerStudentResult) res.status(200).json({ "ownerBasic": ownerStudentBasic, "ownerResult": ownerStudentResult });
                    else res.status(404).json({ message: "Không tìm thấy tài khoản" });
                });
            }
            else res.status(404).json({ message: "Không tìm thấy tài khoản" });
        });
    },
    // get list student basic:
    getListStudentBasic: async function (req, res) {
        const promiseArray = [];
        const totalStudent = await getAmountStudentBasic();
        for (let i = 0; i < totalStudent; i++) {
            let promiseTemp = await getStudenBasicWithIndex(i);
            promiseArray.push(promiseTemp);
        }
        await Promise.all(promiseArray).then(value => {
            return res.status(200).json(value);
        });
    },
    // get list student result:
    getListStudentResult: async function (req, res) {
        const promiseArray = [];
        const totalStudent = await getAmountStudentResult();
        for (let i = 0; i < totalStudent; i++) {
            let promiseTemp = await getStudenResultWithIndex(i);
            promiseArray.push(promiseTemp);
        }
        await Promise.all(promiseArray).then(value => {
            return res.status(200).json(value);
        });
    },
    // get detail student basic:
    getDetailStudentBasic: async function (req, res) {
        const data = {};
        data.thongTinCoBan = await getThongTinCoBan(req.query.id).catch(() => { return null; });
        data.thongTinLienHe = await getThongTinLienHe(req.query.id).catch(() => { return null; });
        data.thongTinKhoaHoc = await getThongTinKhoaHoc(req.query.id).catch(() => { return null; });
        data.thongTinDoan = await getThongTinDoan(req.query.id).catch(() => { return null; });
        data.thongTinThucTap = await getThongTinThucTap(req.query.id).catch(() => { return null; });
        data.thongTinKhac = await getThongTinKhac(req.query.id).catch(() => { return null; });
        data.hinhDaiDien = await getHinhDaiDien(req.query.id).catch(() => { return null; });
        return res.status(200).json(data);
    },
    // get detail student result:
    getDetailStudentResult: async function (req, res) {
        const data = {};
        data.tenSV = await getStudentResultName(req.query.id).catch(() => { return null; });
        data.thongTinCoBan = await getThongTinCoBan(req.query.id).catch(() => { return null; });
        data.thongTinBang = await getThongTinBang(req.query.id).catch(() => { return null; });
        data.hinhDaiDien = await getHinhDaiDien(req.query.id).catch(() => { return null; });
        return res.status(200).json(data);
    },
    // get mark:
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