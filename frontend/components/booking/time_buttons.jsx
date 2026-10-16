import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { showModal } from '../../actions/modal_actions';
import { addMinutes, formatTime } from '../../util/format';

export const bookingUrl = (restId, { date, time, party }) => (
	`/book/${restId}?${new URLSearchParams({ date, time, party }).toString()}`
);

// Five bookable slots around the requested time, 15 minutes apart.
const TimeButtons = ({ restId, date, time, party, size = 'small' }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const loggedIn = useSelector(state => Boolean(state.session.id));
	const slots = [-30, -15, 0, 15, 30].map(offset => addMinutes(time, offset));
	const unique = [...new Set(slots)];

	const handleClick = (e, slot) => {
		e.preventDefault();
		e.stopPropagation();
		if (!loggedIn) {
			dispatch(showModal('login'));
			return;
		}
		history.push(bookingUrl(restId, { date, time: slot, party }));
	};

	return (
		<Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
			{unique.map(slot => (
				<Button
					key={slot}
					size={size}
					variant={slot === time ? 'contained' : 'outlined'}
					color="primary"
					onClick={(e) => handleClick(e, slot)}
					sx={{ px: 1.5, minWidth: 88 }}
				>
					{formatTime(slot)}
				</Button>
			))}
		</Stack>
	);
};

export default TimeButtons;
