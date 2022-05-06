import React from 'react';

class RestShow extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// this.props.fetchRest(this.props.restaurant.id)
	}

	render() {
		const {restaurant} = this.props;

		const display = restaurant ? (
			<div className="rest-show-container">
				{restaurant}
			</div>
		) : (
			<div className="rest-show-container">
				Hello
			</div>
		)
	}
}

export default RestShow;
