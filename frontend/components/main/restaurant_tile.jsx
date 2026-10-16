import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { RatingLine, MetaLine } from '../restaurant/rest_meta';

// Compact vertical card used in the home page carousels.
const RestaurantTile = ({ rest }) => (
	<Card
		sx={{
			height: '100%',
			transition: 'transform 160ms ease, box-shadow 160ms ease',
			'&:hover': { transform: 'translateY(-3px)', boxShadow: 6 },
		}}
	>
		<CardActionArea component={Link} to={`/restaurants/${rest.id}`} sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
			<CardMedia component="img" image={rest.iconUrl} alt={rest.name} loading="lazy" sx={{ aspectRatio: '16 / 10', objectFit: 'cover' }} />
			<CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0.75 }}>
				<Typography variant="subtitle1" fontWeight={700} noWrap title={rest.name}>{rest.name}</Typography>
				<RatingLine rating={rest.avg_rating} count={rest.review_count} />
				<MetaLine rest={rest} />
				<Box sx={{ mt: 'auto', pt: 0.5, display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
					<TrendingUpIcon sx={{ fontSize: 16 }} />
					<Typography variant="caption">Booked {rest.bookings_count} times</Typography>
				</Box>
			</CardContent>
		</CardActionArea>
	</Card>
);

export default RestaurantTile;
