import React from 'react';
import { render } from 'react-dom';
// import { useSelector, useDispatch } from 'react-redux';
import SignupFormContainer from "../form/signup_form_container";
import LoginFormContainer from '../form/login_form_container';
import CancelBookingModal from '../booking/delete';
import GalleryModal from '../restaurant/gallery_modal';
import SearchModal from '../search/search_modal';
import { closeModal } from '../../actions/modal_actions';
import { icClose } from 'otkit-icons/token.theme.common';

class Modal extends React.Component {
	constructor(props) {
		super(props)

		this.handleModal = this.handleModal.bind(this);
	};
	
	// const modal = useSelector(state => state.ui.modal.type);
	// const dispatch = useDispatch();
	
	handleModal(e) {
		e.preventDefault();
		this.props.closeModal();
	};

	render() {
		// deconstruct modal from props
		const {modal} = this.props;
		let component;

		// check which modal type to render
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
				const photos = modal.photos
				const idx = modal.idx
				component = <GalleryModal photos={photos} idx={idx}/>
				break;
			case "search":
				component = <SearchModal/>
				break;
			// case "review"
			// component = <ReviewFormModal/>
			default:
				return null;
		}

		return (
			<div className="modal-bg" onClick={this.handleModal}>
				<div className="modal-guts" onClick={e => e.stopPropagation()}>
						{/* <img className="auth-form-x-btn-img" src={`data:image/svg+xml;utf8,${icClose}`}/> */}
					{component}
				</div>
			</div>
		)
	}
}

export default Modal;

