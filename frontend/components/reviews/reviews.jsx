import React, { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Review from './review';
import ReviewsHeader from './reviews_header';

const PAGE_SIZE = 6;

const average = (reviews, key) => (
	reviews.length ? reviews.reduce((sum, r) => sum + r[key], 0) / reviews.length : 0
);

const SORTS = {
	newest: (a, b) => b.id - a.id,
	highest: (a, b) => b.overall - a.overall,
	lowest: (a, b) => a.overall - b.overall,
};

const Reviews = ({ reviews }) => {
	const [visible, setVisible] = useState(PAGE_SIZE);
	const [sort, setSort] = useState('newest');

	const averages = useMemo(() => ({
		overall: average(reviews, 'overall'),
		food: average(reviews, 'food'),
		service: average(reviews, 'service'),
		ambience: average(reviews, 'ambience'),
	}), [reviews]);

	const distribution = useMemo(() => {
		const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
		reviews.forEach(r => { counts[r.overall] = (counts[r.overall] || 0) + 1; });
		Object.keys(counts).forEach(k => { counts[k] = reviews.length ? (100 * counts[k]) / reviews.length : 0; });
		return counts;
	}, [reviews]);

	const sorted = useMemo(() => [...reviews].sort(SORTS[sort]), [reviews, sort]);

	return (
		<Box component="section" id="reviews">
			<Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
				<Typography variant="h5" component="h2">What {reviews.length} people are saying</Typography>
			</Stack>
			{reviews.length === 0 ? (
				<Typography color="text.secondary">No reviews yet. Dine here and be the first!</Typography>
			) : (
				<>
					<ReviewsHeader averages={averages} distribution={distribution} count={reviews.length} />
					<Stack direction="row" justifyContent="flex-end" sx={{ mt: 3 }}>
						<TextField select size="small" label="Sort" value={sort} onChange={e => setSort(e.target.value)} sx={{ width: 180 }}>
							<MenuItem value="newest">Newest</MenuItem>
							<MenuItem value="highest">Highest rated</MenuItem>
							<MenuItem value="lowest">Lowest rated</MenuItem>
						</TextField>
					</Stack>
					{sorted.slice(0, visible).map(review => <Review key={review.id} review={review} />)}
					{visible < sorted.length && (
						<Button variant="outlined" onClick={() => setVisible(v => v + PAGE_SIZE)} sx={{ mt: 3 }}>
							Show more reviews
						</Button>
					)}
				</>
			)}
		</Box>
	);
};

export default Reviews;
