import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Subway-bullet style wordmark.
const Logo = ({ inverted = false }) => (
	<Box component={Link} to="/" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }} aria-label="NY Table home">
		<Box
			sx={{
				width: 36,
				height: 36,
				borderRadius: '50%',
				bgcolor: inverted ? 'secondary.main' : 'primary.main',
				color: inverted ? 'primary.main' : 'common.white',
				display: 'grid',
				placeItems: 'center',
				fontWeight: 800,
				fontSize: 15,
				letterSpacing: '-0.04em',
				flexShrink: 0,
			}}
		>
			NY
		</Box>
		<Typography
			component="span"
			sx={{ fontWeight: 800, fontSize: 22, letterSpacing: '-0.04em', color: inverted ? 'common.white' : 'text.primary' }}
		>
			Table
		</Typography>
	</Box>
);

export default Logo;
