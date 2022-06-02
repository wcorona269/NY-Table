import { connect } from "react-redux";
import RestShow from "./rest_show";
import { fetchRest } from "../../actions/rest_actions";
import { clearMenuItems } from "../../actions/menu_item_actions";

const mSTP = (state, ownProps) => ({
	restaurant: state.entities.rests[ownProps.match.params.restId],
})

const mDTP = dispatch => ({
	fetchRest: id => dispatch(fetchRest(id)),
	clearMenuItems: () => dispatch(clearMenuItems)
})

const RestShowContainer = connect(mSTP, mDTP)(RestShow);
export default RestShowContainer;