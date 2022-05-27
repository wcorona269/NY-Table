import React from 'react';
import { icCuisine } from 'otkit-icons/token.theme.common';
import { icPriceRange } from 'otkit-icons/token.theme.common';
import { icClock, icReview, icPhone, icNeighborhood, icDiningStyle, icDressCode, icPayment } from 'otkit-icons/token.theme.common';
import { DynamicStar } from 'react-dynamic-star';
import Gallery from './gallery';
import Menu from './menu';
import Reviews from './reviews';

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

	parsePhone(phone) {
		let str = phone.toString();
		return `(${str.slice(0, 3)}) ${str.slice(3,6)}-${str.slice(6,10)}`
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
		<div className="rest-show-container">
			<div className="rest-show-main-col">
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
				<Gallery/>
				<Menu/>
				<Reviews/>
			</div>
			<div className="rest-show-res-col">
				<div className="reservations-box">
					<header className="sidebar-show-col-header">
						Make a reservation
					</header>
					<form className="reservations-container">
						<div className="rest-show-res-grid">
							<div className="party-size">
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
							<div className="res-date">
								<label id='res-label'>
									Date
								</label>
								<select className='res-select'>
									<option>Datepicker</option>
								</select>
							</div>
							<div className="res-time">
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
							<div className="res-submit">
								<button id='auth-button'>
									Find a time
								</button>
							</div>
						</div>
					</form>
				</div>
				<article className='delivery-box'>
					<header className='sidebar-show-col-header'>
						Order delivery or takeout
					</header>
					<div>
						<a>
							<span>
								<img id="phone" src={`data:image/svg+xml;utf8,${icPhone}`}/>
							</span>
						{this.parsePhone(restaurant.phone)}
						</a>
						<a target='_blank.' href="https://www.ubereats.com/?utm_source=AdWords_Brand&utm_campaign=CM2029595-search-google-brand_1_5_US-New+York+City_e_web_acq_cpc_en_Generics_Exact_uber%20eats_kwd-125079392186_546346938130_106780962688_e_c&campaign_id=9983520619&adg_id=106780962688&fi_id=&match=e&net=g&dev=c&dev_m=&ad_id=546346938130&cre=546346938130&kwid=kwd-125079392186&kw=uber%20eats&placement=&tar=&gclid=CjwKCAjw7cGUBhA9EiwArBAvogTBSCuy82RlWDTKM3jE7oK5J3sYf0Ef5XzTLBWLJjaMBKItF7b7kRoC_iYQAvD_BwE&gclsrc=aw.ds">
							<img src="/images/UberEats.png"></img>
						</a>
					</div>
				</article>
				<div className='additional-info'>
					<h4>
						Additional Information
					</h4>
					<div>
						<ul>
							<li>
								<div className='additional-info-box'>
									<span>
										<img src={`data:image/svg+xml;utf8,${icNeighborhood}`}/>
									</span>
									<div className='additional-info-text'>
										<span>
											Neighborhood
										</span>
										<p>
											{restaurant.neighborhood}
										</p>
									</div>
								</div>
							</li>
							<li>
								<div className='additional-info-box'>
									<span>
										<img src={`data:image/svg+xml;utf8,${icPhone}`}/>
									</span>
									<div className='additional-info-text'>
										<span>
											Phone number
										</span>
										<p>
											{this.parsePhone(restaurant.phone)}
										</p>
									</div>
								</div>
							</li>
							<li>
								<div className='additional-info-box'>
									<span>
										<img src={`data:image/svg+xml;utf8,${icCuisine}`}/>
									</span>
									<div className='additional-info-text'>
										<span>
											Cuisines
										</span>
										<p>
											{(restaurant.cuisines)}
										</p>
									</div>
								</div>
							</li>
							<li>
								<div className='additional-info-box'>
									<span>
										<img src={`data:image/svg+xml;utf8,${icDiningStyle}`}/>
									</span>
									<div className='additional-info-text'>
										<span>
											Dining Style
										</span>
										<p>
											Casual Elegant
											{/* 1-2 casual dining, 3-4 casual elegant */}
											{/* {(restaurant.cuisines)} */}
										</p>
									</div>
								</div>
							</li>
							<li>
								<div className='additional-info-box'>
									<span>
										<img src={`data:image/svg+xml;utf8,${icDressCode}`}/>
									</span>
									<div className='additional-info-text'>
										<span>
											Dress Code 
										</span>
										<p>
											Casual Dress
											{/* casual, business casual, smart casual */}
											{/* {(restaurant.cuisines)} */}
										</p>
									</div>
								</div>
							</li>
							<li>
								<div className='additional-info-box'>
									<span>
										<img src={`data:image/svg+xml;utf8,${icPayment}`}/>
									</span>
									<div className='additional-info-text'>
										<span>
											Payment Options
										</span>
										<p>
											AMEX, Discover, MasterCard, Visa
											{/* casual, business casual, smart casual */}
											{/* {(restaurant.cuisines)} */}
										</p>
									</div>
								</div>
							</li>
							<li>
								<div className='additional-info-box'>
									<span>
										<img src={`data:image/svg+xml;utf8,${icClock}`}/>
									</span>
									<div className='additional-info-text'>
										<span>
											Hours of Operation
										</span>
										<p>
											Mon–Thu 11:30 am–10:00 pm Fri, Sat 11:30 am–11:00 pm Sun 11:30 am–9:00 pm
											{/* casual, business casual, smart casual */}
											{/* {(restaurant.cuisines)} */}
										</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
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
