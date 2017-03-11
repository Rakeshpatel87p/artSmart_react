const 
	React = require('react'),
	ReactDOM = require('react-dom');

const ArtImage = React.createClass({
	render(){
		return (
			<img src={this.props.imageUrl} />
			);
	}
});

ReactDOM.render(<ArtImage imageUrl = "http://www.fridakahlo.it/files_eventi/15/scheda/37_frida_portrait"/>, document.getElementById('app'))