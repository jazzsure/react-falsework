
module.exports = {
  path: 'home',
  getComponent(location, cb) {
    require.ensure([], function (require) {
        cb(null, require('./index'));
    })
  }
}
