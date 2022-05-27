import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Menu = (props) => {

	const food = [
		{
			title: "glizzyyyy",
			price: 100.09,
			details: "glicked up"
		},
		{
			title: "Coke",
			price: 1.00,
			details: "The famous soda is a favorite at our restaurant. Make sure to have it with the burger!"
		},
		{
			title: "Burger",
			price: 10.99,
			details: "the best burger ever. and in New York, that's saying a lot"
		},
		{
			title: "Hot Dog",
			price: 8.00,
			details: "the best dog ever. This delicious dirty water dog is a new york classic!"
		},
		{
			title: "Fries",
			price: 3.00,
			details: "Better than McDonalds! And i really love it there. I mean they have the best fries ever"
		}
	]

	const menuList = (stuff) => {
		return stuff.map((item, idx) => 
			<li key={idx}>
					<h4>
						<span>{item.title}</span>
						<span>${item.price}</span>
					</h4>
					<p>
						{item.details}
					</p>
				</li>
		)
	}

	return (
		<section className='menu-container'>
			<header className='menu-header'>
				<div>
					<h2>
						Menu
					</h2>
				</div>
			</header>
			<article className='menu'>
				<ul>
					{menuList(food)}
				</ul>
			</article>
		</section>
	)
}

export default withRouter(Menu);

