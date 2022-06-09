import React from 'react';
import Map from './map';
import { icPhone, icDown } from 'otkit-icons/token.theme.common';
import AdditionalInfo from './additional_info';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";

class RightColumn extends React.Component {
	constructor(props) {
		super(props);

		this.state={
			date: new Date(),
			time: "12:00",
			party: 2
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.updateTime = this.updateTime.bind(this);
		this.updateDate = this.updateDate.bind(this);
		this.updateParty = this.updateParty.bind(this);
	}

	componentDidMount() {
		this.props.fetchRest(this.props.match.params.restId)
		window.scrollTo(0,0);
	}

	updateDate(d) {
		this.setState({date: d});
	}

	updateTime(e) {
		e.preventDefault();
		this.setState({time: e.target.value})
	}
	
	updateParty(e) {
		e.preventDefault();
		this.setState({party: e.target.value})
	}

	parsePhone(phone) {
		let str = phone.toString();
		return `(${str.slice(0, 3)}) ${str.slice(3,6)}-${str.slice(6,10)}`
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.history.push({
			pathname: `/booking/`,
			state: {
				restaurant: this.props.restaurant,
				date: this.state.date,
				time: this.state.time,
				party: this.state.party,
				currentUser: this.props.currentUser
			}
		})
	}

	render() {
		if (!this.props.restaurant) return null;
		const {restaurant} = this.props;

		return (
			<div className="rest-show-res-col">
				<div className="reservations-box" id='res-box'>
					<header className="sidebar-show-col-header">
						Make a reservation
					</header>
					<form className="reservations-container">
						<div className="rest-show-res-grid">
							<div className="party-size">
								<label id='res-label'>
									Party Size
								</label>
									<select className='res-select' placeholder='2 people' onChange={this.updateParty}>
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
									<DatePicker 
										id='res-select-datepicker'
										className="res-select"
										dateFormat="MM-dd-yy"
										minDate={new Date()}
										selected={this.state.date} 
										onChange={this.updateDate}
										/>
							</div>
							<div className="res-time">
								<label id='res-label'>
									Time
								</label>
								<select className='res-select' onChange={this.updateTime}>
									<option value='11;00'>11:00 AM</option>
									<option value='11:30'>11:30 AM</option>
									<option selected defaultValue value='12:00'>12:00 PM</option>
									<option value='12:30'>12:30 PM</option>
									<option value='13:00'>1:00 PM</option>
									<option value='13:30'>1:30 PM</option>
									<option value='14:00'>2:00 PM</option>
									<option value='14:30'>2:30 PM</option>
									<option value='15:00'>3:00 PM</option>
									<option value='15:30'>3:30 PM</option>
									<option value='16:00'>4:00 PM</option>
									<option value='16:30'>4:30 PM</option>
									<option value='17:00'>5:00 PM</option>
									<option value='17:30'>5:30 PM</option>
									<option value='18:00'>6:00 PM</option>
									<option value='18:30'>6:30 PM</option>
									<option value='19:00'>7:00 PM</option>
									<option value='19:30'>7:30 PM</option>
									<option value='20:00'>8:00 PM</option>
									<option value='20:30'>8:30 PM</option>
									<option value='21:00'>9:00 PM</option>
									<option value='21:30'>9:30 PM</option>
									<option value='22:00'>10:00 PM</option>
									<option value='22:30'>10:30 PM</option>
									<option value='23:00'>11:00 PM</option>
								</select>
							</div>
							<div className="res-submit">
									<button id='auth-button' onClick={this.handleSubmit}>
										Find a time
									</button>
								{/* </Link > */}
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
				<Map restaurant={restaurant}/>
				<AdditionalInfo restaurant={restaurant}/>
			</div>
		)
	}
}

export default RightColumn;
