pragma experimental ABIEncoderV2; // for using struct in function & this may create error, so if meet any error when deploying, check this first.
pragma solidity ^0.5.3;

contract TestDeploy {
    address owner = address(0);     // init owner for this smart contract
    
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
    
    mapping (string => Student) Students;
    mapping (string => DetailStudent) DetailStudents;
    mapping (string => mapping(string => Subject)) Subjects;
    
    // event:
    event savedStudent(
        string studentId,
        string studentName
    );
    event savedDetailStudent(
        string studentId
    );
    event savedMark(
        string studentId,
        string subjectName,
        string value
    );
    
    // only owner can act with data:
    modifier onlyOwner() {
        require (msg.sender == owner);
        _;
    }
    
    constructor() public {
        owner = msg.sender;
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
        string memory email) 
        public onlyOwner {
        Students[id].Name = name;
        Students[id].Birth = birth;
        Students[id].School = school;
        Students[id].Level = level;
        Students[id].Majors = majors;
        Students[id].Course = course;
        Students[id].Year = year;
        Students[id].Phone = phone;
        Students[id].Email = email;
        emit savedStudent(id, name);
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
        string memory note) 
        public onlyOwner {
        DetailStudents[id].Dormitory = dormitory;
        DetailStudents[id].ScholarshipType = scholarshipType;
        DetailStudents[id].LaosCirculars = laosCirculars;
        DetailStudents[id].VNCirculars = vnCirculars;
        DetailStudents[id].MainJob = mainJob;
        DetailStudents[id].AdmissionYear = admissionYear;
        DetailStudents[id].EndYear = endYear;
        DetailStudents[id].Note = note;
        emit savedDetailStudent(id);
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
    function setMark(string memory studentId, string memory subjectId, string memory subjectName, string memory value) public onlyOwner {
        Subjects[studentId][subjectId] = Subject(subjectName, value);
        emit savedMark(studentId, subjectName, value);
    }
    
    // set mark of a student:
    function getMark(string memory studentId, string memory subjectId) public view returns(string memory subjectName, string memory value) {
        Subject memory result = Subjects[studentId][subjectId];
        return(result.Name, result.Value);
    }
}