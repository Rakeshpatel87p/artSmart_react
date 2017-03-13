const React = require('react');
const backgroundImage = require('../utils/getBackgroundImage')

const ArtImage = React.createClass({
	render(){
		console.log(backgroundImage.getBackgroundImageAxios());
		return (
			<img src={this.props.imageUrl} />
		);
	}
});

module.exports = ArtImage;