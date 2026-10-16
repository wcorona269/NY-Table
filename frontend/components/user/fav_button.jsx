import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { createFav, deleteFav } from '../../actions/favorite_actions';
import { showModal } from '../../actions/modal_actions';

const FavButton = ({ restId, sx }) => {
	const dispatch = useDispatch();
	const loggedIn = useSelector(state => Boolean(state.session.id));
	const favoritesById = useSelector(state => state.entities.favorites);
	const fav = useMemo(() => Object.values(favoritesById).find(f => f.rest_id == restId), [favoritesById, restId]);
	const [busy, setBusy] = useState(false);

	const handleClick = () => {
		if (!loggedIn) return dispatch(showModal('login'));
		setBusy(true);
		const request = fav ? deleteFav(fav.id) : createFav({ rest_id: restId });
		Promise.resolve(dispatch(request)).finally(() => setBusy(false));
	};

	return (
		<Button
			variant="contained"
			color={fav ? 'secondary' : 'inherit'}
			startIcon={fav ? <BookmarkIcon /> : <BookmarkBorderIcon />}
			onClick={handleClick}
			disabled={busy}
			sx={{ bgcolor: fav ? undefined : 'background.paper', color: 'text.primary', ...sx }}
		>
			{fav ? 'Saved' : 'Save'}
		</Button>
	);
};

export default FavButton;
