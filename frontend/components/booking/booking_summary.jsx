import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import { formatDate, formatTime, partyLabel } from '../../util/format';

const Detail = ({ icon, children }) => (
	<Stack direction="row" spacing={0.75} alignItems="center">
		{icon}
		<Typography variant="body2" fontWeight={600}>{children}</Typography>
	</Stack>
);

// Restaurant thumbnail + name + date/time/party row, shared by the booking pages.
const BookingSummary = ({ restaurant, image, date, time, party, children }) => (
	<Box sx={{ display: 'flex', gap: { xs: 2, sm: 3 }, alignItems: 'center' }}>
		<Box component={Link} to={`/restaurants/${restaurant.id}`} sx={{ flexShrink: 0 }}>
			<Box component="img" src={image} alt={restaurant.name}
				sx={{ width: { xs: 80, sm: 112 }, height: { xs: 80, sm: 112 }, borderRadius: 3, objectFit: 'cover' }} />
		</Box>
		<Box sx={{ minWidth: 0 }}>
			<Typography variant="h5" component={Link} to={`/restaurants/${restaurant.id}`} sx={{ display: 'block', '&:hover': { textDecoration: 'underline' } }}>
				{restaurant.name}
			</Typography>
			<Stack direction="row" useFlexGap flexWrap="wrap" spacing={2} sx={{ mt: 1, color: 'text.secondary' }}>
				<Detail icon={<CalendarTodayOutlinedIcon fontSize="small" />}>{formatDate(date)}</Detail>
				<Detail icon={<ScheduleOutlinedIcon fontSize="small" />}>{formatTime(time)}</Detail>
				<Detail icon={<PeopleOutlineIcon fontSize="small" />}>{partyLabel(party)}</Detail>
			</Stack>
			{children}
		</Box>
	</Box>
);

export default BookingSummary;
