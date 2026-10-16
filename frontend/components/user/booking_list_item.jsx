import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import { bookingStatus } from '../booking/show';
import { formatDate, formatTime, partyLabel } from '../../util/format';

const BookingListItem = ({ booking }) => {
	const status = bookingStatus(booking);
	const restaurant = booking.restaurant || {};

	return (
		<Card>
			<CardActionArea component={Link} to={`/reservations/${booking.id}`} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'stretch' }}>
				<Box component="img" src={booking.icon} alt="" sx={{ width: { xs: 96, sm: 140 }, objectFit: 'cover', flexShrink: 0 }} />
				<Box sx={{ p: 2, minWidth: 0, flex: 1 }}>
					<Typography fontWeight={700} noWrap>{restaurant.name}</Typography>
					<Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
						{formatDate(booking.date)} at {formatTime(booking.time)} · {partyLabel(booking.party_size)}
					</Typography>
					<Chip size="small" icon={status.icon} label={status.label} color={status.color} variant="outlined" sx={{ mt: 1.5 }} />
				</Box>
			</CardActionArea>
			{status.key === 'completed' && (
				<Box sx={{ px: 2, pb: 1.5, pt: 0.5, borderTop: 1, borderColor: 'divider' }}>
					<Button size="small" component={Link} to={`/review/${booking.rest_id}`} sx={{ ml: -1 }}>Leave a review</Button>
				</Box>
			)}
		</Card>
	);
};

export default BookingListItem;
