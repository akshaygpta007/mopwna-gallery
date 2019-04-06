import React, { Component } from 'react';
import ReactBnbGallery from 'react-bnb-gallery'
import './App.css';

const mainUrl = "http://www.clingmultisolutions.com/mopwna/images/";
const mainIMageUrl = mainUrl+"fulls/";
const thumbImageUrl = mainUrl+"thumbs/";
const photos = [];
for(let i = 1; i <= 44; i++) {
	const image = {
		photo: mainIMageUrl+i+".jpg",
		// caption: "Viñales, Pinar del Río, Cuba",
		// subcaption: "Photo by Simon Matzinger on Unsplash",
		thumbnail: thumbImageUrl+i+".jpg",
	  }
	  photos.push(image);
}

class App extends Component {
	render () {
	  return (
		<ReactBnbGallery
			show
			photos={photos}
		/>
	  )
	}
  }

export default App;
