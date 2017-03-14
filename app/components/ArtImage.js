const React = require('react');
// const backgroundImage = require('../utils/getBackgroundImage');
const axios = require('axios')

const ArtImage = React.createClass({
	render(){
		axios.get('/artworks')
			.then(function(info){
				console.log(info)
			})
			.catch(function(err){
				console.log(err)
			});
		return (
			<img src={this.props.imageUrl} />
		);
	}
});

module.exports = ArtImage;