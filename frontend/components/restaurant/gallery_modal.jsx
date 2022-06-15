import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { icBack, icAdvance } from 'otkit-icons/token.theme.common';
import { closeModal } from '../../actions/modal_actions';

const GalleryModal = ({photos, idx}) => {
	const dispatch = useDispatch();
	const [display, setDisplay] = useState(false)
	const [index, setIndex] = useState(idx)
	const [backBtn, setBackBtn] = useState()
	const [advBtn, setAdvBtn] = useState()

	useEffect(() => {
		photos ? setDisplay(true) : setDisplay(false)
	}, [photos])

	useEffect(() => {
		index == 0 ? setBackBtn(false) : setBackBtn(true)
		index == photos.length -1 ? setAdvBtn(false) : setAdvBtn(true)
	}, [index])

	const handleButtonClick = (e) => {
		e.preventDefault();
		if (e.target.id == 'back' && index > 0) {
			let back = +index - 1
			setIndex(back)
		} else if (e.target.id == 'advance' && index < photos.length - 1) {
			let adv = +index + 1
			setIndex(adv)
		}
	}

	const handleClose = (e) => {
		e.preventDefault();
		if (e.target.id == 'outer-gallery-container') {
			dispatch(closeModal())
		}
	}

	return display && (
		<div id='outer-gallery-container' onClick={handleClose}>
			<div className='gallery-modal-container'>
				<button id='back'>
				{ backBtn &&
					<i
						id='back'
						class="directional-btn fa-solid fa-angle-left"
						onClick={handleButtonClick}
					/>
				}
				</button>
				<img id='modal-img' src={photos[index]}/>

				<button id='advance'>
				{advBtn && 
					<i 
						id='advance' 
						className="directional-btn fa-solid fa-angle-right"
						onClick={handleButtonClick}
					/>
				}
				</button>
			</div>
		</div>
	)
}

export default withRouter(GalleryModal);