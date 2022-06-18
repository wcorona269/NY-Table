import { connect } from "react-redux";
import RestShow from "./rest_show";
import { fetchRest } from "../../actions/rest_actions";
import { fetchAllFavs } from "../../actions/favorite_actions";

const mSTP = (state, ownProps) => ({
	restaurant: state.entities.rests[ownProps.match.params.restId],
	favorites: state.entities.favorites.favoritesAll,
	user: state.session.id
})

const mDTP = dispatch => ({
	fetchRest: id => dispatch(fetchRest(id)),
	fetchAllFavs: () => dispatch(fetchAllFavs())
})

const RestShowContainer = connect(mSTP, mDTP)(RestShow);
export default RestShowContainer;

