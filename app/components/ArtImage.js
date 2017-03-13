const React = require('react');
const backgroundImage = require('../utils/getBackgroundImage')

const ArtImage = React.createClass({
	render(){
		console.log(backgroundImage.getBackgroundImage());
		return (
			<img src={this.props.imageUrl} />
		);
	}
});

module.exports = ArtImage;