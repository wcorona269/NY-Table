import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { formatRating, priceSymbols } from '../../util/format';

export const PriceRange = ({ value }) => (
	<Box component="span" sx={{ fontWeight: 600 }}>
		{priceSymbols(value)}
		<Box component="span" sx={{ color: 'text.disabled' }}>{'$'.repeat(4 - (Number(value) || 1))}</Box>
	</Box>
);

export const RatingLine = ({ rating, count, size = 'small' }) => (
	<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
		<Rating value={Number(rating) || 0} size={size} />
		<Typography variant="body2" fontWeight={700}>{formatRating(rating)}</Typography>
		{count != null && <Typography variant="body2" color="text.secondary">({count})</Typography>}
	</Box>
);

export const MetaLine = ({ rest }) => (
	<Typography variant="body2" color="text.secondary" sx={{ display: 'flex', flexWrap: 'wrap', columnGap: 0.75 }}>
		<span>{rest.cuisines}</span>·<PriceRange value={rest.price_range} />·<span>{rest.neighborhood}</span>
	</Typography>
);

export const ratingLabel = (rating) => (
	rating > 4.5 ? 'Exceptional' : rating > 4 ? 'Awesome' : rating > 3 ? 'Excellent' : 'Good'
);
