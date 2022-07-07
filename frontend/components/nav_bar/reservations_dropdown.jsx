import React, {useState} from "react";
import {Link, useHistory, withRouter} from 'react-router-dom';
import { icAmenities, icCalendar, icClock, icPerson } from 'otkit-icons/token.theme.common';
import { useDispatch, useSelector } from "react-redux";
import { fetchRests } from "../../actions/rest_actions";
import { useEffect } from "react";

const ResDropdown = ({resDropdown}) => {

	const dispatch = useDispatch()
	const history = useHistory()

	useEffect(() => {
		dispatch(fetchRests())
	}, [])
	
	const [visible, setVisible] = useState(false);
	
	const user = Object.values(useSelector(state => state.entities.users))
	const bookings = user[0].bookings
	let today = new Date();
	today.setDate(today.getD)
	today.setHours(23, 59, 59, 998);

	const timeDistinction = (date) => {

		// set booking date to end of today
		// filter if booking date > current date and time
		let parts = date.split('-');
		parts = `${parts[1]}-${parts[2]}-${parts[0]}`
		let bookingDate = new Date(parts);
		bookingDate.setHours(23, 59, 59, 998);

		let today = new Date();
		return (bookingDate > today)
	}

	const futureBookings = bookings.filter((booking) => (
		timeDistinction(booking.date) && !booking.cancelled)
	)
	
	let rests = Object.values(useSelector(state => state.entities.rests))
	rests = rests.map(rest => rest.name)

	useEffect(() => {

	}, [useSelector(state => state.entities.rests)])
	
	const hideMenu = e => {
		if (e.target.contains(e.relatedTarget)) {
				return null
		}

		setVisible(false)
	}

	const resDropdownClick = (e) => {
		setVisible(true)
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

	const parseDate = (date) => {
		date = date.split('-');
		date = `${date[1]}-${date[2]}-${date[0]}`
		date = new Date(date)
		return date.toDateString()
	}

	const handleClick = (e) => {
		e.preventDefault()
		history.push(`my/profile/${user[0].id}/dining-dashboard`)
		window.location.reload()
	}

	let component;

	futureBookings.length ? (
		component = [
			<div>
				<div id='upcoming-dropdown'>
					{futureBookings.map((booking, idx) => 
					<Link onClick={handleClick} id='res-drop-link'>
						<li key={idx} id='res-drop-li'>
							<span>
								<img id='amenities' src={`data:image/svg+xml;utf8,${icAmenities}`}/>
							</span>
							<div>
								<h6>
									{rests[booking.rest_id - 1]}
								</h6>
								<div>
									<img src={`data:image/svg+xml;utf8,${icPerson}`}/>
									Table for {booking.party_size} people
								</div>
								<div>
									<img src={`data:image/svg+xml;utf8,${icClock}`}/>
									{parseTime(booking.time)}
								</div>
								<div>
									<img src={`data:image/svg+xml;utf8,${icCalendar}`}/>
									{parseDate(booking.date)}
								</div>
							</div>
						</li>
					</Link>
					)}
				</div>
			</div>
		]) : (
		component = [
			<div>
				You have no upcoming reservations
			</div>
		])

	return (
		<div id="nav-btn" className="user-nav-right-button-container">
			<button className="user-calendar-dropdown-button" onClick={resDropdownClick} id="userDropdown" data-toggle="dropdown">
				<img src={`data:image/svg+xml;utf8,${icCalendar}`} href="#" id="resDropdown" data-toggle="dropdown" className="user-info-img-dropdown-button"/>
				{!!futureBookings.length && <div></div>}
			</button>
			{visible &&
				<div id="res-drop" className='user-dropdown-ul' 
				onMouseLeave={hideMenu}
				>
					<h3 id="res-drop-title" className="dropdown-title">Upcoming reservations</h3>
						{component}
				</div>
			}
		</div>
	)
}

export default withRouter(ResDropdown);

