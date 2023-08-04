const t = require('tap');
const dots = require('..');

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
    baz: 'baz'
}

t.test('test path', t => {
    t.test('should return `thud` path', t => {
        const path = dots.path(prototype, 'thud');
        t.equal(path, '.foo.qux.corge.thud');
        t.end();
    })

    t.test('should return `corge` path', t => {
        const path = dots.path(prototype, 'corge');
        t.equal(path, '.foo.qux.corge');
        t.end();
    })

    t.test('should return `bar` path', t => {
        const path = dots.path(prototype, 'bar');
        t.equal(path, '.foo.bar');
        t.end();
    })

    t.test('should return an empty path', t => {
        const path = dots.path(prototype, 'cool');
        t.equal(path, '');
        t.end();
    });

    t.end();
});

t.test('test update', t => {
    t.test('shoud update `bar`', t => {
        t.ok(dots.update(prototype, '.foo.bar', 'new bar'));
        t.equal(prototype.foo.bar, 'new bar');
        t.end();
    })

    t.test('should update `xyzzy`', t => {
        t.ok(dots.update(prototype, '.foo.qux.corge.xyzzy', 'new xyzzy'));
        t.equal(prototype.foo.qux.corge.xyzzy, 'new xyzzy');
        t.end();
    })

    t.test('should update `baz`', t => {
        t.ok(dots.update(prototype, '.baz', 'new baz'));
        t.equal(prototype.baz, 'new baz');
        t.end();
    })

    t.end();
})  