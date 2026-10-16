import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import { closeModal } from "../../actions/modal_actions";
import { updateBooking, RECEIVE_BOOKING } from '../../actions/booking_actions';
import { formatDate, formatTime, partyLabel } from '../../util/format';

const CancelBookingModal = ({ bookingId }) => {
	const dispatch = useDispatch();
	const booking = useSelector(state => state.entities.bookings[bookingId]);
	const [error, setError] = useState(false);
	const [submitting, setSubmitting] = useState(false);

	if (!booking) return null;

	const handleCancel = () => {
		setSubmitting(true);
		dispatch(updateBooking({ id: booking.id, cancelled: true })).then(action => {
			setSubmitting(false);
			if (action.type === RECEIVE_BOOKING) dispatch(closeModal());
			else setError(true);
		});
	};

	return (
		<DialogContent sx={{ p: { xs: 3, sm: 4 }, pt: { xs: 7, sm: 5 } }}>
			<Typography variant="h5" component="h2">Cancel reservation?</Typography>
			<Typography sx={{ mt: 2, fontWeight: 700 }}>{booking.restaurant?.name}</Typography>
			<Typography color="text.secondary">
				{formatDate(booking.date)} at {formatTime(booking.time)} · {partyLabel(booking.party_size)}
			</Typography>
			{error && <Alert severity="error" sx={{ mt: 2 }}>Something went wrong. Please try again.</Alert>}
			<Stack direction="row" spacing={1.5} justifyContent="flex-end" sx={{ mt: 4 }}>
				<Button onClick={() => dispatch(closeModal())}>Keep it</Button>
				<Button variant="contained" color="error" onClick={handleCancel} disabled={submitting}>
					Cancel reservation
				</Button>
			</Stack>
		</DialogContent>
	);
};

export default CancelBookingModal;
