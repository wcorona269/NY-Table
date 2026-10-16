import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import BookingListItem from './booking_list_item';
import { useBookings } from '../../util/selectors';
import { isUpcoming } from '../../util/format';

const byDate = (a, b) => (a.date + a.time).localeCompare(b.date + b.time);

const Empty = ({ children }) => (
	<Box sx={{ p: 3, border: 1, borderStyle: 'dashed', borderColor: 'divider', borderRadius: 4, textAlign: 'center' }}>
		<Typography color="text.secondary">{children}</Typography>
	</Box>
);

const UserDiningDashboard = () => {
	const bookings = useBookings();

	const { upcoming, past } = useMemo(() => {
		const upcoming = bookings.filter(b => !b.cancelled && isUpcoming(b.date)).sort(byDate);
		const past = bookings.filter(b => b.cancelled || !isUpcoming(b.date)).sort(byDate).reverse();
		return { upcoming, past };
	}, [bookings]);

	return (
		<Stack spacing={5}>
			<Box>
				<Typography variant="h5" component="h2" sx={{ mb: 2 }}>Upcoming reservations</Typography>
				{upcoming.length ? (
					<Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 2 }}>
						{upcoming.map(b => <BookingListItem key={b.id} booking={b} />)}
					</Box>
				) : (
					<Empty>
						You have no upcoming reservations.{' '}
						<Button component={Link} to="/restaurants" size="small">Find a table</Button>
					</Empty>
				)}
			</Box>
			<Box>
				<Typography variant="h5" component="h2" sx={{ mb: 2 }}>Past reservations</Typography>
				{past.length ? (
					<Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 2 }}>
						{past.map(b => <BookingListItem key={b.id} booking={b} />)}
					</Box>
				) : (
					<Empty>You have no past reservations.</Empty>
				)}
			</Box>
		</Stack>
	);
};

export default UserDiningDashboard;
