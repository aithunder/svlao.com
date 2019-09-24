geth --identity "miner1" --networkid 8 --datadir "~/Desktop/private-blockchain/miner1" --mine --rpc --rpcapi "db,eth,net,web3,personal" --rpcport "8545" --unlock 0 --password ~/Desktop/private-blockchain/miner1/password.sec --ipcpath "~/.ethereum/geth.ipc" --targetgaslimit '9000000000000' 

# --allow-insecure-unlock

# 
