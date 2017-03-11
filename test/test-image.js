const 
	React = require('react'),
	TestUtils = require('react-addons-test-utils'),
	should = require('chai').should(),
	ArtImage = require('../app/components/ArtImage');

describe('ArtImage component', function() {
	it ('Renders the image', function() {
		var url = "http://www.fridakahlo.it/files_eventi/15/scheda/37_frida_portrait";
		
		var renderer = TestUtils.createRenderer();
		renderer.render(<ArtImage imageUrl ={url} />);
		var result = renderer.getRenderOutput();
		console.log(result.type);
		result.type.should.equal('img');
		result.props.src.should.equal(url);
	});
});