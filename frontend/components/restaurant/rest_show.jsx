import React from 'react';
import { icCuisine } from 'otkit-icons/token.theme.common';


class RestShow extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// debugger;
		this.props.fetchRest(this.props.match.params.restId)
		window.scrollTo(0,0);
	}

	render() {
		if (!this.props.restaurant) return null;

		const {restaurant} = this.props;

		return (
			<>
			<div className="rest-header-container">
				<div className="rest-header-neighborhood">
					{restaurant.neighborhood}
				</div>
				<div className="rest-header-banner-photo">
				</div>
				<div className="rest-show-info-container">
					<div className="main-show-col">
						<section className="main-col-info">
							<header className="main-show-col-header">
								{restaurant.name}
							</header>
							<div className="main-show-col-details">
								<div className="cuisine-type-img">
									<img src={`data:image/svg+xml;utf8,${icCuisine}`}/>
								</div>
								{restaurant.cuisines}
							</div>
							<div className="rest-show-description">
								{restaurant.description}
							</div>
						</section>
					</div>
					<div className="rest-show-sidebar">
						<div className="reservations-box">
							<header className="sidebar-show-col-header">
								Make a reservation
							</header>
							<div className="reservations-container">
								Hello world
							</div>
						</div>
					</div>
				</div>
			</div>
			</>
		)
	}
}

export default RestShow;
