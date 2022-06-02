import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { clearMenuItems } from '../../actions/menu_item_actions';

const Menu = ({menuItems}) => {
	const dispatch = useDispatch();

	useEffect(() => {
		return () => {
			dispatch(clearMenuItems())
		}
	}, [menuItems])

	const menuList = (items) => {
		return items.map((item, idx) => 
			<li key={idx}>
				<h4>
					<span>{item.item[0]}</span>
					<span>${item.item[2]}</span>
				</h4>
				<p>
					{item.item[1]}
				</p>
			</li>
		)
	}

	return (
		<section className='menu-container' id='menu-id'>
			<header className='menu-header'>
				<div>
					<h2>
						Menu
					</h2>
				</div>
			</header>
			<article className='menu'>
				<ul>
					{menuList(menuItems)}
				</ul>
			</article>
		</section>
	)
}

export default withRouter(Menu);

