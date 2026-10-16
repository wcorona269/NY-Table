import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import BookingSummary from './booking_summary';
import NotFound from '../not_found';
import { fetchBooking, updateBooking, RECEIVE_BOOKING } from '../../actions/booking_actions';
import { TIME_OPTIONS, PARTY_OPTIONS, formatTime, partyLabel, toISODate, toHHMM } from '../../util/format';

const UpdateBooking = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { bookingId } = useParams();
	const booking = useSelector(state => state.entities.bookings[bookingId]);
	const [form, setForm] = useState(null);
	const [error, setError] = useState(null);
	const [submitting, setSubmitting] = useState(false);
	const [notFound, setNotFound] = useState(false);

	useEffect(() => {
		if (!booking?.restaurant) {
			dispatch(fetchBooking(bookingId)).then(action => setNotFound(action.type !== RECEIVE_BOOKING));
		}
	}, [bookingId]);

	useEffect(() => {
		if (booking && !form) {
			setForm({ date: booking.date, time: toHHMM(booking.time), party_size: booking.party_size });
		}
	}, [booking]);

	if (notFound) return <NotFound title="Reservation not found" message="We couldn't find that reservation on your account." />;

	if (!booking?.restaurant || !form) {
		return <Container maxWidth="sm" sx={{ py: 6 }}><Skeleton variant="rounded" height={360} /></Container>;
	}

	const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitting(true);
		dispatch(updateBooking({ id: booking.id, ...form })).then(action => {
			setSubmitting(false);
			if (action.type === RECEIVE_BOOKING) history.push(`/reservations/${booking.id}`);
			else setError((action.errors || ['Something went wrong.']).join(' '));
		});
	};

	// Keep the current time selectable even if it isn't on a half-hour boundary.
	const timeOptions = TIME_OPTIONS.includes(form.time) ? TIME_OPTIONS : [form.time, ...TIME_OPTIONS].sort();

	return (
		<Container maxWidth="sm" sx={{ py: { xs: 3, md: 6 } }}>
			<Typography variant="h4" component="h1" sx={{ mb: 3 }}>Modify your reservation</Typography>
			<Card>
				<CardContent sx={{ p: { xs: 2.5, sm: 4 } }}>
					<Typography variant="overline" color="text.secondary">Current reservation</Typography>
					<Box sx={{ mt: 1 }}>
						<BookingSummary restaurant={booking.restaurant} image={booking.icon}
							date={booking.date} time={booking.time} party={booking.party_size} />
					</Box>
					<Divider sx={{ my: 3 }} />
					<Box component="form" onSubmit={handleSubmit} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' }, gap: 2 }}>
						<TextField type="date" label="Date" value={form.date} onChange={update('date')}
							inputProps={{ min: toISODate() }} InputLabelProps={{ shrink: true }} />
						<TextField select label="Time" value={form.time} onChange={update('time')}>
							{timeOptions.map(t => <MenuItem key={t} value={t}>{formatTime(t)}</MenuItem>)}
						</TextField>
						<TextField select label="Party size" value={form.party_size} onChange={update('party_size')}>
							{PARTY_OPTIONS.map(n => <MenuItem key={n} value={n}>{partyLabel(n)}</MenuItem>)}
						</TextField>
						{error && <Alert severity="error" sx={{ gridColumn: '1 / -1' }}>{error}</Alert>}
						<Box sx={{ gridColumn: '1 / -1', display: 'flex', gap: 1.5, justifyContent: 'flex-end', mt: 1 }}>
							<Button onClick={() => history.goBack()}>Back</Button>
							<Button type="submit" variant="contained" disabled={submitting}>Update reservation</Button>
						</Box>
					</Box>
				</CardContent>
			</Card>
		</Container>
	);
};

export default UpdateBooking;
