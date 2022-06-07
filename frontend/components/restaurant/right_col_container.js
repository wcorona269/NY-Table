import { connect } from "react-redux";
import RightColumn from "./right_col";
import { fetchRest } from "../../actions/rest_actions";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => ({
	restaurant: state.entities.rests[ownProps.match.params.restId],
	currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
	fetchRest: id => dispatch(fetchRest(id)),
})

const RightColumnContainer = connect(mSTP, mDTP)(RightColumn);
export default withRouter(RightColumnContainer);