import React from 'react';
import { logout } from "../../actions/session_actions"
import { useDispatch } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

const UserNavBar = (props) =>	{
	let dispatch = useDispatch();

	handleModal = () => {
		dispatch(logout);
	}

	return (
		<div className='right-navbar'>
			<button onClick={handleModal}>Sign Out</button>
		</div>
	)
};

export default UserNavBar;

