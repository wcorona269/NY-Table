import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import { createReview, RECEIVE_REVIEW } from '../../actions/review_actions';
import { fetchRest } from '../../actions/rest_actions';

const MIN_LENGTH = 50;
const MAX_LENGTH = 2000;
const CATEGORIES = ['overall', 'food', 'service', 'ambience'];

const ReviewForm = () => {
	const { restId } = useParams();
	const history = useHistory();
	const dispatch = useDispatch();
	const restaurant = useSelector(state => state.entities.rests[restId]);
	const [ratings, setRatings] = useState({ overall: 5, food: 5, service: 5, ambience: 5 });
	const [body, setBody] = useState('');
	const [error, setError] = useState(null);
	const [submitting, setSubmitting] = useState(false);

	useEffect(() => {
		if (!restaurant) dispatch(fetchRest(restId));
	}, [restId]);

	const tooShort = body.trim().length < MIN_LENGTH;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (tooShort) {
			setError(`Your review must be at least ${MIN_LENGTH} characters.`);
			return;
		}
		setSubmitting(true);
		dispatch(createReview({ rest_id: Number(restId), body: body.trim(), ...ratings })).then(action => {
			setSubmitting(false);
			if (action.type === RECEIVE_REVIEW) history.push(`/restaurants/${restId}`);
			else setError((action.errors || ['Something went wrong.']).join(' '));
		});
	};

	if (!restaurant) {
		return <Container maxWidth="sm" sx={{ py: 6 }}><Skeleton variant="rounded" height={400} /></Container>;
	}

	return (
		<Container maxWidth="sm" sx={{ py: { xs: 3, md: 6 } }}>
			<Typography variant="overline" color="text.secondary">Review</Typography>
			<Typography variant="h4" component="h1" sx={{ mb: 3 }}>{restaurant.name}</Typography>
			<Card>
				<CardContent component="form" onSubmit={handleSubmit} sx={{ p: { xs: 2.5, sm: 4 } }}>
					<Typography variant="h6" component="h2">Rate your experience</Typography>
					<Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2, mt: 2 }}>
						{CATEGORIES.map(key => (
							<Stack key={key} direction="row" justifyContent="space-between" alignItems="center"
								sx={{ p: 1.5, border: 1, borderColor: 'divider', borderRadius: 3 }}>
								<Typography fontWeight={600} sx={{ textTransform: 'capitalize' }}>{key}</Typography>
								<Rating
									readOnly={false}
									precision={1}
									value={ratings[key]}
									onChange={(_, v) => v && setRatings({ ...ratings, [key]: v })}
									aria-label={`${key} rating`}
								/>
							</Stack>
						))}
					</Box>
					<Typography variant="h6" component="h2" sx={{ mt: 4 }}>Write a review</Typography>
					<Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
						Help diners decide where to eat. Keep it short, simple and specific.
					</Typography>
					<TextField
						multiline
						minRows={5}
						value={body}
						onChange={e => { setBody(e.target.value); setError(null); }}
						placeholder="What did you order? How was the service?"
						inputProps={{ maxLength: MAX_LENGTH }}
						helperText={`${body.length} / ${MAX_LENGTH} characters · minimum ${MIN_LENGTH}`}
					/>
					{error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
					<Button type="submit" variant="contained" size="large" disabled={submitting} sx={{ mt: 3, width: { xs: '100%', sm: 'auto' } }}>
						Submit review
					</Button>
				</CardContent>
			</Card>
		</Container>
	);
};

export default ReviewForm;
