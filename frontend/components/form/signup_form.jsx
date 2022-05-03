import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { icClose } from 'otkit-icons/token.theme.common';




class SignupForm extends React.Component {
    constructor(props) {
        super(props)

				// this.history = useHistory();
        this.state = {
            phone: '',
            fname: '',
            lname: '',
            email: '',
            dname: '',
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

					// user not bootstrapping on sign-up
					// .then(this.props.login(this.state))
					
					.then(() => dispatch(closeModal()))
    }

    render() {
			return (
				<div className='auth-form-container'>
						<form className="auth-form" onSubmit={this.handleSubmit}>
							<div className="auth-content-container">
								<div className="auth-form-x-btn-wrapper">
									<div onClick={() => dispatch(closeModal())} className="auth-form-x-btn-container">
										<img className="auth-form-x-button-image" src={`data:image/svg+xml;utf8,${icClose}`}/>
									</div>
								</div>
							<div className="auth-content-header">Sign Up</div>
								{/* <br/> */}
								<div className="auth-content-sub-header">Fill out required fields to continue.</div>
								<input className="auth-field"
									type="tel"
									placeholder="Phone number"
									maxLength="12"
									value={this.state.phone}
									onChange={this.handleInput('phone')}
										/>
										<br />
								<input className="auth-field"
									type="text"
									placeholder="First name"
									value={this.state.fname}
									onChange={this.handleInput('fname')}
								/>
								<br />
								<input className="auth-field"
									type="text"
									placeholder="Last name"
									value={this.state.lname}
									onChange={this.handleInput('lname')}
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
									value={this.state.dname}
									onChange={this.handleInput('dname')}
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
								<button id="auth-button" className="auth-field" type="submit">Continue</button>
							</div>
						</form>
					</div>
        )
    }
}

export default SignupForm;