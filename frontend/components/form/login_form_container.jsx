import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import { closeModal, showModal } from "../../actions/modal_actions";
import { login, removeSessionErrors, RECEIVE_CURRENT_USER } from '../../actions/session_actions';

export const GUEST_USER = { email: 'guest@nytable.com', password: 'guestuser' };

const LoginForm = () => {
	const dispatch = useDispatch();
	const [formUser, setFormUser] = useState({ email: '', password: '' });
	const [error, setError] = useState(false);
	const [submitting, setSubmitting] = useState(false);

	useEffect(() => () => dispatch(removeSessionErrors()), []);

	const updateInfo = (e) => {
		setError(false);
		setFormUser({ ...formUser, [e.target.name]: e.target.value });
	};

	const submit = (user) => {
		setSubmitting(true);
		dispatch(login(user)).then(action => {
			setSubmitting(false);
			if (action.type === RECEIVE_CURRENT_USER) {
				dispatch(closeModal());
			} else {
				setError(true);
			}
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		submit(formUser);
	};

	return (
		<DialogContent sx={{ p: { xs: 3, sm: 4 }, pt: { xs: 7, sm: 5 } }}>
			<Typography variant="h5" component="h2">Welcome back</Typography>
			<Typography color="text.secondary" sx={{ mt: 0.5, mb: 3 }}>Sign in to book and manage your reservations.</Typography>
			<Stack component="form" spacing={2} onSubmit={handleSubmit} noValidate>
				{error && <Alert severity="error">Invalid email or password.</Alert>}
				<TextField label="Email" type="email" name="email" autoComplete="email" autoFocus
					value={formUser.email} onChange={updateInfo} error={error} />
				<TextField label="Password" type="password" name="password" autoComplete="current-password"
					value={formUser.password} onChange={updateInfo} error={error} />
				<Button type="submit" variant="contained" size="large" disabled={submitting}>Continue</Button>
			</Stack>
			<Divider sx={{ my: 3 }}>or</Divider>
			<Button fullWidth variant="outlined" size="large" onClick={() => submit(GUEST_USER)} disabled={submitting}>
				Continue as guest
			</Button>
			<Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 3 }}>
				New to NY Table?{' '}
				<Link component="button" type="button" fontWeight={600} color="text.primary" onClick={() => dispatch(showModal('signup'))}>
					Create an account
				</Link>
			</Typography>
		</DialogContent>
	);
};

export default LoginForm;
