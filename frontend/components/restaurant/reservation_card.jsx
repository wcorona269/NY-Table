import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TimeButtons from '../booking/time_buttons';
import { TIME_OPTIONS, PARTY_OPTIONS, formatTime, partyLabel, toISODate, defaultSearch } from '../../util/format';

const ReservationCard = ({ restaurant }) => {
	const [search, setSearch] = useState(defaultSearch);
	const update = (field) => (e) => setSearch({ ...search, [field]: e.target.value });

	return (
		<Card id="reserve" sx={{ boxShadow: { md: 4 }, border: { md: 0 } }}>
			<CardContent sx={{ p: 3 }}>
				<Typography variant="h6" component="h2" sx={{ mb: 2 }}>Make a reservation</Typography>
				<Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
					<TextField select label="Party size" size="small" value={search.party} onChange={update('party')} sx={{ gridColumn: '1 / -1' }}>
						{PARTY_OPTIONS.map(n => <MenuItem key={n} value={n}>{partyLabel(n)}</MenuItem>)}
					</TextField>
					<TextField type="date" label="Date" size="small" value={search.date} onChange={update('date')}
						inputProps={{ min: toISODate() }} InputLabelProps={{ shrink: true }} />
					<TextField select label="Time" size="small" value={search.time} onChange={update('time')}>
						{TIME_OPTIONS.map(t => <MenuItem key={t} value={t}>{formatTime(t)}</MenuItem>)}
					</TextField>
				</Box>
				<Typography variant="subtitle2" sx={{ mt: 2.5, mb: 1 }}>Select a time</Typography>
				<TimeButtons restId={restaurant.id} {...search} />
			</CardContent>
		</Card>
	);
};

export default ReservationCard;
