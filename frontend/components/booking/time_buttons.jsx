import React, { useState, useEffect }from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation, useParams, withRouter } from 'react-router-dom';

const TimeButtons = (props) => {
	const {time} = props;
	let newTime
	let split = time.split(":")
	let hrs = parseInt(split[0])
	if (hrs < 12) newTime = time + ' AM';
	if (hrs == 12) newTime = time + ' PM'
	if (hrs > 12) {
		hrs = hrs % 12;
		newTime = hrs + ':' + split[1] + ' PM'
	}

	const [afternoon, setAfternoon] = useState(false)
	const dispatch = useDispatch;
	const history = useHistory();
	const location = useLocation();
	const params = useParams();
	
	let h = parseInt(newTime.split(' ')[0].split(':')[0])
	let m = parseInt(newTime.split(' ')[0].split(':')[1])
	let amPm = newTime.split(' ')[1]

	let btn1;
	let btn2;
	let btn3;
	let btn4;
	let btn5;

	if (m == 0) {
		btn1 = `${h.toString()}:00 ${amPm}`;
		m = m + 15
		btn2 = `${h.toString()}:${m.toString()} ${amPm}`
		m += 15
		btn3 = `${h.toString()}:${m.toString()} ${amPm}`
		m += 15
		btn4 = `${h.toString()}:${m.toString()} ${amPm}`
		h < 12 ? (h += 1) : (h -= 11);
		btn5 = `${h.toString()}:00 ${amPm}`
	} else if (m == 15) {
		btn1 = `${h.toString()}:${m.toString()} ${amPm}`;
		m += 15
		btn2 = `${h.toString()}:${m.toString()} ${amPm}`;
		m += 15
		btn3 = `${h.toString()}:${m.toString()} ${amPm}`;
		h < 12 ? (h += 1) : (h -= 11);
		btn4 = `${h.toString()}:00 ${amPm}`;
		btn5 = `${h.toString()}:15 ${amPm}`;
	} else if (m == 30) {
		btn1 = `${h.toString()}:${m.toString()} ${amPm}`;
		m += 15
		btn2 = `${h.toString()}:${m.toString()} ${amPm}`;
		h < 12 ? (h += 1) : (h -= 11);
		btn3 = `${h.toString()}:00 ${amPm}`;
		btn4 = `${h.toString()}:15 ${amPm}`;
		btn5 = `${h.toString()}:30 ${amPm}`;
	} else if (m == 45) {		
		btn1 = `${h.toString()}:${m.toString()} ${amPm}`;
		h < 12 ? (h += 1) : (h -= 11);
		btn2 = `${h.toString()}:00 ${amPm}`;
		btn3 = `${h.toString()}:15 ${amPm}`;
		btn4 = `${h.toString()}:30 ${amPm}`;
		btn5 = `${h.toString()}:45 ${amPm}`;
	}

	return (
		<div className='buttons-container'>
			<ul>
				<li>
					<button>
						{btn1}
					</button>
				</li>
				<li>
					<button>
						{btn2}
					</button>
				</li>
				<li>
					<button>
						{btn3} 
					</button>
				</li>
				<li>
					<button>
						{btn4}
					</button>
				</li>
				<li>
					<button>
						{btn5}
					</button>
				</li>
			</ul>
		</div>
	)
}

export default withRouter(TimeButtons)