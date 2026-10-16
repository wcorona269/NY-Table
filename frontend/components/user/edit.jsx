import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import { updateUser, RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { selectCurrentUser } from '../../util/selectors';

const MIN_PASSWORD = 6;

const UserEdit = () => {
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);
	const [form, setForm] = useState({
		fname: currentUser.fname,
		lname: currentUser.lname,
		dname: currentUser.dname,
		email: currentUser.email,
		phone: String(currentUser.phone || ''),
		password: '',
		confirmPassword: '',
	});
	const [status, setStatus] = useState(null);
	const [submitting, setSubmitting] = useState(false);

	const update = (field) => (e) => {
		setStatus(null);
		const value = field === 'phone' ? e.target.value.replace(/\D/g, '').slice(0, 10) : e.target.value;
		setForm({ ...form, [field]: value });
	};

	const passwordTooShort = form.password.length > 0 && form.password.length < MIN_PASSWORD;
	const passwordMismatch = form.confirmPassword.length > 0 && form.password !== form.confirmPassword;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (passwordTooShort || form.password !== form.confirmPassword) return;

		// Only send a password when the user is changing it.
		const { confirmPassword, password, ...rest } = form;
		const user = { id: currentUser.id, ...rest, ...(password ? { password } : {}) };

		setSubmitting(true);
		Promise.resolve(dispatch(updateUser(user)))
			.then(action => {
				if (action?.type === RECEIVE_CURRENT_USER) {
					setStatus({ severity: 'success', message: 'Your changes are saved!' });
					setForm(f => ({ ...f, password: '', confirmPassword: '' }));
				}
			})
			.catch(xhr => setStatus({ severity: 'error', message: (xhr.responseJSON || ['Something went wrong.']).join(' ') }))
			.finally(() => setSubmitting(false));
	};

	return (
		<Card sx={{ maxWidth: 720 }}>
			<CardContent component="form" onSubmit={handleSubmit} noValidate sx={{ p: { xs: 2.5, sm: 4 } }}>
				{status && <Alert severity={status.severity} sx={{ mb: 3 }} onClose={() => setStatus(null)}>{status.message}</Alert>}
				<Typography variant="h6" component="h2">About me</Typography>
				<Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2, mt: 2 }}>
					<TextField label="First name" value={form.fname} onChange={update('fname')} autoComplete="given-name" />
					<TextField label="Last name" value={form.lname} onChange={update('lname')} autoComplete="family-name" />
					<TextField label="Display name" value={form.dname} onChange={update('dname')} sx={{ gridColumn: '1 / -1' }}
						helperText="Shown on your reviews. Avoid using your full name or email." />
					<TextField label="Email" type="email" value={form.email} onChange={update('email')} autoComplete="email" />
					<TextField label="Phone" type="tel" value={form.phone} onChange={update('phone')} autoComplete="tel" />
				</Box>
				<Divider sx={{ my: 4 }} />
				<Typography variant="h6" component="h2">Change password</Typography>
				<Typography variant="body2" color="text.secondary">Leave blank to keep your current password.</Typography>
				<Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2, mt: 2 }}>
					<TextField label="New password" type="password" value={form.password} onChange={update('password')} autoComplete="new-password"
						error={passwordTooShort} helperText={passwordTooShort ? `At least ${MIN_PASSWORD} characters.` : ' '} />
					<TextField label="Confirm new password" type="password" value={form.confirmPassword} onChange={update('confirmPassword')} autoComplete="new-password"
						error={passwordMismatch} helperText={passwordMismatch ? 'Passwords do not match.' : ' '} />
				</Box>
				<Button type="submit" variant="contained" size="large" disabled={submitting} sx={{ mt: 2 }}>Save changes</Button>
			</CardContent>
		</Card>
	);
};

export default UserEdit;
