const 
	React = require('react'),
	ReactDOM = require('react-dom');

const ArtImage = React.createClass({
	render(){
		return (
			<img src="http://www.fridakahlo.it/files_eventi/15/scheda/37_frida_portrait" />
			);
	}
});

ReactDOM.render(<ArtImage />, document.getElementById('app'))