import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import SignupForm from "../form/signup_form_container";
import LoginForm from '../form/login_form_container';
import CancelBookingModal from '../booking/delete';
import GalleryModal from '../restaurant/gallery_modal';
import SearchModal from '../search/search_modal';
import { closeModal } from '../../actions/modal_actions';

const MODALS = {
	signup: { component: SignupForm, maxWidth: 'xs' },
	login: { component: LoginForm, maxWidth: 'xs' },
	cancel: { component: CancelBookingModal, maxWidth: 'xs' },
	search: { component: SearchModal, maxWidth: 'md' },
};

const Modal = () => {
	const dispatch = useDispatch();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const { modal, ...props } = useSelector(state => state.ui.modal);
	const onClose = () => dispatch(closeModal());

	if (modal === 'gallery') {
		return <GalleryModal photos={props.photos} idx={props.idx} onClose={onClose} />;
	}

	const config = MODALS[modal];
	const Component = config?.component;

	return (
		<Dialog open={Boolean(config)} onClose={onClose} fullWidth maxWidth={config?.maxWidth} fullScreen={isMobile}>
			<IconButton onClick={onClose} aria-label="Close" sx={{ position: 'absolute', right: 12, top: 12, zIndex: 1 }}>
				<CloseIcon />
			</IconButton>
			{Component && <Component {...props} onClose={onClose} />}
		</Dialog>
	);
}

export default Modal;
