import React, { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { closeModal } from '../../actions/modal_actions';
import { useRestaurants } from '../../util/selectors';
import { TIME_OPTIONS, PARTY_OPTIONS, formatTime, partyLabel, toISODate, defaultSearch } from '../../util/format';

// Reads the current search (if any) from the URL so the bar stays in sync on /search.
export const useSearchParams = () => {
	const { search } = useLocation();
	return useMemo(() => {
		const params = new URLSearchParams(search);
		const defaults = defaultSearch();
		return {
			q: params.get('q') || '',
			date: params.get('date') || defaults.date,
			time: params.get('time') || defaults.time,
			party: Number(params.get('party')) || defaults.party,
		};
	}, [search]);
};

export const buildSearchUrl = ({ q, date, time, party }) => {
	const params = new URLSearchParams({ date, time, party });
	if (q) params.set('q', q);
	return `/search?${params.toString()}`;
};

const SearchBar = ({ autoFocus = false, elevated = false }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const initial = useSearchParams();
	const restaurants = useRestaurants();
	const [search, setSearch] = useState(initial);

	const options = useMemo(() => {
		const set = new Set();
		restaurants.forEach(r => [r.name, r.cuisines, r.neighborhood].forEach(v => v && set.add(v)));
		return [...set].sort();
	}, [restaurants]);

	const update = (field) => (e) => setSearch({ ...search, [field]: e.target.value });

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(closeModal());
		history.push(buildSearchUrl({ ...search, q: search.q.trim() }));
	};

	return (
		<Paper
			component="form"
			onSubmit={handleSubmit}
			elevation={elevated ? 8 : 0}
			sx={{
				p: 1.5,
				display: 'grid',
				gap: 1.5,
				gridTemplateColumns: { xs: '1fr 1fr', md: '150px 130px 130px 1fr auto' },
				border: elevated ? 0 : 1,
				borderColor: 'divider',
			}}
		>
			<TextField
				type="date"
				label="Date"
				size="small"
				value={search.date}
				onChange={update('date')}
				inputProps={{ min: toISODate() }}
				InputLabelProps={{ shrink: true }}
				sx={{ gridColumn: { xs: '1 / -1', md: 'auto' } }}
			/>
			<TextField select label="Time" size="small" value={search.time} onChange={update('time')}>
				{TIME_OPTIONS.map(t => <MenuItem key={t} value={t}>{formatTime(t)}</MenuItem>)}
			</TextField>
			<TextField select label="Party" size="small" value={search.party} onChange={update('party')}>
				{PARTY_OPTIONS.map(n => <MenuItem key={n} value={n}>{partyLabel(n)}</MenuItem>)}
			</TextField>
			<Autocomplete
				freeSolo
				options={options}
				inputValue={search.q}
				onInputChange={(_, value) => setSearch(s => ({ ...s, q: value }))}
				sx={{ gridColumn: { xs: '1 / -1', md: 'auto' } }}
				renderInput={(params) => (
					<TextField
						{...params}
						size="small"
						autoFocus={autoFocus}
						label="Restaurant, cuisine or neighborhood"
						InputProps={{
							...params.InputProps,
							startAdornment: <InputAdornment position="start"><SearchIcon fontSize="small" /></InputAdornment>,
						}}
					/>
				)}
			/>
			<Box sx={{ gridColumn: { xs: '1 / -1', md: 'auto' } }}>
				<Button type="submit" variant="contained" color="secondary" fullWidth sx={{ height: '100%', minHeight: 40, px: 4 }}>
					Let's go
				</Button>
			</Box>
		</Paper>
	);
};

export default SearchBar;
