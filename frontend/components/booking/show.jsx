
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  { withRouter, useLocation, useHistory, Link } from 'react-router-dom';
import { icCalendar, icPerson, icLocation, icReview } from 'otkit-icons/token.theme.common';
import { showModal } from '../../actions/modal_actions';
import user_dropdown from '../nav_bar/user_dropdown';

const BookingShow = (props) => {

	const location = useLocation();
	const dispatch = useDispatch();
	const history = useHistory();
	const booking = useSelector(state => state.entities.bookings)
	const currentUser = useSelector(state => state.entities.users)
	const time = props.location.state.time;
	const date = props.location.state.date;
	const restaurant = props.location.state.restaurant;
	const user = props.location.state.user;

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const cancelModal = () => {
		dispatch(showModal("cancel"));
	}

	let isCancelled = useSelector(state => state.entities.bookings.cancelled);

	useEffect(() => {
		isCancelled = !isCancelled
	}, [useSelector(state => state.entities.bookings.cancelled)])

	let statusBar;
	let cancelBar;

	if (isCancelled) {
		statusBar = [
			<div>
				<i class="fa-solid fa-circle-xmark"></i>
				Reservation Cancelled
			</div>
		]
		cancelBar = [
			<div>
				<Link id='page-cancel-bar' to={`/restaurants/${restaurant.id}`}>
					Book Again
				</Link>
			</div>
		]
	} else {
		statusBar = [
			<div>
				<i className="fa-solid fa-circle-check"></i>
				Reservation Confirmed
			</div>
		]
		cancelBar = [
			<div id='page-cancel-bar'>
				<Link
					to={{
						pathname:`/booking/${booking.id}/modify`,
						state: {
							date: date,
							time: time,
							restaurant: restaurant,
							booking: booking
						}
					}}
					>Modify
				</Link>
				<button onClick={cancelModal}>Cancel</button>
			</div>
		]
	}

	return (
		<div className='res-confirmation-container'>
			<section className='res-confirm-left'>
				<div>
					<div>
						<img id='rest-icon'>
						</img>
					</div>
					<div id='rest-info'>
						<h2>
							{restaurant.name}
						</h2>
							{statusBar}
						<div>
							<span>
								<img className='res-confirm-icon' src={`data:image/svg+xml;utf8,${icPerson}`}/>
								{booking.party_size} people
							</span>
							<span>
								<img className='res-confirm-icon' src={`data:image/svg+xml;utf8,${icCalendar}`}/>
								{date} at {time}
							</span>
						</div>
						{cancelBar}
					</div>
				</div>
			</section>
			<aside className='res-confirm-right'>
				<div className='res-confirm-user-info'>
					<div>
						<img className='res-confirm-icon' src={`data:image/svg+xml;utf8,${icPerson}`}/>
						<h2>{user.fname} {user.lname}</h2>
					</div>
					<div id='joined-div'>
						Joined in June of 2022
					</div>
					<div>
						<img className='res-confirm-icon' src={`data:image/svg+xml;utf8,${icLocation}`}/>
						New York Area
					</div>
					<div>
						<img className='res-confirm-icon' src={`data:image/svg+xml;utf8,${icReview}`}/>
						{Math.floor(Math.random() * 50)} reviews
					</div>
				</div>
			</aside>
		</div>
	)
}

export default withRouter(BookingShow);