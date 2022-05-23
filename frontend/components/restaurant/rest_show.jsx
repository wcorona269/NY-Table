import React from 'react';
import { icCuisine } from 'otkit-icons/token.theme.common';
import { icPriceRange } from 'otkit-icons/token.theme.common';
import { icReview } from 'otkit-icons/token.theme.common';
import { DynamicStar } from 'react-dynamic-star';



class RestShow extends React.Component {
	constructor(props) {
		super(props);

		this.priceRangeText = this.priceRangeText.bind(this);
		this.reviewCount = this.reviewCount.bind(this);
		this.rating = this.rating.bind(this)
	}

	componentDidMount() {
		// debugger;
		this.props.fetchRest(this.props.match.params.restId)
		window.scrollTo(0,0);
	}

	priceRangeText(priceRange) {
		switch(priceRange) {
			case 1:
				return "$20 and under";
				break;
			case 2:
				return "$30 and under";
				break;
			case 3:
				return "$31 to $50";
				break;
			case 4:
				return "$50 and over";
				break;
		}
	}

	rating() {
		let rating = Math.random() * (5 - 2) + 2
		return parseFloat(Number.parseFloat(rating).toFixed(1))
	}

	reviewCount() {
		return Math.floor(Math.random() * 5000)
	}

	render() {
		if (!this.props.restaurant) return null;

		const {restaurant} = this.props;
		const rating = this.rating();
		return (
			<>
		<div class="rest-show-container">
			<div class="rest-show-main-col">
				<section className='rest-info-nav-buttons'>

				</section>
				<section className='main-show-col-details'>
					<header className="main-show-col-header">
						{restaurant.name}
					</header>
					<div className="main-col-info">
						<div className='info-item'>
						<DynamicStar
								rating={rating}
								width={20}
								height={20}
								outlined={false}
								totalStars={5}
								sharpnessStar={2}
								fullStarColor="#da3743"
								emptyStarColor="lightgray"
							/>
							<p>
								{rating}
							</p>
						</div>
						<div className='info-item'>
							<div className="rest-info-img">
								<img src={`data:image/svg+xml;utf8,${icReview}`}/>
							</div>
							{this.reviewCount()} Reviews
						</div>
						<div className='info-item'>
							<div className='rest-info-img'>
								<img src={`data:image/svg+xml;utf8,${icPriceRange}`}/>
							</div>
							{this.priceRangeText(restaurant.price_range)}
						</div>
						<div className='info-item'>
							<div className="rest-info-img">
								<img src={`data:image/svg+xml;utf8,${icCuisine}`}/>
							</div>
							{restaurant.cuisines}
						</div>
					</div>
					<div className="rest-show-description">
						{restaurant.description}
					</div>
				</section>
			</div>
			<div class="rest-show-res-col">
				<div className="reservations-box">
					<header className="sidebar-show-col-header">
						Make a reservation
					</header>
					<form className="reservations-container">
						<div class="rest-show-res-grid">
							<div class="party-size">
								<label id='res-label'>
									Party Size
								</label>
									<select className='res-select' placeholder='2 people'>
										<option value='1'>1 person</option>
										<option value='2'>2 people</option>
										<option value='3'>3 people</option>
										<option value='4'>4 people</option>
										<option value='5'>5 people</option>
										<option value='6'>6 people</option>
										<option value='7'>7 people</option>
										<option value='8'>8 people</option>
										<option value='9'>9 people</option>
										<option value='10'>10 people</option>
										<option value='11'>11 people</option>
										<option value='12'>12 people</option>
										<option value='13'>13 people</option>
										<option value='14'>14 people</option>
										<option value='15'>15 people</option>
										<option value='16'>16 people</option>
										<option value='17'>17 people</option>
										<option value='18'>18 people</option>
										<option value='19'>19 people</option>
										<option value='20'>20 people</option>
									</select>
							</div>
							<div class="res-date">
								<label id='res-label'>
									Date
								</label>
								<select className='res-select'>
									<option>Datepicker</option>
								</select>
							</div>
							<div class="res-time">
								<label id='res-label'>
									Time
								</label>
								<select className='res-select'>
									<option>11:00 AM</option>
									<option>11:30 AM</option>
									<option>12:00 PM</option>
									<option>12:30 PM</option>
									<option>1:00 PM</option>
									<option>1:30 PM</option>
									<option>2:00 PM</option>
									<option>2:30 PM</option>
									<option>3:00 PM</option>
									<option>3:30 PM</option>
									<option>4:00 PM</option>
									<option>4:30 PM</option>
									<option>5:00 PM</option>
									<option>5:30 PM</option>
									<option>6:00 PM</option>
									<option>6:30 PM</option>
									<option>7:00 PM</option>
									<option>7:30 PM</option>
									<option>8:00 PM</option>
									<option>8:30 PM</option>
									<option>9:00 PM</option>
									<option>9:30 PM</option>
									<option>10:00 PM</option>
									<option>10:30 PM</option>
									<option>11:00 PM</option>
								</select>

							</div>
							<div class="res-submit">
								<button id='auth-button'>
									Find a time
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>

			<div className="rest-header-container">
				<div className="rest-header-neighborhood">
					{restaurant.neighborhood}
				</div>
				<div className="rest-header-banner-photo">
				</div>
			</div>
			</>
		)
	}
}

export default RestShow;
