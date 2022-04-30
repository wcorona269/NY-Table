import {closeModal} from '../../actions/modal_actions';
import { connect } from 'react-redux';
import Modal from './modal';

const MSTP = state => ({
	modal: state.ui.modal
});

const MDTP = dispatch => ({
	closeModal: () => dispatch(closeModal())
});

const ModalContainer = connect(MSTP, MDTP)(Modal);
export default ModalContainer;

