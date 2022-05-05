import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import { icSocialProof } from 'otkit-icons/token.theme.common';
import StarIcon from "./star_icon";

const ListIcon = ({name, cuisines, neighborhood, price_range, icon, rating}) => {
	
	const priceRange = (num) => {
		// debugger;
		if (num === 1) {
			return	<span><span className="red-dollar">$</span><span className="gray-dollar">$$$</span></span>
		} else if (num === 2) {
			return	<span><span className="red-dollar">$$</span><span className="gray-dollar">$$</span></span>
		} else if (num === 3) {
			return	<span><span className="red-dollar">$$$</span><span className="gray-dollar">$</span></span>
		} else {
			return	<span><span className="red-dollar">$$$$</span></span>
		}
	}

	return (
		<li className="scrollbar-li">
			<button className="li-button">
				<div className="li-button-div">
					{/* <img src="" /> */}
					<div className="img-placeholder">
						<img id="splash-rest-icon" src={icon} alt="" />
					</div>
					<div className="li-button-rest-info">
						<h3 className="li-button-rest-title">
							{name}
						</h3>
						<div className="li-button-ratings-div">
							<StarIcon rating={rating} />
						</div>
						<div className="li-button-info-div">
							{cuisines}
							<span id="dot">&#8226;</span>
							{priceRange(price_range)}
							<span id="dot">&#8226;</span>
							{neighborhood}
							</div>
						<div className="li-button-today-div">
							<img 
								className="scrollbar-booking-count"
								src={`data:image/svg+xml;utf8,${icSocialProof}`}
							/>
							Booked {Math.floor(Math.random() * (199 - 50) + 50)} times today
						</div>
						<div className="li-button-reserve-div">Reserve</div>
					</div>
				</div>
			</button>
		</li>
	)
}

export default withRouter(ListIcon);

