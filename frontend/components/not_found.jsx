import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const NotFound = ({ title = "We couldn't find that page", message = 'It may have been moved or removed.' }) => (
	<Container maxWidth="sm" sx={{ py: { xs: 8, md: 12 }, textAlign: 'center' }}>
		<Typography variant="h4" component="h1">{title}</Typography>
		<Typography color="text.secondary" sx={{ mt: 1.5, mb: 3 }}>{message}</Typography>
		<Button component={Link} to="/" variant="contained">Back to home</Button>
	</Container>
);

export default NotFound;
