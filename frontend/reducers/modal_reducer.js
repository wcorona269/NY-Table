import {SHOW_MODAL, CLOSE_MODAL, SHOW_GALLERY} from '../actions/modal_actions';

const modalReducer = (oldState = {}, action) => {
	Object.freeze(oldState);

	switch(action.type) {
		case SHOW_MODAL:
			return { modal: action.modal, ...action.props }
		case SHOW_GALLERY:
			return { modal: action.modal, photos: action.photos, idx: action.idx }
		case CLOSE_MODAL:
			return {};
		default:
			return oldState;
	}
}

export default modalReducer;
