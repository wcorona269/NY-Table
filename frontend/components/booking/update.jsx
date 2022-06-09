import React, { useEffect, useState } from 'react'
import { withRouter, useHistory, useLocation, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { icCalendar, icClock, icPerson } from 'otkit-icons/token.theme.common';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { updateBooking } from '../../actions/booking_actions';

const UpdateBooking = (props) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const location = useLocation();

	const {date, time, restaurant, booking, user} = props.location.state;
	const size = booking.party_size;
	const [newDate, setNewDate] = useState(new Date(`${date} 2022`));
	const [newTime, setNewTime] = useState(time);
	const [party, setParty] = useState(size);
	const [newBooking, setNewBooking] = useState({
		id: booking.id,
		rest_id: booking.rest_id,
		user_id: booking.user_id,
		party_size: booking.party_size,
		date: booking.date,
		time: booking.time,
		cancelled: false,
		special_request: booking.special_request,
		occasion: booking.occasion
	})

	useEffect(() => {
		setNewBooking({ ...newBooking, date: newDate })
	}, [newDate]) 

	const updateInfo = (e) => {
		setNewBooking({ ...newBooking, [e.target.id]: e.target.value })
	}

	const parseTime = (time) => {
		let split = time.split(":")
		let hrs = parseInt(split[0])
		if (hrs < 12) return time + ' AM';
		if (hrs == 12) return time + ' PM'
		hrs = hrs % 12;
		let newTime = hrs + ':' + split[1] + ' PM'
		return newTime
	}

	const parseDate = (date) => {
		date = date.toDateString();
		let split = date.split(' ');
		return `${split[0]}, ${split[1]} ${split[2]}`
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(updateBooking(newBooking)).then(res =>
				// {console.log(date)}
				history.push({
					pathname: `/booking/show/${res.booking.id}`,
					state: {
						time: parseTime(newBooking.time),
						date: parseDate(newBooking.date),
						restaurant: restaurant,
						user: user
					}
				})
			)
		}

	return (
		<div className='booking-edit-container'>
			{console.log(date)}
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
							<DatePicker
								id='date'
								className="res-update-select"
								dateFormat="MM-dd-yy"
								minDate={new Date()}
								selected={newDate}
								onChange={setNewDate}
							/>
						</div>
						<div>
							<select id='time' className='res-update-select' onChange={updateInfo}>
								<option selected defaultValue value={time}>{time}</option>
								<option value='11:00'>11:00 AM</option>
								<option value='11:30'>11:30 AM</option>
								<option value='12:30'>12:30 PM</option>
								<option value='13:00'>1:00 PM</option>
								<option value='13:30'>1:30 PM</option>
								<option value='14:00'>2:00 PM</option>
								<option value='14:30'>2:30 PM</option>
								<option value='15:00'>3:00 PM</option>
								<option value='15:30'>3:30 PM</option>
								<option value='16:00'>4:00 PM</option>
								<option value='16:30'>4:30 PM</option>
								<option value='17:00'>5:00 PM</option>
								<option value='17:30'>5:30 PM</option>
								<option value='18:00'>6:00 PM</option>
								<option value='18:30'>6:30 PM</option>
								<option value='19:00'>7:00 PM</option>
								<option value='19:30'>7:30 PM</option>
								<option value='20:00'>8:00 PM</option>
								<option value='20:30'>8:30 PM</option>
								<option value='21:00'>9:00 PM</option>
								<option value='21:30'>9:30 PM</option>
								<option value='22:00'>10:00 PM</option>
								<option value='22:30'>10:30 PM</option>
								<option value='23:00'>11:00 PM</option>
							</select>
						</div>
						<div>
							<select id='party_size' className='res-update-select' onChange={updateInfo}>
								<option selected defaultValue value={party}>{party} people</option>
								<option value='1'>1 person</option>
								<option value='2'>2 people</option>
								<option value='3'>3 people</option>
								<option value='4'>4 people</option>
								<option value='5'>5 people</option>
								<option value='6'>6 people</option>
								<option value='7'>7 people</option>
								<option value='8'>8 people</option>
								<option value='9'>9 people</option>
								<option value='10'>10 people</option>
								<option value='11'>11 people</option>
								<option value='12'>12 people</option>
								<option value='13'>13 people</option>
								<option value='14'>14 people</option>
								<option value='15'>15 people</option>
								<option value='16'>16 people</option>
								<option value='17'>17 people</option>
								<option value='18'>18 people</option>
								<option value='19'>19 people</option>
								<option value='20'>20 people</option>
							</select>
						</div>
					<button onClick={handleSubmit} id='update-button'>
						Find a new table
					</button>
				</div>
			</div>
			</main>
		</div>
	</div>
	)
}


export default withRouter(UpdateBooking);