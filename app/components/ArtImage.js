const React = require('react');

const ArtImage = React.createClass({
	render(){
		return (
			<img src={this.props.imageUrl} />
			);
	}
});

module.exports = ArtImage;