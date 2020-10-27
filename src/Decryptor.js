'use strict'
const sodium = require('libsodium-wrappers')



module.exports = (key = '') =>
    {
        if (key === "") {
            throw 'no key';
        } else {
            return Object.freeze({
                decrypt: (ciphertext, nonce) => {
                    return sodium.crypto_secretbox_open_easy(ciphertext, nonce, key);
                }
            });
        }
}
