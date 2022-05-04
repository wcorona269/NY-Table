import React from 'react';
import {withRouter} from 'react-router-dom';
import ListIcon from './list_icon';

class ScrollBar extends React.Component {
	constructor(props) {
		super(props)

	}
	
	render () {
		// const rests = this.props.fetchRests();
		const rests = ["peter luger", "patsy's pizza", "chipotle", "sweetgreen", "mcdonalds"]
		// debugger;
		return (
			<ul className="scrollbar-ul">
				{rests.map((rest, idx) => <ListIcon rest={rest} />)}
			</ul>
		)
	}
}

export default (ScrollBar);



