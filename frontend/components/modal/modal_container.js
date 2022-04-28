import {closeModal} from '../../actions/modal_actions';
import { connect } from 'react-redux';
import Modal from './modal';


const MSTP = state => ({
	modal: state.ui.modal
});

const MDTP = dispatch => ({
	closeModal: () => dispatch(closeModal)
}) ;

export default connect(MSTP, MDTP)(Modal);