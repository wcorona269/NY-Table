import React from 'react';
import { render } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import SignupFormContainer from "../form/signup_form_container";

class Modal extends React.Component {
	constructor(props) {
		super(props)
	};
	
	// const modal = useSelector(state => state.ui.modal.type);
	// const dispatch = useDispatch();
	
	render() {
		const {modal} = this.props;
		let component;

		switch (modal) {
			case "signup":
				component = <SignupFormContainer/>
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

