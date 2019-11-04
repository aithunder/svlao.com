pragma solidity >=0.5.3;

/**
 * Store certificate of a student
 * Only admin can create, update
 * Only admin can change own to other
 * may have some conflict and duplicate with studentAuthentication contract
 * this contract just for demo.
 **/

contract BangCap {
    address Root;
    address public Owner;
    uint public TongBangTotNghiep = 0;
    
    // data of a student certificate:
    struct BangTotNghiep {
        string SoHieu;
        string NamTotNghiep;
        string XepLoai;
        string HinhThucDaoTao;
        string NgayCap;
    }
    
    // a certificate can be find by a studentId:
    mapping (string => BangTotNghiep) public CacBangTotNghiep;
    
    // index a certificate id:
    mapping (uint => string) public CacMaSinhVien;
    
    // event:
	event ThemBangTotNghiep(string maSv);
	event CapNhatBangTotNghiep(string maSv, string soHieu, string namTotNghiep, string xepLoai, string hinhThucDaoTao, string ngayCap);
	
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
	function SuaThongBangTotNghiep(string memory maSV, 
	    string memory soHieu, 
	    string memory namTotNghiep, 
	    string memory xepLoai, 
	    string memory hinhThucDaoTao, 
	    string memory ngayCap
    ) public OnlyOwner {
	    if(bytes(CacBangTotNghiep[maSV].SoHieu).length == 0) {
	        CacMaSinhVien[TongBangTotNghiep++] = maSV;
	        emit ThemBangTotNghiep(maSV);
	    }
	    else emit CapNhatBangTotNghiep(maSV, soHieu, namTotNghiep, xepLoai, hinhThucDaoTao, ngayCap);
	    CacBangTotNghiep[maSV] = BangTotNghiep(soHieu, namTotNghiep, xepLoai, hinhThucDaoTao, ngayCap);
	}
	
	function ChangeOwner(address newOnwer) public OnlyOwner {
	    Owner = newOnwer;
	}
}
