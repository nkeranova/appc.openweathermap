var Arrow = require('arrow');

var PreBlock = Arrow.Block.extend({
	name: 'pre_example',
	description: 'will set a header named "Foo"',

	action: function (req, resp, next) {
		// this is a synchronous block since it doesn't have a nex
		resp.set('Foo','Bar');
		req.log.info("Pre Example Block executed");
		next();
	}
});

module.exports = PreBlock;
