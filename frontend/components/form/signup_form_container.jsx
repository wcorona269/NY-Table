import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import { signup, login, removeSessionErrors, RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { closeModal, showModal } from "../../actions/modal_actions";
import { GUEST_USER } from "./login_form_container";

const FIELDS = [
	{ name: 'fname', label: 'First name', autoComplete: 'given-name', half: true },
	{ name: 'lname', label: 'Last name', autoComplete: 'family-name', half: true },
	{ name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
	{ name: 'phone', label: 'Phone number', type: 'tel', autoComplete: 'tel' },
	{ name: 'dname', label: 'Display name', helperText: 'Shown on your reviews. Avoid using your full name or email.' },
	{ name: 'password', label: 'Password', type: 'password', autoComplete: 'new-password', helperText: 'At least 6 characters.' },
];

// Map Rails' full error messages ("Fname can't be blank") onto form fields.
const ERROR_PREFIXES = { Fname: 'fname', Lname: 'lname', Email: 'email', Phone: 'phone', Dname: 'dname', Password: 'password' };

const parseErrors = (messages = []) => messages.reduce((acc, msg) => {
	const prefix = Object.keys(ERROR_PREFIXES).find(p => msg.startsWith(p));
	if (prefix) {
		const field = ERROR_PREFIXES[prefix];
		const text = msg.slice(prefix.length).trim();
		acc[field] = acc[field] || text.charAt(0).toUpperCase() + text.slice(1);
	}
	return acc;
}, {});

const SignupForm = () => {
	const dispatch = useDispatch();
	const [formUser, setFormUser] = useState({ dname: '', fname: '', lname: '', email: '', phone: '', password: '' });
	const [errors, setErrors] = useState({});
	const [submitting, setSubmitting] = useState(false);

	useEffect(() => () => dispatch(removeSessionErrors()), []);

	const updateInfo = (e) => {
		const { name, value } = e.target;
		setErrors({ ...errors, [name]: undefined });
		setFormUser({ ...formUser, [name]: name === 'phone' ? value.replace(/\D/g, '').slice(0, 10) : value });
	};

	const handleResult = (action) => {
		setSubmitting(false);
		if (action.type === RECEIVE_CURRENT_USER) {
			dispatch(closeModal());
		} else {
			setErrors(parseErrors(action.errors));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitting(true);
		dispatch(signup(formUser)).then(handleResult);
	};

	const handleGuest = () => {
		setSubmitting(true);
		dispatch(login(GUEST_USER)).then(handleResult);
	};

	return (
		<DialogContent sx={{ p: { xs: 3, sm: 4 }, pt: { xs: 7, sm: 5 } }}>
			<Typography variant="h5" component="h2">Create an account</Typography>
			<Typography color="text.secondary" sx={{ mt: 0.5, mb: 3 }}>Book tables at the best spots in the city.</Typography>
			<Stack component="form" onSubmit={handleSubmit} noValidate
				sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
				{FIELDS.map(({ name, half, helperText, ...rest }) => (
					<TextField
						key={name}
						name={name}
						value={formUser[name]}
						onChange={updateInfo}
						error={Boolean(errors[name])}
						helperText={errors[name] || helperText}
						sx={{ gridColumn: half ? 'auto' : '1 / -1' }}
						{...rest}
					/>
				))}
				<Button type="submit" variant="contained" size="large" disabled={submitting} sx={{ gridColumn: '1 / -1' }}>
					Create account
				</Button>
			</Stack>
			<Divider sx={{ my: 3 }}>or</Divider>
			<Button fullWidth variant="outlined" size="large" onClick={handleGuest} disabled={submitting}>
				Continue as guest
			</Button>
			<Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 3 }}>
				Already have an account?{' '}
				<Link component="button" type="button" fontWeight={600} color="text.primary" onClick={() => dispatch(showModal('login'))}>
					Sign in
				</Link>
			</Typography>
		</DialogContent>
	);
};

export default SignupForm;
