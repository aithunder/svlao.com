
pragma solidity >=0.5.3;

contract KetQua {
    address Root;
    address public Owner;
    uint public TongBangTotNghiep = 0;
    
    struct ThongTinBang {
        string SoHieu;
        string NamTotNghiep;
        string XepLoai;
        string HinhThucDaoTao;
        string NgayCap;
    }
    mapping (string => ThongTinBang) public CacThongTinBang;
    
    struct ThongTinThucTap {
        string NoiThucTap;
        string ThoiGianThucTap;
        string DiemThucTap;
        string CongViecThucTap;
        string GhiChu;
    }
    mapping (string => ThongTinThucTap) public CacThongTinThucTap;
    
    struct ThongTinDiem {
	    string Ten;
	    string KetQua;
	}
	mapping(string => mapping(string => ThongTinDiem)) public CacThongTinDiem;
    
    // index a certificate id:
    mapping (uint => string) public CacMaSinhVien;
    mapping (string => string) public CacTenSinhVien;
    mapping (string => string) public CacThongTinNgoaiKhoa;
    
    // event:
	event ThemThongTinBang(string maSv);
	event CapNhatThongTinBang(string maSv, string soHieu, string namTotNghiep, string xepLoai, string hinhThucDaoTao, string ngayCap);
    event CapNhatThongTinNgoaiKhoa(string maSV, string monHoc);
    event CapNhatThongTinThucTap(string maSV, string noiThucTap, string thoiGianThucTap, string diemThucTap, string congViecthucTap, string ghiChu);
	event CapNhatThongTinDiem(string masv, string maMonHoc, string ten, string ketQua);
	
	// check is admin when do transaction:
	modifier OnlyOwner() {
	    require(msg.sender == Owner || msg.sender == Root);
	    _;
	}
	
	// set default user as admin:
	constructor(address ownerAddress) public {
	    Root = msg.sender;
	    Owner = ownerAddress;
	}
	
	// modify information:
	function SuaThongTinBangTotNghiep(string memory maSV, 
	    string memory hoTen,
	    string memory soHieu, 
	    string memory namTotNghiep, 
	    string memory xepLoai, 
	    string memory hinhThucDaoTao, 
	    string memory ngayCap
    ) public OnlyOwner {
	    if(bytes(CacTenSinhVien[maSV]).length == 0) {
	        CacMaSinhVien[TongBangTotNghiep++] = maSV;
	        CacTenSinhVien[maSV] = hoTen;
	        emit ThemThongTinBang(maSV);
	    }
	    else emit CapNhatThongTinBang(maSV, soHieu, namTotNghiep, xepLoai, hinhThucDaoTao, ngayCap);
	    CacThongTinBang[maSV] = ThongTinBang(soHieu, namTotNghiep, xepLoai, hinhThucDaoTao, ngayCap);
	}
	
	function SuaThongTinNgoaiKhoa(string memory maSV, string memory monHoc) public OnlyOwner {
	    require(bytes(CacTenSinhVien[maSV]).length != 0);
	    CacThongTinNgoaiKhoa[maSV] = monHoc;
	}
	
	function SuaThongTinThucTap(string memory maSV, string memory noiThucTap, string memory thoiGianThucTap, string memory diemThucTap, string memory congViecthucTap, string memory ghiChu) public OnlyOwner {
	    require(bytes(CacTenSinhVien[maSV]).length != 0);
	    CacThongTinThucTap[maSV] = ThongTinThucTap(noiThucTap, thoiGianThucTap, diemThucTap, congViecthucTap, ghiChu);
	    emit CapNhatThongTinThucTap(maSV, noiThucTap, thoiGianThucTap, diemThucTap, congViecthucTap, ghiChu);
	}
	
	function SuaThongTinDiem(string memory maSV, string memory maMonHoc, string memory ten, string memory ketQua) public OnlyOwner {
	    require(bytes(CacTenSinhVien[maSV]).length != 0);
	    CacThongTinDiem[maSV][maMonHoc] = ThongTinDiem(ten, ketQua);
	    emit CapNhatThongTinDiem(maSV, maMonHoc, ten, ketQua);
	}
	
	function ChangeOwner(address newOnwer) public OnlyOwner {
	    Owner = newOnwer;
	}
}
