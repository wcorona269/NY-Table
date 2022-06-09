import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { updateUser } from '../../actions/session_actions';
import { icClose } from 'otkit-icons/token.theme.common';

const UserEdit = (props) => {
	const user = Object.values(useSelector(state => state.entities.users));
	let currentUser = user[0];
	
	const [updatedUser, setupdatedUser] = useState({
		id: currentUser.id,
		dname: currentUser.dname,
		fname: currentUser.fname,
		lname: currentUser.lname,
		email: currentUser.email,
		phone: currentUser.phone,
		password: '',
		confirmPassword: ''
	})
	
	const [passError, setPassError] = useState(false);
	const [passEmpty, setPassEmpty] = useState(true);
	const [passLengthInvalid, setPassLengthInvalid] = useState(false);
	const [success, setSuccess] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		if (success) {
			setupdatedUser(updatedUser)
		}
	}, [success])

	useEffect(() => {
		if (updatedUser.password !== updatedUser.confirmPassword) {
			setPassError(true)
		} else {
			setPassError(false)
		}
	}, [updatedUser]);

	useEffect(() => {
		if (updatedUser.password.length !== 0) {
			setPassEmpty(false)
		} else {
			setPassEmpty(true)
		}
	}, [updatedUser])

	useEffect(() => {
		if (updatedUser.password.length < 8 && updatedUser.password.length) {
			setPassLengthInvalid(true)
		} else {
			setPassLengthInvalid(false)
		}
	}, [updatedUser])

	const updateInfo = (e) => {
		const {name, value} = e.target
		setupdatedUser({ ...updatedUser, [name]: value })
		setSuccess(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (updatedUser.password !== updatedUser.confirmPassword) {
			setPassError(true)
		}

		if (!passEmpty && !passLengthInvalid) {
			dispatch(updateUser(updatedUser));
			setSuccess(true);
			setPassError(false);
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
		})
		}
	}

	return (
		<div className='user-edit-container'>
			<div className='user-edit-main'>
				{success && (
				<div id='success-box'>
					<i className="fa-solid fa-circle-check"></i>
					<div>
						Your changes are saved!
					</div>
					<img onClick={() => setSuccess(false)} src={`data:image/svg+xml;utf8,${icClose}`}/>
				</div>
				)}
				<form onSubmit={handleSubmit}>
					<h2>
						About Me
					</h2>
					<div id='user-edit-row'>
						<div id='user-edit-input'>
							<label>
								First Name
							</label>
							<input onChange={updateInfo} defaultValue={currentUser.fname} type='text' name='fname' placeholder='First name'/>
						</div>
						<div id='user-edit-input'>
							<label>
								Last Name
							</label>
							<input onChange={updateInfo} defaultValue={currentUser.lname} type='text' name='lname' placeholder='Last name'/>
						</div>
					</div>
					<div id='user-edit-row'>
						<div id='user-edit-input'>
							<label>
								Display Name
							</label>
							<input onChange={updateInfo} defaultValue={currentUser.dname} type='text' name='dname' placeholder='Display name'/>
							<small>
									This is a name that will be shown whenever you leave a review. Remember to not use your full name or email.	
							</small>
						</div>
					</div>
					<div id='user-edit-row'>
						<div id='user-edit-input'>
							<label>
								Email
							</label>
							<input onChange={updateInfo} defaultValue={currentUser.email} type='text' name='email' placeholder='Email'/>
						</div>
					</div>
					<div id='user-edit-row'>
						<div id='user-edit-input'>
							<label>
								Phone
							</label>
							<input onChange={updateInfo} defaultValue={currentUser.phone} id='small-input' type='text' name='phone' placeholder='Phone'/>
						</div>
					</div>
					<h2>
						Change Password
					</h2>
					<small>
						Please choose a password that is at least 8 characters long.
					</small>
					<div id='user-edit-row'>
						<div id='password-edit-box'>
							<div id='user-edit-input'>
								<label>
									New Password
								</label>
								<input className={(passEmpty || passLengthInvalid) && 'error-input'} onChange={updateInfo} id='small-input' type='password' name='password' placeholder='Password'/>
								{passLengthInvalid && (
									<small id='error-small'>
										Please choose a password that is at least 8 characters long.
									</small>
								)}
								{passEmpty && (
									<small id='error-small'>
										Please enter your password. 
									</small>
								)}
							</div>
						</div>
					</div>
					<div id='user-edit-row'>
						<div id='user-edit-input' className='user-edit-passwords'>
							<label>
								Confirm New Password
							</label>
							<input className={passError && 'error-input'} onChange={updateInfo} id='small-input' type='password' name='confirmPassword' placeholder='Confirm New Password'/>
							{passError && (
							<small id='error-small'>
								Passwords do not match
							</small>
							)}
						</div>
					</div>
					<button type="submit">
						Save Changes
					</button>
				</form>
			</div>
		</div>
	)
}

export default withRouter(UserEdit);