'use strict'
const sodium = require('libsodium-wrappers')
const encryptor = require("./Encryptor")
const decryptor = require("./Decryptor")


module.exports = async(session = undefined) =>
{
    await sodium.ready;
    let keypair = sodium.crypto_box_keypair();
    let [ObjectpublicKey, ObjectprivateKey] = [keypair.publicKey, keypair.privateKey];

    return Object.freeze(
        {
            publicKey: ObjectpublicKey,
            sendMessage: 'test',
            connection: session,
            encrypt: (msg) => {
                const nonce = sodium.randombytes_buf(sodium.crypto_secretbox_NONCEBYTES);
                const ciphertext = encryptor(msg, nonce);
                return { ciphertext, nonce };
            },
            decrypt: (ciphertext, nonce) => {
                decrypter = decryptor();
                return decrypter.decrypt(ciphertext, nonce)
            },
            send: (peerMsg) => {
                this.sendMessage = peerMsg;
            },
            receive: () => {
                let message;
                try {
                    message = this.sendMessage;
                    this.connection.connection = this;
                }
                catch (e) {
                    console.log(e);
                }
                return message;
            }
        });
}