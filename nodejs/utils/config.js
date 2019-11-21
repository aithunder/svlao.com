module.exports = {
  PORT: 3000,
  MINER_URL: ["ws://localhost:8546"],
  MINER_WALLET: "0x0c045de99ac7d06e5400af4b684368227db5f5be",
  STUDENT_BASIC_CONTRACT_ABI: [{"inputs":[{"internalType":"address","name":"ownerAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"maSV","type":"string"},{"indexed":false,"internalType":"string","name":"hoTen","type":"string"},{"indexed":false,"internalType":"string","name":"ngaySinh","type":"string"},{"indexed":false,"internalType":"string","name":"truong","type":"string"}],"name":"CapNhatThongTinCoBan","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"masv","type":"string"},{"indexed":false,"internalType":"string","name":"doanThanhNien","type":"string"},{"indexed":false,"internalType":"string","name":"lienDoan","type":"string"},{"indexed":false,"internalType":"string","name":"hoiPhuNu","type":"string"},{"indexed":false,"internalType":"string","name":"dangVienDuBi","type":"string"},{"indexed":false,"internalType":"string","name":"dangVien","type":"string"}],"name":"CapNhatThongTinDoan","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"maSV","type":"string"},{"indexed":false,"internalType":"string","name":"congViecChinh","type":"string"},{"indexed":false,"internalType":"string","name":"soThongTuLao","type":"string"},{"indexed":false,"internalType":"string","name":"soThongTuVN","type":"string"},{"indexed":false,"internalType":"string","name":"ghiChu","type":"string"}],"name":"CapNhatThongTinKhac","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"maSV","type":"string"},{"indexed":false,"internalType":"string","name":"capHoc","type":"string"},{"indexed":false,"internalType":"string","name":"nganh","type":"string"},{"indexed":false,"internalType":"string","name":"khoaHoc","type":"string"},{"indexed":false,"internalType":"string","name":"loaiHocBong","type":"string"},{"indexed":false,"internalType":"string","name":"namNhapHoc","type":"string"},{"indexed":false,"internalType":"string","name":"namKetThuc","type":"string"}],"name":"CapNhatThongTinKhoaHoc","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"maSV","type":"string"},{"indexed":false,"internalType":"string","name":"dienThoai","type":"string"},{"indexed":false,"internalType":"string","name":"email","type":"string"},{"indexed":false,"internalType":"string","name":"kiTucXa","type":"string"}],"name":"CapNhatThongTinLienHe","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"maSv","type":"string"}],"name":"ThemThongTinCoBan","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"maSv","type":"string"}],"name":"ThemThongTinKhac","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"maSv","type":"string"}],"name":"ThemThongTinKhoaHoc","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"maSv","type":"string"}],"name":"ThemThongTinLienHe","type":"event"},{"constant":true,"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"CacHinhDaiDien","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"CacMaSinhVien","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"CacTenSinhVien","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"CacThongTinCoBan","outputs":[{"internalType":"string","name":"HoTen","type":"string"},{"internalType":"string","name":"NgaySinh","type":"string"},{"internalType":"string","name":"Truong","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"CacThongTinDoan","outputs":[{"internalType":"string","name":"DoanThanhNien","type":"string"},{"internalType":"string","name":"LienDoan","type":"string"},{"internalType":"string","name":"HoiPhuNu","type":"string"},{"internalType":"string","name":"DangVienDuBi","type":"string"},{"internalType":"string","name":"DangVien","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"CacThongTinKhac","outputs":[{"internalType":"string","name":"CongViecChinh","type":"string"},{"internalType":"string","name":"SoThongTuLao","type":"string"},{"internalType":"string","name":"SoThongTuVN","type":"string"},{"internalType":"string","name":"GhiChu","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"CacThongTinKhoaHoc","outputs":[{"internalType":"string","name":"CapHoc","type":"string"},{"internalType":"string","name":"Nganh","type":"string"},{"internalType":"string","name":"KhoaHoc","type":"string"},{"internalType":"string","name":"LoaiHocBong","type":"string"},{"internalType":"string","name":"NamNhapHoc","type":"string"},{"internalType":"string","name":"NamKetThuc","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"CacThongTinLienHe","outputs":[{"internalType":"string","name":"DienThoai","type":"string"},{"internalType":"string","name":"Email","type":"string"},{"internalType":"string","name":"KiTucXa","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOnwer","type":"address"}],"name":"ChangeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"Owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"maSV","type":"string"},{"internalType":"string","name":"duongDan","type":"string"}],"name":"SuaHinhDaiDien","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"maSV","type":"string"},{"internalType":"string","name":"hoTen","type":"string"},{"internalType":"string","name":"ngaySinh","type":"string"},{"internalType":"string","name":"truong","type":"string"}],"name":"SuaThongTinCoBan","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"maSV","type":"string"},{"internalType":"string","name":"doanThanhNien","type":"string"},{"internalType":"string","name":"lienDoan","type":"string"},{"internalType":"string","name":"hoiPhuNu","type":"string"},{"internalType":"string","name":"dangVienDuBi","type":"string"},{"internalType":"string","name":"dangVien","type":"string"}],"name":"SuaThongTinDoan","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"maSV","type":"string"},{"internalType":"string","name":"congViecChinh","type":"string"},{"internalType":"string","name":"soThongTuLao","type":"string"},{"internalType":"string","name":"soThongTuVN","type":"string"},{"internalType":"string","name":"ghiChu","type":"string"}],"name":"SuaThongTinKhac","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"maSV","type":"string"},{"internalType":"string","name":"capHoc","type":"string"},{"internalType":"string","name":"nganh","type":"string"},{"internalType":"string","name":"khoaHoc","type":"string"},{"internalType":"string","name":"loaiHocBong","type":"string"},{"internalType":"string","name":"namNhapHoc","type":"string"},{"internalType":"string","name":"namKetThuc","type":"string"}],"name":"SuaThongTinKhoaHoc","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"maSV","type":"string"},{"internalType":"string","name":"dienThoai","type":"string"},{"internalType":"string","name":"email","type":"string"},{"internalType":"string","name":"kiTucXa","type":"string"}],"name":"SuaThongTinLienHe","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"TongSinhVien","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],
  STUDENT_RESULT_CONTRACT_ABI: [{"inputs":[{"internalType":"address","name":"ownerAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"maSv","type":"string"},{"indexed":false,"internalType":"string","name":"soHieu","type":"string"},{"indexed":false,"internalType":"string","name":"namTotNghiep","type":"string"},{"indexed":false,"internalType":"string","name":"xepLoai","type":"string"},{"indexed":false,"internalType":"string","name":"hinhThucDaoTao","type":"string"},{"indexed":false,"internalType":"string","name":"ngayCap","type":"string"}],"name":"CapNhatThongTinBang","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"masv","type":"string"},{"indexed":false,"internalType":"string","name":"maMonHoc","type":"string"},{"indexed":false,"internalType":"string","name":"ten","type":"string"},{"indexed":false,"internalType":"string","name":"ketQua","type":"string"}],"name":"CapNhatThongTinDiem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"maSV","type":"string"},{"indexed":false,"internalType":"string","name":"monHoc","type":"string"}],"name":"CapNhatThongTinNgoaiKhoa","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"maSV","type":"string"},{"indexed":false,"internalType":"string","name":"noiThucTap","type":"string"},{"indexed":false,"internalType":"string","name":"thoiGianThucTap","type":"string"},{"indexed":false,"internalType":"string","name":"diemThucTap","type":"string"},{"indexed":false,"internalType":"string","name":"congViecthucTap","type":"string"},{"indexed":false,"internalType":"string","name":"ghiChu","type":"string"}],"name":"CapNhatThongTinThucTap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"maSv","type":"string"}],"name":"ThemThongTinBang","type":"event"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"CacMaSinhVien","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"CacTenSinhVien","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"CacThongTinBang","outputs":[{"internalType":"string","name":"SoHieu","type":"string"},{"internalType":"string","name":"NamTotNghiep","type":"string"},{"internalType":"string","name":"XepLoai","type":"string"},{"internalType":"string","name":"HinhThucDaoTao","type":"string"},{"internalType":"string","name":"NgayCap","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"name":"CacThongTinDiem","outputs":[{"internalType":"string","name":"Ten","type":"string"},{"internalType":"string","name":"KetQua","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"CacThongTinNgoaiKhoa","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"CacThongTinThucTap","outputs":[{"internalType":"string","name":"NoiThucTap","type":"string"},{"internalType":"string","name":"ThoiGianThucTap","type":"string"},{"internalType":"string","name":"DiemThucTap","type":"string"},{"internalType":"string","name":"CongViecThucTap","type":"string"},{"internalType":"string","name":"GhiChu","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOnwer","type":"address"}],"name":"ChangeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"Owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"maSV","type":"string"},{"internalType":"string","name":"hoTen","type":"string"},{"internalType":"string","name":"soHieu","type":"string"},{"internalType":"string","name":"namTotNghiep","type":"string"},{"internalType":"string","name":"xepLoai","type":"string"},{"internalType":"string","name":"hinhThucDaoTao","type":"string"},{"internalType":"string","name":"ngayCap","type":"string"}],"name":"SuaThongTinBangTotNghiep","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"maSV","type":"string"},{"internalType":"string","name":"maMonHoc","type":"string"},{"internalType":"string","name":"ten","type":"string"},{"internalType":"string","name":"ketQua","type":"string"}],"name":"SuaThongTinDiem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"maSV","type":"string"},{"internalType":"string","name":"monHoc","type":"string"}],"name":"SuaThongTinNgoaiKhoa","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"maSV","type":"string"},{"internalType":"string","name":"noiThucTap","type":"string"},{"internalType":"string","name":"thoiGianThucTap","type":"string"},{"internalType":"string","name":"diemThucTap","type":"string"},{"internalType":"string","name":"congViecthucTap","type":"string"},{"internalType":"string","name":"ghiChu","type":"string"}],"name":"SuaThongTinThucTap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"TongBangTotNghiep","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],
  STUDENT_BASIC_CONTRACT_ADDRESS: "0x6EcaeB3658A8e782425b3B08abDb05487a51000f",
  STUDENT_RESULT_CONTRACT_ADDRESS: "0xB02069913531E8DB05526e8E289d7F3Be12e5df1",
  SUBJECT: [{ subjectId: "N1", subjectName: "Năm học thứ nhất" }, { subjectId: "N2", subjectName: "Năm học thứ hai" }, { subjectId: "N3", subjectName: "Năm học thứ ba" }, { subjectId: "N4", subjectName: "Năm học thứ tư" }, { subjectId: "N5", subjectName: "Năm học thứ năm" }],
}
