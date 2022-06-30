import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, withRouter, useParams } from 'react-router-dom';
import { icCalendar, icPerson, icClock, icDown, icSearch } from 'otkit-icons/token.theme.common';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SearchBar = () => {

	const history = useHistory();

	var criteria = Object.values(useSelector(state => (state.entities.rests))).flatMap(el => [el.cuisines, el.name, el.neighborhood])
	var lowerCriteria = Object.values(useSelector(state => (state.entities.rests))).flatMap(el => [el.cuisines.toLowerCase(), el.name.toLowerCase(), el.neighborhood.toLowerCase()])

	const inputRef = useRef();
	const [date, setDate] = useState(new Date())
	const [input, setInput] = useState('')
	const [suggestion, setSuggestion] = useState(false);
	const [matches, setMatches] = useState([])
	const [search, setSearch] = useState({
		text: input,
		time: '12:00',
		party: 2,
		date: new Date()
	})

	useEffect(() => {
		setSearch({ ...search, date: date })
	}, [date])

	const updateInfo = (e) => {
		setSearch({ ...search, [e.target.id]: e.target.value })
	}

	const updateDate = (e) => {
		setDate(e)
	}

	const parseDate = (date) => {
		date = date.toDateString();
		let split = date.split(' ');
		return `${split[0]}, ${split[1]} ${split[2]}`
	}

	const shuffle = (array) => {
		let currentIndex = array.length,  randomIndex;
	
		while (currentIndex != 0) {
	
			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;
	
			// And swap it with the current element.
			[array[currentIndex], array[randomIndex]] = [
				array[randomIndex], array[currentIndex]];
		}
	
		return array;
	}

	const updateSearchParams = (e) => {
		e.preventDefault();
		setInput(e.target.value)
		let filtered = lowerCriteria.filter(ele => ele.includes(e.target.value.toLowerCase()))
		let unique = filtered.filter((v, i, a) => a.indexOf(v) === i)

		if (filtered.length && e.target.value.length) {
			setSuggestion(true);
			setMatches(unique.slice(0, 4))
		}	 else {
			setSuggestion(false)
		}
	}

	const handleSuggestionClick = (e) => {
		e.preventDefault()
		inputRef.current.value = e.target.innerText
		setInput(e.target.innerText)
		setSuggestion(false)
	}
	
	const handleSearch = (e) => {
		return input.length ? (
			history.push({
				pathname: `/search/${input}/${search.time}/${search.party}/${search.date}`
			}),
			window.location.reload()
		) : (null)

	}

	return (
		<div>
			<div>
				<div id='mod-left'>
					<div>
						<img src={`data:image/svg+xml;utf8,${icCalendar}`}/>
						<DatePicker
							id='date'
							className="res-update-select"
							dateFormat="MM-dd-yy"
							minDate={new Date()}
							selected={date}
							onChange={updateDate}
						/>
						<img id='dropdown-img' src={`data:image/svg+xml;utf8,${icDown}`}/>
					</div>
					<div>
						<img src={`data:image/svg+xml;utf8,${icClock}`}/>
						<select defaultValue='12:00' id='time' className='res-update-select' onChange={updateInfo}>
							<option value='11:00'>11:00 AM</option>
							<option value='11:30'>11:30 AM</option>
							<option value='12:00'>12:00 PM</option>
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
						<img id='dropdown-img' src={`data:image/svg+xml;utf8,${icDown}`}/>
					</div>
					<div>
						<img src={`data:image/svg+xml;utf8,${icPerson}`}/>
						<select defaultValue='2' id='party-size' className='res-update-select' onChange={updateInfo}>
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
						<img id='dropdown-img' src={`data:image/svg+xml;utf8,${icDown}`}/>
					</div>
					{/* <button id='update-button'>
						Find a new table
					</button> */}
				</div>
			</div>
			<div id='search-right'>
				<div className='search-input-container'>
					<div>
						<img id='dropdown-img' src={`data:image/svg+xml;utf8,${icSearch}`}/>
						<input ref={inputRef} type='text' placeholder='Location, Restaurant, or Cuisine' onChange={updateSearchParams}/>
					</div>
					{suggestion && 
					<div id='suggestions-dropdown' onMouseLeave={() => setSuggestion(false)} >
						<ul>
							{shuffle(matches).map((ele, idx) => 
							<li key={idx} onClick={handleSuggestionClick}>
								{ele}
							</li>)}
						</ul>
					</div>
					}
				</div>
				<button onClick={handleSearch}>
					Let's Go
				</button>
			</div>
		</div>
	)
}

export default withRouter(SearchBar)