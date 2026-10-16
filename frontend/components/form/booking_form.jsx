import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import BookingSummary from '../booking/booking_summary';
import { createBooking, RECEIVE_BOOKING } from '../../actions/booking_actions';
import { fetchRest } from '../../actions/rest_actions';
import { selectCurrentUser } from '../../util/selectors';
import { defaultSearch, formatPhone } from '../../util/format';

const OCCASIONS = ['Birthday', 'Anniversary', 'Date Night', 'Business Meal', 'Celebration'];
const HOLD_SECONDS = 300;

const useCountdown = (seconds) => {
	const [left, setLeft] = useState(seconds);
	useEffect(() => {
		if (left <= 0) return;
		const t = setTimeout(() => setLeft(left - 1), 1000);
		return () => clearTimeout(t);
	}, [left]);
	return left;
};

const BookingForm = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { restId } = useParams();
	const { search } = useLocation();
	const params = useMemo(() => {
		const p = new URLSearchParams(search);
		const d = defaultSearch();
		return { date: p.get('date') || d.date, time: p.get('time') || d.time, party: Number(p.get('party')) || d.party };
	}, [search]);

	const restaurant = useSelector(state => state.entities.rests[restId]);
	const user = useSelector(selectCurrentUser);
	const [details, setDetails] = useState({ occasion: '', special_request: '' });
	const [error, setError] = useState(null);
	const [submitting, setSubmitting] = useState(false);
	const left = useCountdown(HOLD_SECONDS);

	useEffect(() => {
		if (!restaurant?.icon && !restaurant?.iconUrl) dispatch(fetchRest(restId));
	}, [restId]);

	const update = (field) => (e) => setDetails({ ...details, [field]: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitting(true);
		setError(null);
		const booking = {
			rest_id: restId,
			date: params.date,
			time: params.time,
			party_size: params.party,
			...details,
		};
		dispatch(createBooking(booking)).then(action => {
			setSubmitting(false);
			if (action.type === RECEIVE_BOOKING) {
				history.push(`/reservations/${action.booking.id}`);
			} else {
				setError((action.errors || ['Something went wrong. Please try again.']).join(' '));
			}
		});
	};

	if (!restaurant) {
		return <Container maxWidth="md" sx={{ py: 6 }}><Skeleton variant="rounded" height={320} /></Container>;
	}

	const mins = Math.floor(left / 60);
	const secs = String(left % 60).padStart(2, '0');

	return (
		<Container maxWidth="lg" sx={{ py: { xs: 3, md: 6 } }}>
			<Grid container spacing={4}>
				<Grid item xs={12} md={8}>
					<Typography variant="h4" component="h1" sx={{ mb: 3 }}>You're almost done!</Typography>
					<Card>
						<CardContent sx={{ p: { xs: 2.5, sm: 3 } }}>
							<BookingSummary restaurant={restaurant} image={restaurant.iconUrl || restaurant.icon}
								date={params.date} time={params.time} party={params.party} />
						</CardContent>
					</Card>

					<Alert icon={<TimerOutlinedIcon />} severity={left ? 'info' : 'warning'} sx={{ mt: 2, borderRadius: 3 }}>
						{left
							? <>We're holding this table for you for <strong>{mins}:{secs}</strong> minutes.</>
							: 'You can still try to complete your reservation, but this table may no longer be available.'}
					</Alert>

					<Card sx={{ mt: 3 }}>
						<CardContent component="form" onSubmit={handleSubmit} sx={{ p: { xs: 2.5, sm: 3 } }}>
							<Typography variant="h6" component="h2" sx={{ mb: 2 }}>Diner details</Typography>
							<Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
								<TextField label="Name" value={`${user.fname} ${user.lname}`} InputProps={{ readOnly: true }} />
								<TextField label="Phone" value={formatPhone(user.phone)} InputProps={{ readOnly: true }} />
								<TextField label="Email" value={user.email} InputProps={{ readOnly: true }} sx={{ gridColumn: '1 / -1' }} />
								<TextField select label="Occasion (optional)" value={details.occasion} onChange={update('occasion')} sx={{ gridColumn: '1 / -1' }}>
									<MenuItem value="">None</MenuItem>
									{OCCASIONS.map(o => <MenuItem key={o} value={o}>{o}</MenuItem>)}
								</TextField>
								<TextField label="Special request (optional)" multiline minRows={3} value={details.special_request}
									onChange={update('special_request')} inputProps={{ maxLength: 500 }} sx={{ gridColumn: '1 / -1' }} />
							</Box>
							{error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
							<Button type="submit" variant="contained" size="large" disabled={submitting} sx={{ mt: 3, width: { xs: '100%', sm: 'auto' } }}>
								Complete reservation
							</Button>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} md={4}>
					<Card sx={{ bgcolor: 'background.default', position: { md: 'sticky' }, top: { md: 100 }, mt: { md: 8 } }}>
						<CardContent sx={{ p: 3 }}>
							<Typography variant="h6" component="h2">What to know before you go</Typography>
							<Stack spacing={1} sx={{ mt: 2 }}>
								<Typography variant="subtitle2">Important dining information</Typography>
								<Typography variant="body2" color="text.secondary">
									We have a 15 minute grace period. Please call us if you are running later than 15 minutes after your reservation time.
								</Typography>
								<Typography variant="body2" color="text.secondary">
									Phone: {formatPhone(restaurant.phone)}
								</Typography>
							</Stack>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default BookingForm;
