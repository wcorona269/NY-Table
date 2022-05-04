import React from 'react';
import { withRouter } from 'react-router-dom';

const CatList = ({title}) => {
	
	return (
		<>
			<div className="categories-section-container">
				<section className="categories-section">
					<header className="categories-section-header">
						<div className="categories-section-header-container">
							<h2 className="categories-section-header-text">
								{title}
							</h2>
						</div>
						<a className="view-all-button">
							View all
						</a>
					</header>
					<div className="outer-scroll-container">
					</div>
				</section>
			</div>
		</>
	)
}

export default withRouter(CatList);