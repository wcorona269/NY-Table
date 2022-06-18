import React, {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { useHistory, useLocation, NavLink, Route } from 'react-router-dom';
import { fetchAllFavs, createFav, deleteFav } from '../../actions/favorite_actions';
import { showModal } from '../../actions/modal_actions';

const FavButton = (props) => {
	const {restId, favorites, user} = props;
	const dispatch = useDispatch();
	const [isFaved, setIsFaved] = useState(false);
	const [fav, setFav] = useState('')

	useEffect(() => {
		if (user) {
			let filtered = Object.values(favorites).filter(fav => fav.rest_id == restId)
			if (filtered.length) {
				setIsFaved(true)
				setFav(filtered[0])
			} else {
				setIsFaved(false)
				setFav('')
			}
		}
	}, [favorites])

	useEffect(() => {
		
	}, [isFaved])

	const handleClick = (e) => {
		if (!user) {
			dispatch(showModal("login"))
		} else {
			if (isFaved) {
				dispatch(deleteFav(fav.id)).then(setIsFaved(false)).then(setFav(''))
			} else {
				let newFav = {
					user_id: user,
					rest_id: restId
				}
				dispatch(createFav(newFav)).then(res => setFav(res)).then(setIsFaved(true))
			}
		}
	}

	return isFaved ? (
		<div>
			<button id='add-fav-btn' className='fav-btn' 
			onClick={handleClick}
			>
			<i className="fa-solid fa-bookmark" id='saved-bookmark'></i>
				Restaurant Saved!
			</button>
		</div>
	) : (
		<div>
			<button id='add-fav-btn' className='fav-btn' 
			onClick={handleClick}
			>
			<i className="fa-regular fa-bookmark" id='unsaved-bookmark'></i>
				Save This Restaurant
			</button>
		</div>
	)
}

export default withRouter(FavButton);