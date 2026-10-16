import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookmarkRemoveOutlinedIcon from '@mui/icons-material/BookmarkRemoveOutlined';
import { RatingLine } from '../restaurant/rest_meta';
import { deleteFav } from '../../actions/favorite_actions';

const UserFavorites = () => {
	const dispatch = useDispatch();
	const favoritesById = useSelector(state => state.entities.favorites);
	const favs = Object.values(favoritesById);

	return (
		<Box>
			<Typography variant="h5" component="h2" sx={{ mb: 2 }}>Saved restaurants</Typography>
			{favs.length === 0 ? (
				<Box sx={{ p: 3, border: 1, borderStyle: 'dashed', borderColor: 'divider', borderRadius: 4, textAlign: 'center' }}>
					<Typography color="text.secondary">
						You haven't saved any restaurants yet. Tap <strong>Save</strong> on a restaurant page to keep it here.
					</Typography>
				</Box>
			) : (
				<Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: 2 }}>
					{favs.map(fav => (
						<Card key={fav.id} sx={{ display: 'flex', flexDirection: 'column' }}>
							<CardActionArea component={Link} to={`/restaurants/${fav.rest_id}`}>
								<CardMedia component="img" image={fav.icon} alt="" sx={{ aspectRatio: '16 / 10' }} />
								<CardContent>
									<Typography fontWeight={700} noWrap>{fav.restaurant.name}</Typography>
									<RatingLine rating={fav.rating} />
									<Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
										{fav.cuisines} · {fav.neighborhood}
									</Typography>
								</CardContent>
							</CardActionArea>
							<CardActions sx={{ mt: 'auto', justifyContent: 'space-between', px: 2, pb: 2 }}>
								<Button size="small" variant="contained" component={Link} to={`/restaurants/${fav.rest_id}`}>Reserve</Button>
								<Button size="small" color="inherit" startIcon={<BookmarkRemoveOutlinedIcon />} onClick={() => dispatch(deleteFav(fav.id))}>
									Remove
								</Button>
							</CardActions>
						</Card>
					))}
				</Box>
			)}
		</Box>
	);
};

export default UserFavorites;
