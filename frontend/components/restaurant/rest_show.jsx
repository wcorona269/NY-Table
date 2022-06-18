import React from 'react';
import FavButton from '../user/fav_button';
import LeftColumnContainer from './left_col_container';
import RightColumnContainer from './right_col_container';

class RestShow extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchRest(this.props.match.params.restId)
		if (this.props.user) {
			this.props.fetchAllFavs();
		}
		window.scrollTo(0,0);
	}

	render() {
		if (!this.props.restaurant || !this.props.favorites) return null;
		const {restaurant, favorites, user} = this.props;
		
		return (
			<>
				<div className="rest-header-container">
					<div className="rest-header-neighborhood">
						{restaurant.neighborhood}
					</div>
					<div className="rest-header-banner-photo">
						<img src={restaurant.banner}/>
						<FavButton user={user} restId={restaurant.id} favorites={favorites}/>
					</div>
				</div>
				<div className="rest-show-container">
					<LeftColumnContainer/>
					<RightColumnContainer/>
				</div>
			</>
		)
	}
}

export default RestShow;
