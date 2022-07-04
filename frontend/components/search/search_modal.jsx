import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, Link, withRouter } from 'react-router-dom';
import SearchBar from './searchbar';
import { closeModal } from '../../actions/modal_actions';
import { icClose } from 'otkit-icons/token.theme.common';

const SearchModal = () => {

	const dispatch = useDispatch()

	return (
		<div className='search-modal-container'>
			<button onClick={() => dispatch(closeModal())}>
				<img className="auth-form-x-button-image" src={`data:image/svg+xml;utf8,${icClose}`}/>
			</button>
			<h1 className="searchbar-header" id='search-modal-header'>
				Find your table for a<span className="red-searchbar-header-text">ny</span> occasion
			</h1>
			<SearchBar/>
		</div>
	)
}

export default withRouter(SearchModal);