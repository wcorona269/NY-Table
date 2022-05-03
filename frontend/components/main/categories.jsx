import React from "react";

class Categories extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<>
			<div className="categories-section-container">
				<section className="categories-section">
					<header className="categories-section-header">
						<div className="categories-section-header-container">
							<h2 className="categories-section-header-text">
								Outdoor dining
							</h2>
						</div>
						<a className="view-all-button">
							View all
						</a>
					</header>
					<div className="outer-scroll-container">
						Hello
						{/* <ListContainer/> */}
					</div>
				</section>
			</div>
		</>
		);
	}
}

export default Categories;

