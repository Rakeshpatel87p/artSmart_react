const React = require('react');

const PaintingTitle = React.createClass({
	render(){
		return (
			<h3>{this.props.paintingTitle}</h3>
			)}
});

const ArtistName = React.createClass({
	render(){
		return (<h3>{this.props.artistName}</h3>
		)}
});

const YearPainted = React.createClass({
	render(){
		return (
			<h3>{this.props.yearPainted}</h3>
		)}
})

const ImageDetails = React.createClass({
	render(){
		return (
			<div>
				<PaintingTitle paintingTitle = "Self-Portrait with Bonito" />
				<ArtistName artistName = "Frida Kahlo" />
				<YearPainted yearPainted= "1941" />
		</div>
		)	

	}
})

module.exports = ImageDetails;