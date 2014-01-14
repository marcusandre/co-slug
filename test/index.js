
/**
 * Module dependencies.
 */

var slug = require('..');
var co = require('co');

describe('co-slug', function(){
  it('should work', function(done){
    co(function *() {
      var res = yield slug('make me a slug');
      res.should.eql('make-me-a-slug');
    })(done);
  });
});
