import { withRouter } from 'react-router-dom';
import { $CombinedState } from 'redux';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Map = ({restaurant}) => {
	console.log(restaurant.address)
	const mapRef = useRef();
	let map;

	useEffect(() => {
		if (restaurant.id) {
			let lng;
			let lat;
			let src;

			$.ajax({
				// url: `https://maps.googleapis.com/maps/api/geocode/json?address=${rest.address}&key=`,
				dataType: 'json',
			}

			).done( function(json) {
				console.log(json.results[0])
				lat = parseFloat(json.results[0].geometry.location.lat);
				lng = parseFloat(json.results[0].geometry.location.lng);
				// src = `https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=310x155&maptype=roadmap&markers=color:blue%7C${lat},${lng}&key=` // maps api key
				// // src = `https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=310x155&maptype=roadmap&markers=color:blue%7C${lat},${lng}&key=` // geocode api key
				console.log(src);
			});

			const mapOptions = {
					center: { lat: lat, lng: lng },
					zoom: 10
			};

			map = new google.maps.Map(document.getElementById('map'), mapOptions);

			// const restPos = { lat: lat, lng: lng };
			const marker = new google.maps.Marker({
					position: restPos,
					map: map,
			});
		}
	}, [gamePlace.id])

	const openMap = e => {
		window.open(`https://maps.google.com?q=${lat},${lng}`)
	}

	return (
		<div ref={mapRef} className='map' id='map' onClick={openMap}>
				Map
		</div>
	);

	// const results = () => {
	// 		let address = `https://maps.googleapis.com/maps/api/geocode/json?address=${restaurant.address}&key=AIzaSyCC7vGu0XHZ_nflfdNpCak4nw6FbaNJf-Q`;
	// }

	return (
		<div>
			Hello
			{geocode(restaurant)}
		</div>
	);


};



{/* 
const Map = ({restaurant}) => {

	
	}



	return (
		<div className='map-container'>
			<a href={`https://maps.google.com/?q=${restaurant.address}`} target="_blank">
				{geocode(restaurant)}
				{results()}
				</a>
		</div>
	)
} */}

export default Map;