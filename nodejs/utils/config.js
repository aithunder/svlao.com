module.exports = {
  PORT: 3000,
  MINER_URL: ["ws://localhost:8545", "ws://localhost:8546", "ws://localhost:8547", "ws://localhost:8548"],
  MINER_WALLET: "0x0c045de99ac7d06e5400af4b684368227db5f5be",
  CONTRACT_ABI: [{"constant":true,"inputs":[],"name":"countStudent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"id","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"birth","type":"string"},{"internalType":"string","name":"school","type":"string"},{"internalType":"string","name":"level","type":"string"},{"internalType":"string","name":"majors","type":"string"},{"internalType":"string","name":"course","type":"string"},{"internalType":"string","name":"year","type":"string"},{"internalType":"string","name":"phone","type":"string"},{"internalType":"string","name":"email","type":"string"}],"name":"setStudent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"id","type":"string"},{"internalType":"string","name":"dormitory","type":"string"},{"internalType":"string","name":"scholarshipType","type":"string"},{"internalType":"string","name":"laosCirculars","type":"string"},{"internalType":"string","name":"vnCirculars","type":"string"},{"internalType":"string","name":"mainJob","type":"string"},{"internalType":"string","name":"admissionYear","type":"string"},{"internalType":"string","name":"endYear","type":"string"},{"internalType":"string","name":"note","type":"string"}],"name":"setDetailStudent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"string","name":"studentId","type":"string"},{"internalType":"string","name":"subjectId","type":"string"},{"internalType":"string","name":"subjectName","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"setMark","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"indexUser","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"countUser","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"id","type":"string"}],"name":"getDetailStudent","outputs":[{"internalType":"string","name":"dormitory","type":"string"},{"internalType":"string","name":"scholarshipType","type":"string"},{"internalType":"string","name":"laosCirculars","type":"string"},{"internalType":"string","name":"vnCirculars","type":"string"},{"internalType":"string","name":"mainJob","type":"string"},{"internalType":"string","name":"admissionYear","type":"string"},{"internalType":"string","name":"endYear","type":"string"},{"internalType":"string","name":"note","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"Users","outputs":[{"internalType":"string","name":"username","type":"string"},{"internalType":"uint256","name":"permission","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"indexStudent","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"studentId","type":"string"},{"internalType":"string","name":"subjectId","type":"string"}],"name":"getMark","outputs":[{"internalType":"string","name":"subjectName","type":"string"},{"internalType":"string","name":"value","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"wallet","type":"address"},{"internalType":"string","name":"username","type":"string"},{"internalType":"uint256","name":"permission","type":"uint256"}],"name":"setUser","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"id","type":"string"}],"name":"getStudent","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"birth","type":"string"},{"internalType":"string","name":"school","type":"string"},{"internalType":"string","name":"level","type":"string"},{"internalType":"string","name":"majors","type":"string"},{"internalType":"string","name":"course","type":"string"},{"internalType":"string","name":"year","type":"string"},{"internalType":"string","name":"phone","type":"string"},{"internalType":"string","name":"email","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"wallet","type":"address"},{"indexed":false,"internalType":"string","name":"username","type":"string"},{"indexed":false,"internalType":"uint256","name":"permission","type":"uint256"}],"name":"CreatedUser","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"wallet","type":"address"},{"indexed":false,"internalType":"string","name":"username","type":"string"},{"indexed":false,"internalType":"uint256","name":"permission","type":"uint256"}],"name":"UpdatedUser","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"studentId","type":"string"}],"name":"CreatedStudent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"studentId","type":"string"}],"name":"UpdatedStudent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"studentId","type":"string"}],"name":"CreatedDetailStudent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"studentId","type":"string"}],"name":"UpdatedDetailStudent","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"studentId","type":"string"},{"indexed":false,"internalType":"string","name":"subjectName","type":"string"},{"indexed":false,"internalType":"string","name":"value","type":"string"}],"name":"savedMark","type":"event"}],
  CONTRACT_ADDRESS: "0x4d943a35dd91e68bc21152e092b29903e0a51d3a",
  SUBJECT: [{ subjectId: "01W", subjectName: "Thiết kế web" }, { subjectId: "02D", subjectName: "Cơ sở dữ liệu" }, { subjectId: "03J", subjectName: "Lập trình Java" }],
}
