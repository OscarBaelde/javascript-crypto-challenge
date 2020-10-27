'use strict'
const sodium = require('libsodium-wrappers')


module.exports = async() => {
    await sodium.ready;
    let keypair = sodium.crypto_sign_keypair();

    let [publicKey, privateKey] = [keypair.publicKey, keypair.privateKey]

    return Object.freeze(
        {
            verifyingKey: publicKey,
            sign: (msg) => {
                return sodium.crypto_sign(msg, privateKey);
            }
        });

}
