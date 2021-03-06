var Browser = require('browser');

module.exports.get = function (assert) {
    var browser = new Browser;
    var executed = 0;
    browser
        .get('http://www.reddit.com')
        .tap(function (storage, response, data) {
            executed++;
            assert.deepEqual(storage, {});
            assert.ok(/reddit/.test(response.headers['set-cookie']));
        })
        .end();

    setTimeout(function () {
        assert.equal(executed, 1)
    }, 2000);
}

module.exports['get with opts'] = function (assert) {
    var browser = new Browser;
    var executed = 0;
    browser
        .get({ url : 'http://www.reddit.com' })
        .tap(function (storage, response, data) {
            executed++;
            assert.deepEqual(storage, {});
            assert.ok(/reddit/.test(response.headers['set-cookie']));
        })
        .end();

    setTimeout(function () {
        assert.equal(executed, 1)
    }, 2000);
}

