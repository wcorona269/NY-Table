import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// Menu items are stored as [name, description, price].
const Menu = ({ menuItems }) => {
	if (!menuItems.length) return null;

	return (
		<Box component="section" id="menu">
			<Typography variant="h5" component="h2" sx={{ mb: 2 }}>Menu</Typography>
			<Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, columnGap: 4 }}>
				{menuItems.map(({ id, item: [name, description, price] }) => (
					<Box key={id} sx={{ py: 2, borderBottom: 1, borderColor: 'divider' }}>
						<Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
							<Typography fontWeight={700}>{name}</Typography>
							<Typography fontWeight={700}>${price}</Typography>
						</Box>
						<Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>{description}</Typography>
					</Box>
				))}
			</Box>
		</Box>
	);
};

export default Menu;
