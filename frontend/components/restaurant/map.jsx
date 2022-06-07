import React, { useState } from 'react';
import { icLocation } from 'otkit-icons/token.theme.common';

const Map = ({restaurant}) => {
	var [lat, setLat] = useState()
	var [lng, setLng] = useState()

	var src=`https://maps.googleapis.com/maps/api/staticmap?zoom=15&size=310x155&maptype=roadmap&markers=color:red%7C${lat},${lng}&key=AIzaSyBfvAZNhS5qgDPMbmRphkPOPnxI-HtNsOE` // maps api key

	const geocode = (rest) => {
		$.ajax({
			url: `https://maps.googleapis.com/maps/api/geocode/json?address=${rest.address}&key=AIzaSyCC7vGu0XHZ_nflfdNpCak4nw6FbaNJf-Q`,
			dataType: 'json',
		}
		).done(json => getData(json))
	}

	const getData = (data) => {
		setLat(data.results[0].geometry.location.lat)
		setLng(data.results[0].geometry.location.lng)
	}

	return (
		<div className='map-container'>
			{geocode(restaurant)}
			<a href={`https://maps.google.com/?q= ${restaurant.address}`} target="_blank">
				<img src={src} alt="map"/>
				<span>
					<img id='location' src={`data:image/svg+xml;utf8,${icLocation}`}/>
					<p>{restaurant.address}</p>
				</span>
			</a>
		</div>
	)
};

export default Map;