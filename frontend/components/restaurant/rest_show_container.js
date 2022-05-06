import { connect } from "react-redux";
import RestShow from "./rest_show";
import { fetchRest } from "../../actions/rest_actions";

const mSTP = (state, ownProps) => ({
	// restaurant: state.entities.restaurants[ownProps.match.params.restId],
})

const mDTP = dispatch => ({
	fetchRest: id => dispatch(fetchRest(id)),
})

const RestShowContainer = connect(mSTP, mDTP)(RestShow);
export default RestShowContainer;