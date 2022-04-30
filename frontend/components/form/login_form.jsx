import React from "react";
import { closeModal } from "../../actions/modal_actions";

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
				
        this.state = {
            email: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return (e) => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
					.then(() => dispatch(closeModal()))
    }

    render() {
			return (
					<div className='auth-form-container'>
						<form className="auth-form" onSubmit={this.handleSubmit}>
							<div className="auth-content-container">
								<div className="auth-content-header">Enter your email</div>
								{/* <br/> */}
								<div className="auth-content-sub-header">We'll need to verify it's you to continue.</div>
								<input className="auth-field"
									type="text"
									placeholder="Email"
									value={this.state.email}
									onChange={this.handleInput('email')}
								/>
								
								<br />
								<input className="auth-field"
									type="password"
									placeholder="Password"
									value={this.state.password}
									onChange={this.handleInput('password')}
								/>
								<br />
								<button id="auth-button" className="auth-field" type="submit">Continue</button>
							</div>
						</form>
					</div>
        )
    }
}

export default LoginForm;

