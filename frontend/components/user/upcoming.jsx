import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import BookingListItem from './booking_list_item';

const UpcomingReservations = ({upcoming}) => {

	const UpcomingList = (bookings) => {
		return bookings.map((booking, idx) => 
			<BookingListItem key={idx} booking={booking} completed={false}/>
		)
	}

	return upcoming.length ? (
		<div className='reservations-list'>
			<h2>
				Upcoming Reservations
			</h2>
				{UpcomingList(upcoming)}
		</div>
	) : (
		<div className='reservations-list'>
			<h2>
				You have no upcoming reservations
			</h2>
		</div>
	)
}

export default withRouter(UpcomingReservations);