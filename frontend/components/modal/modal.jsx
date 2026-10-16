import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignupFormContainer from "../form/signup_form_container";
import LoginFormContainer from '../form/login_form_container';
import CancelBookingModal from '../booking/delete';
import GalleryModal from '../restaurant/gallery_modal';
import SearchModal from '../search/search_modal';
import { closeModal } from '../../actions/modal_actions';

const Modal = () => {
	const dispatch = useDispatch();
	const modal = useSelector(state => state.ui.modal);

	const handleModal = (e) => {
		e.preventDefault();
		dispatch(closeModal());
	};

	let component;

	switch (modal.modal) {
		case "signup":
			component = <SignupFormContainer/>
			break;
		case "login":
			component = <LoginFormContainer/>
			break;
		case "cancel":
			component = <CancelBookingModal/>
			break;
		case "gallery":
			component = <GalleryModal photos={modal.photos} idx={modal.idx}/>
			break;
		case "search":
			component = <SearchModal/>
			break;
		default:
			return null;
	}

	return (
		<div className="modal-bg" onClick={handleModal}>
			<div className="modal-guts" onClick={e => e.stopPropagation()}>
				{component}
			</div>
		</div>
	)
}

export default Modal;
