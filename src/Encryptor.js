'use strict'
const sodium = require('libsodium-wrappers')


module.exports = (msg, nonce) => {
    let key = sodium.crypto_secretbox_keygen();
    return sodium.crypto_secretbox_easy(msg, nonce, key);
}