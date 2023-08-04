const isObject = require("isObject");

/**
 * 
 * @param {Object} passed object 
 * @param {String} given_key
 */
function path(obj, given_key) {
    if (!isObject(obj)) {
        throw new TypeError('expected first argument as an object');
    } else if (typeof given_key !== "string") {
        throw new TypeError('expected first argument as an object');
    }

    const keys = Object.keys(obj);
    for (let i = 0, length = keys.length; i < length; i++) {
        const key = keys[i];
        if (key === given_key) {
            return '.' + key;
        } else if (isObject(obj[key])) {
            const _path = path(obj[key], given_key);
            if (_path) {
                return '.' + key + _path;
            }
        }
    }
    return '';
}

module.exports = path;