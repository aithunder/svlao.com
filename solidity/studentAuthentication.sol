pragma solidity >=0.5.3;

/**
 * - only owner (admin) can edit information.
 * - to insert other information, the basic information of a student must not be null.
 * 
 **/

contract SinhVien {
    address Root;
    address public Owner;
    uint public TongSinhVien = 0;
    mapping (uint => string) public CacMaSinhVien;
    
    struct ThongTinCoBan {
		string HoTen;
		string NgaySinh;
		string Truong;
	}
	mapping(string => ThongTinCoBan) public CacThongTinCoBan;
	
	struct ThongTinKhoaHoc {
		string CapHoc;
		string Nganh;
		string KhoaHoc;
		string LoaiHocBong;
		string NamNhapHoc;
		string NamKetThuc;
	}
	mapping(string => ThongTinKhoaHoc) public CacThongTinKhoaHoc;
	
	struct ThongTinLienHe {
		string DienThoai;
		string Email;
		string KiTucXa;
	}
	mapping(string => ThongTinLienHe) public CacThongTinLienHe;
	
	struct ThongTinKhac {
		string CongViecChinh;
		string SoThongTuLao;
		string SoThongTuVN;
		string GhiChu;
	}
	mapping(string => ThongTinKhac) public CacThongTinKhac;
	
	struct ThongTinDiem {
	    string Ten;
	    string KetQua;
	}
	mapping(string => mapping(string => ThongTinDiem)) public CacThongTinDiem;
	
	mapping(string => string) public CacHinhDaiDien;
	
	event ThemThongTinCoBan(string maSv);
	event ThemThongTinKhoaHoc(string maSv);
	event ThemThongTinLienHe(string maSv);
	event ThemThongTinKhac(string maSv);
	event ThemThongTinDiem(string masv, string maMonHoc);
	
	event CapNhatThongTinCoBan(string maSV, string hoTen, string ngaySinh, string truong);
	event CapNhatThongTinKhoaHoc(string maSV, string capHoc, string nganh, string khoaHoc, string loaiHocBong, string namNhapHoc, string namKetThuc);
	event CapNhatThongTinLienHe(string maSV, string dienThoai, string email, string kiTucXa);
	event CapNhatThongTinKhac(string maSV, string congViecChinh, string soThongTuLao, string soThongTuVN, string ghiChu);
	event CapNhatThongTinDiem(string masv, string maMonHoc, string ten, string ketQua);
	
	constructor(address ownerAddress) public {
	    Root = msg.sender;
	    Owner = ownerAddress;
	}
	
	modifier OnlyOwner() {
	    require(msg.sender == Owner || msg.sender == Root);
	    _;
	}
	
	function SuaThongTinCoBan(string memory maSV, string memory hoTen, string memory ngaySinh, string memory truong) public OnlyOwner {
	    if(bytes(CacThongTinCoBan[maSV].HoTen).length == 0) {
	        CacMaSinhVien[TongSinhVien++] = maSV;
	        emit ThemThongTinCoBan(maSV);
	    }
	    else emit CapNhatThongTinCoBan(maSV, hoTen, ngaySinh, truong);
	    CacThongTinCoBan[maSV] = ThongTinCoBan(hoTen, ngaySinh, truong);
	}
	
	function SuaThongTinKhoaHoc(string memory maSV, string memory capHoc, string memory nganh, string memory khoaHoc, string memory loaiHocBong, string memory namNhapHoc, string memory namKetThuc ) public {
	    require(bytes(CacThongTinCoBan[maSV].HoTen).length != 0);
	    if(bytes(CacThongTinKhoaHoc[maSV].CapHoc).length == 0)
	        emit ThemThongTinKhoaHoc(maSV);
        else emit CapNhatThongTinKhoaHoc(maSV, capHoc, nganh, khoaHoc, loaiHocBong, namNhapHoc, namKetThuc);
        CacThongTinKhoaHoc[maSV] = ThongTinKhoaHoc(capHoc, nganh, khoaHoc, loaiHocBong, namNhapHoc, namKetThuc);
	}
	
	function SuaThongTinLienHe(string memory maSV, string memory dienThoai, string memory email, string memory kiTucXa) public OnlyOwner {
	    require(bytes(CacThongTinCoBan[maSV].HoTen).length != 0);
	    if(bytes(CacThongTinLienHe[maSV].DienThoai).length == 0)
	        emit ThemThongTinLienHe(maSV);
        else emit CapNhatThongTinLienHe(maSV, dienThoai, email, kiTucXa);
	    CacThongTinLienHe[maSV] = ThongTinLienHe(dienThoai, email, kiTucXa);
	}
	
	function SuaThongTinKhac(string memory maSV, string memory congViecChinh, string memory soThongTuLao, string memory soThongTuVN, string memory ghiChu) public OnlyOwner {
	    require(bytes(CacThongTinCoBan[maSV].HoTen).length != 0);
	    if(bytes(CacThongTinKhac[maSV].CongViecChinh).length == 0)
	        emit ThemThongTinKhac(maSV);
        else emit CapNhatThongTinKhac(maSV, congViecChinh, soThongTuLao, soThongTuVN, ghiChu);
	    CacThongTinKhac[maSV] = ThongTinKhac(congViecChinh, soThongTuLao, soThongTuVN, ghiChu);
	}
	
	function SuaThongTinDiem(string memory maSV, string memory maMonHoc, string memory ten, string memory ketQua) public OnlyOwner {
	    require(bytes(CacThongTinCoBan[maSV].HoTen).length != 0);
	    if(bytes(CacThongTinDiem[maSV][maMonHoc].Ten).length == 0)
	        emit ThemThongTinDiem(maSV, maMonHoc);
        else emit CapNhatThongTinDiem(maSV, maMonHoc, ten, ketQua);
	    CacThongTinDiem[maSV][maMonHoc] = ThongTinDiem(ten, ketQua);
	}
	
	function SuaHinhDaiDien(string memory maSV, string memory duongDan) public OnlyOwner {
	    CacHinhDaiDien[maSV] = duongDan;
	}
	
	function ChangeOwner(address newOnwer) public OnlyOwner {
	    Owner = newOnwer;
	}
}