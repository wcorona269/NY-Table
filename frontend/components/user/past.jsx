import React from 'react';
import { withRouter } from 'react-router-dom';
import BookingListItem from './booking_list_item';

const PastReservations = ({past}) => {

	const PastList = (bookings) => {
		return bookings.map((booking, idx) => 
			<BookingListItem key={idx} booking={booking} completed={true}/>
		)
	}

	return past.length ? (
		<div className='reservations-list'>
			<h2>
				Past Reservations
			</h2>
				{PastList(past)}
		</div>
	) : (
		<div className='reservations-list'>
			<h2>
				You have no past reservations
			</h2>
		</div>
	)
}

export default withRouter(PastReservations);