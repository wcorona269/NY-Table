import React from 'react';
import { withRouter } from 'react-router-dom';

const StarIcon = ({rating}) => {

		if (rating === 1) {
			return (
				<>
					<span className="red-star-span"><i id="red-star" class="fa-regular fa-star"></i></span>
					<span><i class="fa-regular fa-star"></i></span>
					<span><i class="fa-regular fa-star"></i></span>
					<span><i class="fa-regular fa-star"></i></span>
					<span><i class="fa-regular fa-star"></i></span>
				</>
			)} else if (rating === 2) {
				return (
					<>
					<span className="red-star-span"><i id="red-star" class="fa-regular fa-star"></i></span>
					<span className="red-star-span"><i id="red-star" class="fa-regular fa-star"></i></span>
					<span><i class="fa-regular fa-star"></i></span>
					<span><i class="fa-regular fa-star"></i></span>
					<span><i class="fa-regular fa-star"></i></span>
				</>
			)} else if (rating === 3) {
				return (
					<>
						<span className="red-star-span"><i id="red-star" class="fa-regular fa-star"></i></span>
						<span className="red-star-span"><i id="red-star" class="fa-regular fa-star"></i></span>
						<span className="red-star-span"><i id="red-star" class="fa-regular fa-star"></i></span>
						<span><i class="fa-regular fa-star"></i></span>
						<span><i class="fa-regular fa-star"></i></span>
					</>
				)} else if (rating === 4) {
					return (
						<>
							<span className="red-star-span"><i id="red-star" class="fa-regular fa-star"></i></span>
							<span className="red-star-span"><i id="red-star" class="fa-regular fa-star"></i></span>
							<span className="red-star-span"><i id="red-star" class="fa-regular fa-star"></i></span>
							<span className="red-star-span"><i id="red-star" class="fa-regular fa-star"></i></span>
							<span><i class="icon-star-empty"></i></span>
					</>
					)} else {
						return (
							<>
								<i class="fa-regular fa-star"></i>
							<span className="red-star-span"><i class="fa-regular fa-star"></i></span>
							<span className="red-star-span"><i class="fa-regular fa-star"></i></span>
							<span className="red-star-span"><i class="fa-regular fa-star"></i></span>
							<span className="red-star-span"><i class="fa-regular fa-star"></i></span>
							 {/* <i class="icon-star-empty"></i> */}

							</>
				)
		}
}


export default withRouter(StarIcon);