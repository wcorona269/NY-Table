import React from "react";

class SignupForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            phone_number: '',
            first_name: '',
            last_name: '',
            email: '',
            username: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return (e) => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
					.then( () => this.props.history.push('/'));
			
    }

    render() {
			return (
				<div className='auth-form'>
					<form className="session_form" onSubmit={this.handleSubmit}>
						<h2>Sign Up</h2>
						<div className="auth-border">
							<input className="auth-field"
								type="tel"
								placeholder="Phone number"
								maxLength="12"
								value={this.state.phone_number}
								onChange={this.handleInput('phone_number')}
									/>
									<br />
							<input className="auth-field"
								type="text"
								placeholder="First name"
								value={this.state.first_name}
								onChange={this.handleInput('first_name')}
							/>
							<br />
							<input className="auth-field"
								type="text"
								placeholder="Last name"
								value={this.state.last_name}
								onChange={this.handleInput('last_name')}
							/>
							<br />
							<input className="auth-field"
								type="text"
								placeholder="Email"
								value={this.state.email}
								onChange={this.handleInput('email')}
							/>
							<br />
							<input className="auth-field"
								type="text"
								placeholder="Review display name"
								value={this.state.username}
								onChange={this.handleInput('username')}
							/>
							<br />
							<small className="form-small">
								This is a name that will be shown whenever you leave a review. Remember to not use your full name or email.	
							</small>
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

export default SignupForm;