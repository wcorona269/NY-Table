import React from 'react';
import LeftColumnContainer from './left_col_container';
import RightColumnContainer from './right_col_container';

class RestShow extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchRest(this.props.match.params.restId)
		window.scrollTo(0,0);
	}

	render() {
		if (!this.props.restaurant) return null;
		const {restaurant} = this.props;

		return (
			<>
				<div className="rest-header-container">
					<div className="rest-header-neighborhood">
						{restaurant.neighborhood}
					</div>
					<div className="rest-header-banner-photo">
					</div>
				</div>
				<div className="rest-show-container">
					<LeftColumnContainer/>
					<RightColumnContainer/>
				</div>
			</>
		)
	}
}

export default RestShow;
