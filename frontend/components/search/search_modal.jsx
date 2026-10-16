import React from 'react';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import SearchBar from './searchbar';

const SearchModal = () => (
	<DialogContent sx={{ p: { xs: 3, sm: 5 }, pt: { xs: 7, sm: 5 } }}>
		<Typography variant="h4" component="h2" sx={{ mb: 3 }}>
			Find your table for any occasion
		</Typography>
		<SearchBar autoFocus />
	</DialogContent>
);

export default SearchModal;
