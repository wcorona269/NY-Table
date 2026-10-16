import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Skeleton from '@mui/material/Skeleton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import BookingSummary from './booking_summary';
import NotFound from '../not_found';
import { showModal } from '../../actions/modal_actions';
import { fetchBooking, RECEIVE_BOOKING } from '../../actions/booking_actions';
import { selectCurrentUser } from '../../util/selectors';
import { isUpcoming } from '../../util/format';

export const bookingStatus = (booking) => {
	if (booking.cancelled) return { key: 'cancelled', label: 'Reservation cancelled', color: 'error', icon: <CancelIcon /> };
	if (isUpcoming(booking.date)) return { key: 'upcoming', label: 'Reservation confirmed', color: 'success', icon: <CheckCircleIcon /> };
	return { key: 'completed', label: 'Completed', color: 'default', icon: <EventAvailableIcon /> };
};

const BookingShow = () => {
	const { bookingId } = useParams();
	const dispatch = useDispatch();
	const booking = useSelector(state => state.entities.bookings[bookingId]);
	const user = useSelector(selectCurrentUser);
	const [notFound, setNotFound] = useState(false);

	useEffect(() => {
		dispatch(fetchBooking(bookingId)).then(action => setNotFound(action.type !== RECEIVE_BOOKING));
	}, [bookingId]);

	if (notFound) return <NotFound title="Reservation not found" message="We couldn't find that reservation on your account." />;

	if (!booking?.restaurant) {
		return <Container maxWidth="md" sx={{ py: 6 }}><Skeleton variant="rounded" height={260} /></Container>;
	}

	const status = bookingStatus(booking);
	const restaurant = booking.restaurant;

	return (
		<Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
			<Grid container spacing={4}>
				<Grid item xs={12} md={8}>
					<Card>
						<CardContent sx={{ p: { xs: 2.5, sm: 4 } }}>
							<Chip icon={status.icon} label={status.label} color={status.color} sx={{ mb: 3 }} />
							<BookingSummary restaurant={restaurant} image={booking.icon} date={booking.date} time={booking.time} party={booking.party_size} />
							{(booking.occasion || booking.special_request) && (
								<>
									<Divider sx={{ my: 3 }} />
									<Stack spacing={1}>
										{booking.occasion && <Typography><strong>Occasion:</strong> {booking.occasion}</Typography>}
										{booking.special_request && <Typography><strong>Special request:</strong> {booking.special_request}</Typography>}
									</Stack>
								</>
							)}
							<Divider sx={{ my: 3 }} />
							<Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
								{status.key === 'upcoming' ? (
									<>
										<Button variant="contained" component={Link} to={`/reservations/${booking.id}/modify`}>Modify</Button>
										<Button variant="outlined" color="error" onClick={() => dispatch(showModal('cancel', { bookingId: booking.id }))}>
											Cancel reservation
										</Button>
									</>
								) : (
									<Button variant="contained" component={Link} to={`/restaurants/${restaurant.id}`}>Book again</Button>
								)}
								{status.key === 'completed' && (
									<Button variant="outlined" component={Link} to={`/review/${restaurant.id}`}>Leave a review</Button>
								)}
							</Stack>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} md={4}>
					<Card>
						<CardContent sx={{ p: 3 }}>
							<Stack direction="row" spacing={2} alignItems="center">
								<Avatar sx={{ bgcolor: 'secondary.main', color: 'primary.main', fontWeight: 700 }}>{user.fname[0]}</Avatar>
								<Typography variant="h6">{user.fname} {user.lname}</Typography>
							</Stack>
							<Stack spacing={0.5} sx={{ mt: 2 }}>
								<Typography variant="body2" color="text.secondary">{user.email}</Typography>
								<Typography variant="body2" color="text.secondary">New York Area</Typography>
							</Stack>
							<Button component={Link} to="/profile/reservations" sx={{ mt: 2, ml: -1.5 }}>View all reservations</Button>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default BookingShow;
