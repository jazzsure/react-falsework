/**
 * @author fanxiaopeng
 * @description search index router
 */
module.exports = {
  path: 'search',
  getComponent(location, cb) {
    require.ensure([], function (require) {
        cb(null, require('./index'));
    })
  }
}
