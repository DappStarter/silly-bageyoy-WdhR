require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture stomach cost outside quality hunt sister army gather'; 
let testAccounts = [
"0xe9c736d382a0bf4e090f7e4bd66114dde6b72455cb2db2adfe12c02a4df4976a",
"0xc8f049a56cd14b7bebf9e60c2169af3475465ab74c4a519701d1b7c49715ac54",
"0x54d3796021b72809f80b2c49deb17b86e562eb53bd37d62cc457e2be2aae8c7d",
"0xed48a40c2649c820c02c57ad323c56d61e924344c48ae8c5e87705e8234eb958",
"0x75f4fb79228ba67c119e54db91f16786daf197c60f17b6fcb3c8b9f85172d6ce",
"0x7d899e1090c20b7e0deae35189ec1b800fc38c66eefb9f48b092812453fee8f9",
"0xedc61758098ff49d0e14539780ef062c19293b59dc94f7ad24c1b702cdcba09f",
"0x973740698e3903467299879b7bc340841f3976929687c93fb474908f335aa4bc",
"0x68ed4e47712fa6232ac1d99b6c1977aca38637e5a930dafbf774aa2286579fb4",
"0xc8afa63999cb519b2bc38431cf139112eb6f78c60c3c985e49ced0c9838b73d1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

