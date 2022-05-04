import React, {useEffect} from 'react';
import { withRouter } from 'react-router-dom';


const ListIcon = ({rest}) => {

		return (
			<>
				<li className="scrollbar-li">
					<button className="li-button">
						<div className="li-button-div">
							{rest}
						</div>
					</button>
				</li>
			</>
		)
}

export default withRouter(ListIcon);

