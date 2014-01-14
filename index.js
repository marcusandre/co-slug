
/**
 * Module dependencies.
 */

var slugg = require('slugg');

module.exports = slug;

function slug(text) {
  return function(done) {
    var res = slugg(text);
    done(null, res);
  }
}
