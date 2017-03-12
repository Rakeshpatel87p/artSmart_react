const 
	React = require('react'),
	TestUtils = require('react-addons-test-utils'),
	should = require('chai').should(),
	ArtImage = require('../app/components/ArtImage'),
	ImageDetails = require('../app/components/ImageDetails')

describe('ArtImage component', function() {
	it ('Renders the image', function() {
		var url = "http://www.fridakahlo.it/files_eventi/15/scheda/37_frida_portrait";
		
		var renderer = TestUtils.createRenderer();
		renderer.render(<ArtImage imageUrl ={url} />);
		var result = renderer.getRenderOutput();
		result.type.should.equal('img');
		result.props.src.should.equal(url);
	});
});

describe('ImageDetails component', function(){
	it('Renders PaintingName, ArtistName, and YearPainted', function(){
		var renderer = TestUtils.createRenderer();
		renderer.render(<ImageDetails />);
		var result = renderer.getRenderOutput();
		result.type.should.equal('div');
		result.props.children[0].props.paintingTitle.should.equal('Self-Portrait with Bonito');
		result.props.children[1].props.artistName.should.equal('Frida Kahlo');
		result.props.children[2].props.yearPainted.should.equal('1941');
	})
})