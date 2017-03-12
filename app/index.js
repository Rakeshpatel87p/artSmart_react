const 
	React = require('react'),
	ReactDOM = require('react-dom'),
	ArtImage = require('./components/ArtImage'),
	ImageDetails = require('./components/ImageDetails')

ReactDOM.render(<ArtImage imageUrl = "http://www.fridakahlo.it/files_eventi/15/scheda/37_frida_portrait"/>, document.getElementById('app'))
ReactDOM.render(<ImageDetails />, document.getElementById('paintingDetails'))