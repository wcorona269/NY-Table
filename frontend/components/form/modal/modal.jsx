import React from 'react';
import SignupFormContainer from "../signup_container";


class Modal extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {modal} = this.props;

		if (!modal) {
			return null;
		};

		let component = SignupFormContainer;

		return (
			<div className="form-background" onClick={this.enableScrolling}>
				<div className="modal-child" onClick={e => e.stopPropagation()}>
					{ component }
				</div>
			</div>
		);
	}
}

export default Modal;