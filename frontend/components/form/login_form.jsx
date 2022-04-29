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
				<div className='auth-form'>
					<form className="session_form" onSubmit={this.handleSubmit}>
						<h2>Sign In</h2>
						<div className="auth-border">
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
							<button className="auth-button" type="submit">Continue</button>
						</div>
					</form>
				</div>
        )
    }
}

export default LoginForm;