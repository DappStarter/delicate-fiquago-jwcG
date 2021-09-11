require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom short blanket crater remain snake imitate prison flush tennis'; 
let testAccounts = [
"0x5233c319766b7739502210d4ea1f79f50b7f8fd88e5cf7b9b2d4afc8c46dc2f9",
"0x97c4ea9d53d2c80e58e8761bf9977900ee7b307dc4d22c764621b72e986eca18",
"0x5880e36e70a9c37d83254b91265a4d8ec5c6ca5c5cc030d52d5ced6c54fdf1aa",
"0x4a611270eeb73d9fe73bc0c7413eab8ec0234da144ffa8f4442b92133ccd40f4",
"0xd329482f382c4f9fd2d8d0eeb4078cb25d61ed0c1a06c7934938e9fb0e65f8cc",
"0x190ed772c8adec8a473a3ba4c13f8882eec87bf72cb939dd71566fecd33beccc",
"0x70de22cf03032605325226d1a29078e6e12237f2f69101c5033f485736b2aefc",
"0x8b8c2de2460134068f1ed2114e19d9b7ffab3baf097eb8a5194cca5d886393bf",
"0x39802c18459535893ac0c5c4ddaa6827495d49dc2f62342fc2a586c3fd63661f",
"0x7d4d5d0b58176c4e19836f28432d43fb9292386c090a65f03458fc6c42b877f0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


