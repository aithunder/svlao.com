const Web3 = require("web3");
const config = require("../utils/config");
var currentProvider = 0;  // get first provider from know list in file config.

// function init web3 by using local miner as provider:
const getProvider = () => {
  const provider = new Web3.providers.WebsocketProvider(config.MINER_URL[currentProvider])
  provider.on('connect', () => console.log('Web3 provider Connected, current provider is: ' + config.MINER_URL[currentProvider]));
  provider.on('end', e => {
    console.error('\nWeb3 provider is closed')
    console.log('Attempting to reconnect...');
    // wait for 5s to stable:
    setTimeout(() => {
      if (config.MINER_URL[currentProvider + 1])
        currentProvider++;
      else
        currentProvider = 0;
      web3.setProvider(getProvider());
    }, 5000);
  })
  return provider;
}

// init web3 provider:
const web3 = new Web3(getProvider());

// export smartcontract instance:
module.exports = new web3.eth.Contract(config.CERTIFICATE_CONTRACT_ABI, config.CERTIFICATE_CONTRACT_ADDRESS);
