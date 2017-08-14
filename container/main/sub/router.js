
module.exports = {
  path: 'sub',
  getComponent(location, cb) {
    require.ensure([], function (require) {
        cb(null, require('./index').default);
    })
  }
}
