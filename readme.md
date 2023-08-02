# object-dots

Find and manipulate deeply nested object

## Install
```
$ npm install object-dots
```

## Usage
```js
const prototype = {
  foo: {
    bar: 'bar',
    qux: {
      quux: 'quux',
      corge: {
        xyzzy: 'xyzzy',
        thud: 'thud'
      }
    }
  },
  baz : 'baz'
}

const dots = require('object-dots')
dots.path(prototype, 'thud') // -> foo.qux.corge.thud
dots.update(prototype, '.foo.qux.corge.thud', 'new thud')
```