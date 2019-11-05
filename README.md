
# xac-thuc-sinh-vien
## Goals:
- Save student information on blockchain.
- Create website to search student information.

## Install environment:
### Requirement:
-	Nodejs version >= 10.16.3.
- Geth version >= 1.9.6.
- Windows need windows-build-tools to install web3 (install it with npm).
- Linux need build-essential to install web3 (install it with package manager).
### Private ethereum:
- Open terminal or command prompt in xac-thuc-sinh-vien/ethereum/ directory.
- Input command:
```shellscript
geth --datadir miner1/ init genesis.json
geth --datadir miner1/ account new
```
- Change password to password.sec in folder miner1.
- Change path to folder miner1 in file xac-thuc-sinh-vien /ethereum/minere1/startMiner1.sh or /ethereum/minere1/startMiner1.bat.
- Then execute file startMiner1, run sh extension if on linux, bat extension if on windows:
```shellscript
miner1/startMiner1.sh
```
- Open new terminal or command prompt.
- If on linux, input command:
```shellscript
geth attach
```
- If on windows, input command:
```shellscript
geth attach ipc:\\.\pipe\geth-data1.ipc
```
- On geth console, input to begin mining:
```javascript
miner.start()
```
### Smart contract:
- Open [http://remix.ethereum.org/](http://remix.ethereum.org/).
- Open Student contract in xac-thuc-sinh-vien/solidity/studentAuthentication.sol.
- Install plugin  DEPLOY & RUN TRANSACTIONS and SOLIDITY COMPILER.
- On SOLIDITY COMPILER, choose EVM version is byzantinum, then press compile.
- On DEPLOY & RUN TRANSACTIONS, choose Environment is web3 Provider.
- Connect Metamask with your private ethereum (localhost:8545), then create new account and copy address.
- Pass new address and Press Deploy.
- Copy Deployed Contracts address.
### Server:
- Open terminal or command prompt in xac-thuc-sinh-vien/nodejs/, input command:
```shellscript
npm install
```
- Open file config in folder utils, replace  CONTRACT_ADDRESS value with copied contract address above.
- Then run:
```shellscript
node app.js
``` 