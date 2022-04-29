import React from 'react';
import { render } from 'react-dom';
// import { useSelector, useDispatch } from 'react-redux';
import SignupFormContainer from "../form/signup_form_container";
import LoginFormContainer from '../form/login_form_container';

class Modal extends React.Component {
	constructor(props) {
		super(props)
	};
	
	// const modal = useSelector(state => state.ui.modal.type);
	// const dispatch = useDispatch();
	
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
			<div>
				{component}
			</div>
		)
	}
}

export default Modal;

