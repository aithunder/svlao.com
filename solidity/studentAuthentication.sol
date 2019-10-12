pragma experimental ABIEncoderV2; // for using struct in function & this may create error, so if meet any error when deploying, check this first.
pragma solidity ^0.5.3;

contract StudentManagement {
    uint public countUser = 0;
    uint public countStudent = 0;
    
    struct User {
        string username;
        uint permission;
    }
    
    struct Student {
        string Name;
        string Birth;
        string School;
        string Level;
        string Majors;
        string Course;
        string Year;
        string Phone;
        string Email;
    }
    
    struct DetailStudent {
        string Dormitory;
        string ScholarshipType;
        string LaosCirculars;
        string VNCirculars;
        string MainJob;
        string AdmissionYear;
        string EndYear;
        string Note;
    }
    
    struct Subject {
        string Name;
        string Value;
    }
    
    mapping (uint => address) public indexUser;
    mapping (address => User) public Users;
    mapping (uint => string) public indexStudent;
    mapping (string => Student) Students;
    mapping (string => DetailStudent) DetailStudents;
    mapping (string => mapping(string => Subject)) Subjects;
    
    // event:
    event CreatedUser(address wallet, string username, uint permission);
    event UpdatedUser(address wallet, string username, uint permission);
    event CreatedStudent(string studentId);
    event UpdatedStudent(string studentId);
    event CreatedDetailStudent(string studentId);
    event UpdatedDetailStudent(string studentId);
    event savedMark( string studentId, string subjectName, string value );
    
    // only user have writeable permission can do transaction:
    modifier writeable() {
		require(Users[msg.sender].permission == 3 || Users[msg.sender].permission == 7);
		_;
	}

	modifier excutable() {
		require(Users[msg.sender].permission == 7);
		_;
	}
    
    constructor() public {
        indexUser[countUser++] = msg.sender;
        Users[msg.sender] = User('admin', 7);
    }
    
    function setUser(address wallet, string memory username, uint permission) excutable public {
        // require(bytes(Users[wallet].username).length == 0);
	    indexUser[countUser++] = wallet;
	    Users[wallet] = User(username, permission);
	    if (bytes(Users[wallet].username).length == 0)
            emit CreatedUser(wallet, username, permission);
        else
            emit UpdatedUser(wallet, username, permission);
    }
    
    function setStudent(
        string memory id, 
        string memory name, 
        string memory birth, 
        string memory school,
        string memory level,
        string memory majors,
        string memory course,
        string memory year,
        string memory phone,
        string memory email
    )public writeable {
        indexStudent[countStudent++] = id;
        Students[id].Name = name;
        Students[id].Birth = birth;
        Students[id].School = school;
        Students[id].Level = level;
        Students[id].Majors = majors;
        Students[id].Course = course;
        Students[id].Year = year;
        Students[id].Phone = phone;
        Students[id].Email = email;
        if (bytes(Students[id].Name).length == 0)
            emit CreatedStudent(id);
        else
            emit UpdatedStudent(id);
    }
    
    function setDetailStudent(
        string memory id, 
        string memory dormitory, 
        string memory scholarshipType, 
        string memory laosCirculars,
        string memory vnCirculars,
        string memory mainJob,
        string memory admissionYear,
        string memory endYear,
        string memory note
    ) public writeable {
        DetailStudents[id].Dormitory = dormitory;
        DetailStudents[id].ScholarshipType = scholarshipType;
        DetailStudents[id].LaosCirculars = laosCirculars;
        DetailStudents[id].VNCirculars = vnCirculars;
        DetailStudents[id].MainJob = mainJob;
        DetailStudents[id].AdmissionYear = admissionYear;
        DetailStudents[id].EndYear = endYear;
        DetailStudents[id].Note = note;
        if (bytes(DetailStudents[id].Dormitory).length == 0)
            emit CreatedDetailStudent(id);
        else
            emit UpdatedDetailStudent(id);
    }
    
    // get a student by their id:
    function getStudent(string memory id) public view returns(
        string memory name, 
        string memory birth, 
        string memory school,
        string memory level,
        string memory majors,
        string memory course,
        string memory year,
        string memory phone,
        string memory email) {
        Student memory result = Students[id];
        return (result.Name, result.Birth, result.School, result.Level, result.Majors, result.Course, result.Year, result.Phone, result.Email);
    }
    
    // get a student detail by their id:
    function getDetailStudent(string memory id) public view returns(
        string memory dormitory, 
        string memory scholarshipType, 
        string memory laosCirculars,
        string memory vnCirculars,
        string memory mainJob,
        string memory admissionYear,
        string memory endYear,
        string memory note) {
        DetailStudent memory result = DetailStudents[id];
        return (result.Dormitory, result.ScholarshipType, result.LaosCirculars, result.VNCirculars, result.MainJob, result.AdmissionYear, result.EndYear, result.Note);
    }
    
    // save new mark:
    function setMark(string memory studentId, string memory subjectId, string memory subjectName, string memory value) public writeable {
        Subjects[studentId][subjectId] = Subject(subjectName, value);
        emit savedMark(studentId, subjectName, value);
    }
    
    // set mark of a student:
    function getMark(string memory studentId, string memory subjectId) public view returns(string memory subjectName, string memory value) {
        Subject memory result = Subjects[studentId][subjectId];
        return(result.Name, result.Value);
    }
}