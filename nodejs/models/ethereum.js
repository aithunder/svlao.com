const Web3 = require("web3");
const config = require("../utils/config");

// init web3 by using local miner as provider:
const web3 = new Web3(config.MINER_URL);

// check connecting to ethereum:
web3.eth.net.isListening(function (error, result) {
  if (error) {
    console.error("Lỗi kết nối ethereum: ", error);
  } else {
    console.log("Đã sử dụng provider từ miner " + config.MINER_URL);
  }
});
module.exports = new web3.eth.Contract(config.CONTRACT_ABI, config.CONTRACT_ADDRESS);