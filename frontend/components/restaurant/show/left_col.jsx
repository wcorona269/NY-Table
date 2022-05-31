import React from 'react';
import { icCuisine } from 'otkit-icons/token.theme.common';
import { icPriceRange } from 'otkit-icons/token.theme.common';
import { icClock, icReview, icPhone, icNeighborhood, icDiningStyle, icDressCode, icPayment } from 'otkit-icons/token.theme.common';
import { DynamicStar } from 'react-dynamic-star';
import Gallery from '../show/gallery';
import Menu from '../show/menu';
import ReviewsContainer from '../reviews_container';

class LeftColumn extends React.Component {
	constructor(props) {
		super(props);

		this.priceRangeText = this.priceRangeText.bind(this);
		this.reviewCount = this.reviewCount.bind(this);
		this.rating = this.rating.bind(this);

			this.state = {
				readMore: false,
		};

		this.readMore = this.readMore.bind(this);
	}

	componentDidMount() {
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

	readMore() {
		// console.log(this.state);
		let ele = document.getElementById("description");
		let btn = document.getElementById('read-more');

		if (this.state.readMore) {
			ele.style.height = "4.9rem";
			btn.value = "+ Read more";
		 } else {
			ele.style.height = "fit-content"
			btn.value = "- Read less";
		 }

		 this.state.readMore = !this.state.readMore;
	}

	handleScroll(e) {
		let key = e.target.id;
		let selected = document.getElementById(`${key}-id`);
		let yOffset = -75;

		let y = selected.getBoundingClientRect().top + window.pageYOffset + yOffset;

		console.log(y);
		// console.log(selected);
		window.scrollTo({
			top: y,
			behavior: "smooth"
		})


		// window.scrollIntoView

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
			<div className="rest-show-main-col">
				<section className='rest-info-nav-buttons' id='nav'>
					<nav>
						<ol>
							<li id='overview' className='current-section' onClick={this.handleScroll}>
								Overview
							</li>
							<li id='photos' onClick={this.handleScroll} >
								Photos
							</li>
							<li id='menu' onClick={this.handleScroll} >
								Menu
							</li>
							<li id='reviews' onClick={this.handleScroll} >
								Reviews
							</li>
						</ol>
					</nav>
				</section>
				<section className='main-show-col-details'>
					<header className="main-show-col-header" id='overview-id'>
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
					<div id='description' className="rest-show-description">
						{restaurant.description}
						<br></br>
					</div>
						<input value="+ Read more" type="button" id='read-more' onClick={this.readMore}/>
				</section>
				<Gallery/>
				<Menu/>
				<ReviewsContainer/>
			</div>
		)
	}
}

export default LeftColumn;
