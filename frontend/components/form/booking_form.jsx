import React, { useEffect, useState } from 'react'
import { withRouter, useLocation, useHistory, useParams } from 'react-router-dom';
import { icCalendar, icClock, icPerson } from 'otkit-icons/token.theme.common';
import { createBooking } from '../../actions/booking_actions'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRests } from '../../actions/rest_actions';

const BookingForm = (props) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const location = useLocation();
	const {restId, date, resTime, party} = useParams()

	useEffect(() => {
		dispatch(fetchRests())
	}, [])

	const restaurant = useSelector(state => state.entities.rests[restId])
	const user = Object.values(useSelector(state => state.entities.users))
	const userId = user[0].id
	const userEmail = user[0].email
	const userPhone = user[0].phone
	const [booking, setBooking] = useState({
		date: new Date(date).toDateString(),
		time: resTime,
		rest_id: restId,
		user_id: userId,
		party_size: party,
		special_request: '',
		occasion: '',
		cancelled: false
	});
	
	const [time, setTimer] = useState(300);
	const [mins, setMins] = useState('');
	const [secs, setSecs] = useState('');
	const [formatted, setFormatted] = useState('5:00');

		useEffect(() => {
		window.scrollTo(0, 0)
		}, [])

	useEffect(() => {
        
		setMins(Math.floor(time / 60) % 60)
		setSecs(Math.floor(time % 60));

	}, [time])

	useEffect(() => {
		if (!time) return;

		const countdown = setInterval(() => {
				setTimer(time - 1)
		}, 1000)

		return () => clearInterval(countdown)
	}, [time])

	useEffect(() => {
			if (secs < 10) {
					setFormatted(`${mins}:0${secs}`)
			} else {
					setFormatted(`${mins}:${secs}`)
			}
	}, [mins, secs])

	useEffect(() => {
		// if (location.state.booking) {
		// 	const {date, party_size} = location.state.booking;
		setBooking({...booking, date: date, time: resTime, party_size: party})
		// }
	}, []);

	const updateInfo = (e) => {
		setBooking({ ...booking, [e.target.id]: e.target.value })
	};

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
		date = new Date(date).toDateString();
		let split = date.split(' ');
		return `${split[0]}, ${split[1]} ${split[2]}`
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createBooking(booking)).then(res =>
				history.push({
					pathname: `/booking/show/${res.booking.id}/${parseTime(resTime)}/${parseDate(new Date(date))}`,
					state: {
						time: parseTime(resTime),
						date: parseDate(new Date(date)),
						restaurant: restaurant,
						user: user[0],
						booking: res.booking
					}
				})
			)
		}

	return restaurant ? (
		<div className='booking-form-container'>
			<section className='booking-form-left'>
				<h2>
					You're almost done!
				</h2>
				<div className='booking-info-bar'>
					<img src={restaurant.iconUrl}/>
					<div id='info-bar-right'>
						<h2>
							{restaurant.name}
						</h2>
						<div>
							<div>
								<img id="res-info-img" src={`data:image/svg+xml;utf8,${icCalendar}`}/>
								<p id='res-info'>
									{parseDate(date)}
								</p>
							</div>
							<div>
								<img id="res-info-img" src={`data:image/svg+xml;utf8,${icClock}`}/>
								<p id='res-info'>
									{parseTime(resTime)}
								</p>
							</div>
							<div>
								<img id="res-info-img" src={`data:image/svg+xml;utf8,${icPerson}`}/>
								<p id='res-info'>
									{party} people
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="countdown" id="countdown">
					{time ?  (
							<div className="countdown-message">
									<span>We're holding this table for you for </span>
									<span id='time-span'> {formatted} minutes</span>
							</div>
					) : (
							<div className="countdown-over-mess">
									You can still try to complete your reservation, but this table may no longer be available.
							</div>
					)}
				</div>
				<h2 id='diner-details'>
					Diner Details
				</h2>
				<form className='booking-info-form'>
					<div className='booking-input-row'>
						<div>
							<input defaultValue={userPhone} type='text' id='phone' placeholder="Phone Number" onChange={updateInfo}/>
							<span aria-live='assertive' id='phone-error'>
								Phone number is required.
							</span>
						</div>
						<div>
							<input defaultValue={userEmail} type='text' id='email' readOnly/>
						</div>
					</div>
					<div className='booking-input-row'>
						<div>
							<select type='text' id='occasion' onChange={updateInfo}>
								<option id='default' selected defaultValue disabled>Select an occasion (optional)</option>
								<option value='Birthday'>Birthday</option>
								<option value='Anniversary'>Anniversary</option>
								<option value='Date Night'>Date Night</option>
								<option value='Business Meal'>Business Meal</option>
								<option value='Celebration'>Celebration</option>
							</select>
						</div>
						<div>
							<textarea id='special_request' type='text' placeholder="Add a special request (optional)" onChange={updateInfo}/>
						</div>
					</div>
					<button id='auth-button' type="submit" onClick={handleSubmit}>
						Complete Reservation
					</button>
				</form>
			</section>
			<div className='booking-form-right'>
				<aside>
					<h1>
						What to know before you go
					</h1>
					<section>
						<h1 id='dining-info'>
							Important Dining Information
						</h1>
						<p>
							We have a 15 minute grace period. Please call us if you are running later than 15 minutes after your reservation time.
						</p>
					</section>
				</aside>
			</div>
		</div>
	) : (null)
}

export default withRouter(BookingForm);