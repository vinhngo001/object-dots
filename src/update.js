const isObject = require('isObject');

module.exports = function (obj, path, value) {
    if (!isObject(obj)) {
        throw new TypeError('expected first argument as an object');
    } else if (typeof path !== 'string') {
        throw new TypeError('expected second argument as a string');
    }

    const keys = path.split('.');
    keys.shift() // remove he first dot
    return update(obj, keys, value);
}

function update(obj, keys, value) {
    if (keys.length == 1) {
        obj[keys[0]] = value;
        return true;
    } else {
        const first = keys.shift();
        return update(obj[first], keys, value);
    }
    return false;
}