import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { deleteBooking } from "../../actions/booking_actions";
import { icCalendar, icPerson, icClose } from 'otkit-icons/token.theme.common';
import { withRouter, useHistory, Link } from "react-router-dom";
import { updateBooking } from '../../actions/booking_actions';

const CancelBookingModal = (props) => {
	const dispatch = useDispatch()
	const history = useHistory();
	const booking = useSelector(state => state.entities.bookings);
	const rests = Object.values(useSelector(state => state.entities.rests));
	const rest = rests[booking.rest_id - 1];
	const [updated, setUpdated] = useState({
		id: booking.id,
		date: booking.date,
		time: booking.time,
		rest_id: booking.rest_id,
		user_id: booking.user_id,
		party_size: booking.party_size,
		special_request: booking.special_request,
		occasion: booking.occasion,
		cancelled: true
	});

	const handleClick = () => {
		dispatch(updateBooking(updated));
		dispatch(closeModal())
	}

	const parseTime = (time) => {
		time = time.split('T');
		time = time[1].split('.');
		time = time[0];
		time = time.split(":")
		let hrs = parseInt(time[0])
		if (hrs < 12) return hrs + ':' + time[1] + ' AM'
		if (hrs == 12) return hrs + ':' + time[1] + ' PM'
		hrs = hrs % 12;
		let newTime = hrs + ':' + time[1] + ' PM'
		return newTime
	}

	useEffect(() => {
		rest
	}, [rest])

	const parseDate = (date) => {
		date = date.split('-');
		date = `${date[1]}-${date[2]}-${date[0]}`
		date = new Date(date)
		date = date.toDateString();
		let split = date.split(' ');
		return `${split[0]}, ${split[1]} ${split[2]}`
	}

	return (
		<div className='cancel-booking-container'>
			<div onClick={() => dispatch(closeModal())} className="auth-form-x-btn-container">
				<img className="auth-form-x-button-image" src={`data:image/svg+xml;utf8,${icClose}`}/>
			</div>
			<div className='cancel-info'>
				<p>
					Are you sure you want to cancel this reservation?
				</p>
				<div>
					<h2>
						{rest.name}
					</h2>
					<div id='res-cancel-info'>
						<span>
							<img id="res-info-img" src={`data:image/svg+xml;utf8,${icPerson}`}/>
						 	{booking.party_size} People
						</span>
						<span id='res-info-date'>
							<img id="res-info-img" src={`data:image/svg+xml;utf8,${icCalendar}`}/>
							{parseDate(booking.date)} at {parseTime(booking.time)}
						</span>
					</div>
				</div>
			</div>
			<div id='cancel-bar'>
				<a onClick={() => dispatch(closeModal())}>
					Nevermind
				</a>
				<button onClick={handleClick}>
					Cancel
				</button>
			</div>
		</div>
	)
}

export default withRouter(CancelBookingModal);