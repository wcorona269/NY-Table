import React, { useState } from 'react'
import { withRouter, useHistory, useLocation, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { icCalendar, icClock, icPerson } from 'otkit-icons/token.theme.common';

const UpdateBooking = (props) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const location = useLocation();
	const {date, time, restaurant, booking} = props.location.state;


	return (
		<div className='booking-edit-container'>
			{console.log(props.location.state)}
			<div className='booking-box'>
				<main>
					<h2 id='current-res'>
						Your Current Reservation 
					</h2>
					<div id='booking-info-bar' className='booking-info-bar'>
					<img></img>
					<div id='info-bar-right'>
						<h2 id='rest-name'>
							{restaurant.name}
						</h2>
						<div>
							<div>
								<img id="res-info-img" src={`data:image/svg+xml;utf8,${icCalendar}`}/>
								<p id='res-info'>
									{date}
								</p>
							</div>
							<div>
								<img id="res-info-img" src={`data:image/svg+xml;utf8,${icClock}`}/>
								<p id='res-info'>
								{time}	
								</p>
							</div>
							<div>
								<img id="res-info-img" src={`data:image/svg+xml;utf8,${icPerson}`}/>
								<p id='res-info'>
									{booking.party_size} People
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='modify-box'>
					<h3>
						Modify your reservation
					</h3>
					<div id='mod-left'>
						<div>
							<div>
								Date
							</div>
							<div>
								Time
							</div>
						</div>
						<div>
							<div>
								<button>
									Find a new table
								</button>
							</div>
						</div>
					</div>
				</div>
				</main>
			</div>
		</div>
	)


}


export default withRouter(UpdateBooking);