import React from 'react';
import { icMap, icClock, icPhone, icNeighborhood, icDiningStyle, icDressCode, icPayment, icCuisine } from 'otkit-icons/token.theme.common';


const AdditionalInfo = ({restaurant}) => {

	const parsePhone = (phone) => {
		let str = phone.toString();
		return `(${str.slice(0, 3)}) ${str.slice(3,6)}-${str.slice(6,10)}`
	}

	const DiningStyleAndDressCode = (rest) => {
		return rest.price_range <= 2 ? (
			<>
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
								Casual Dining
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
			</>
		) : rest.price_range == 3 ? (
			<>
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
								Business Casual
								{/* casual, business casual, smart casual */}
								{/* {(restaurant.cuisines)} */}
							</p>
						</div>
					</div>
				</li>
			</>
		) : (
			<>
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
								Fine Dining
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
								Smart Casual
								{/* casual, business casual, smart casual */}
								{/* {(restaurant.cuisines)} */}
							</p>
						</div>
					</div>
				</li>
			</>
		)
	}

	const PaymentOptions = (rest) => {

		return rest.price_range == 1 ? (
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
							Cash Only
						</p>
					</div>
				</div>
			</li>
		) : rest.name == "Peter Luger Steak House" ? (
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
							Cash, Check or Debit Card
						</p>
					</div>
				</div>
			</li>
		) : (
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
						</p>
					</div>
				</div>
			</li>
		)
	}

	return (
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
									{parsePhone(restaurant.phone)}
								</p>
							</div>
						</div>
					</li>
					<li>
						<div className='additional-info-box'>
							<span>
								<img src={`data:image/svg+xml;utf8,${icMap}`}/>
							</span>
							<div className='additional-info-text'>
								<span>
									Address
								</span>
								<p>
									{restaurant.address}
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
					{DiningStyleAndDressCode(restaurant)}
					{PaymentOptions(restaurant)}
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
								</p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	)

}

export default AdditionalInfo;