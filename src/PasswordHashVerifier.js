'use strict'
const sodium = require('libsodium-wrappers')

module.exports = () =>
    {
        return Object.freeze({
            verify: (hashedPw, pw) => {
                return sodium.crypto_pwhash_str_verify(hashedPw, pw);
            }
        });
}
