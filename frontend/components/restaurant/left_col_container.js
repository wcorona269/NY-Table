import { connect } from "react-redux";
import LeftColumn from "./left_col";
import { fetchRest } from "../../actions/rest_actions";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => ({
	restaurant: state.entities.rests[ownProps.match.params.restId],
	reviews: state.entities.rests[ownProps.match.params.restId].reviews,
	menu_items: state.entities.rests[ownProps.match.params.restId].menu_items
})

const mDTP = dispatch => {
	return {
		fetchRest: id => dispatch(fetchRest(id)),
	}
}

const LeftColumnContainer = connect(mSTP, mDTP)(LeftColumn);
export default withRouter(LeftColumnContainer);
