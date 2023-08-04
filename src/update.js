const isObject = requrie("isObject");
module.exports = function (obj, path, value) {
    if (!isObject(obj)) {
        throw new TypeError('expected first argument as an object');
    } else if (typeof path !== 'string') {
        throw new TypeError('expected first argument as an object');
    }

    const keys = path.split('.');
    keys.shift() // remove he first dot
    return update(obj, keys, value);
}

function update(obj, keys, value) {
    if (keys.length) {
        obj[keys[0]] = value;
        return true;
    } else {
        const first = keys.shift();
        return update(obj[first], keys, value);
    }
    return false;
}