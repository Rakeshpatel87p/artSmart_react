const React = require('react');
const backgroundImage = require('../utils/getBackgroundImage')

const ArtImage = React.createClass({
	render(){
		backgroundImage.getBackgroundImageAxios()
			.then(function(info){
				console.log(info)
			});
		return (
			<img src={this.props.imageUrl} />
		);
	}
});

module.exports = ArtImage;