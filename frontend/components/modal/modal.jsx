import React from 'react';
import { render } from 'react-dom';
// import { useSelector, useDispatch } from 'react-redux';
import SignupFormContainer from "../form/signup_form_container";
import LoginFormContainer from '../form/login_form_container';

class Modal extends React.Component {
	constructor(props) {
		super(props)

		this.handleModal = this.handleModal.bind(this);
	};
	
	// const modal = useSelector(state => state.ui.modal.type);
	// const dispatch = useDispatch();
	
	handleModal(e) {
		e.preventDefault();
		const bg = document.getElementsByClassName("modal-bg");
		// debugger;
		if (e.currentTarget == bg[0]) {
			this.props.closeModal();
		}
	};

	render() {
		// deconstruct modal from props
		const {modal} = this.props;
		let component;

		// check which modal type to render
		switch (modal) {
			case "signup":
				component = <SignupFormContainer/>
				break;
			case "login":
				component = <LoginFormContainer/>
				break;
			default:
				return null;
		}

		return (
			<div className="modal-bg" onClick={this.handleModal}>
				<div className="modal-guts" onClick={e => e.stopPropagation()}>
				{component}
				</div>
			</div>
		)
	}
}

export default Modal;

