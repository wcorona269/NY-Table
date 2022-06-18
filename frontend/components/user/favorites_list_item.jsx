import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { DynamicStar } from 'react-dynamic-star';
import { deleteFav, fetchAllFavs } from '../../actions/favorite_actions';

const FavoritesListItem = ({fav}) => {
	const dispatch = useDispatch()

	const handleRemoveFav = (e) => {
		e.preventDefault();
		dispatch(deleteFav(fav.id))
		window.location.reload()
	}

	return (
		<div className='favorite-list-item-container'>
			<div>
{				console.log(fav.id)}
				<div id='rest-row-info'>
					<Link to={`/restaurants/${fav.id}`}>
						<img id='rest-row-info-img' src={fav.icon} />
					</Link>
					<div>
						<Link to={`/restaurants/${fav.id}`} id='fav-rest-name'>
							{fav.restaurant.name}
						</Link>
						<div id='remove-row' onClick={handleRemoveFav}>
							<i className="fa-solid fa-bookmark"></i>
							<p>Remove from Saved Restaurants</p>
						</div>
						<DynamicStar
							rating={fav.rating.toFixed(1)}
							width={20}
							height={20}
							outlined={false}
							totalStars={5}
							sharpnessStar={2}
							fullStarColor="#FDAF08"
							emptyStarColor="#d8d9db"
						/>
						<p id='fav-info'>
							{fav.cuisines} | {fav.neighborhood}
						</p>
					</div>
					<Link to={`/restaurants/${fav.id}`}>
						<button>
							Reserve Now
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default withRouter(FavoritesListItem);