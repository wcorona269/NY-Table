import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect, useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import UserDiningDashboard from './dining-dashboard';
import UserFavorites from './favorites';
import UserEdit from './edit';
import { selectCurrentUser } from '../../util/selectors';

const TABS = {
	reservations: { label: 'Reservations', component: UserDiningDashboard },
	saved: { label: 'Saved restaurants', component: UserFavorites },
	account: { label: 'Account details', component: UserEdit },
};

const UserShow = () => {
	const { tab } = useParams();
	const user = useSelector(selectCurrentUser);

	if (!TABS[tab]) return <Redirect to="/profile/reservations" />;
	const Content = TABS[tab].component;

	return (
		<>
			<Box sx={{ bgcolor: 'primary.main', color: 'common.white', pt: { xs: 4, md: 6 } }}>
				<Container maxWidth="lg">
					<Stack direction="row" spacing={2} alignItems="center">
						<Avatar sx={{ width: 64, height: 64, bgcolor: 'secondary.main', color: 'primary.main', fontWeight: 800, fontSize: 26 }}>
							{user.fname[0]}
						</Avatar>
						<Box>
							<Typography variant="h4" component="h1">{user.fname} {user.lname}</Typography>
							<Typography sx={{ opacity: 0.7 }}>{user.email}</Typography>
						</Box>
					</Stack>
					<Tabs
						value={tab}
						variant="scrollable"
						scrollButtons={false}
						textColor="inherit"
						TabIndicatorProps={{ sx: { bgcolor: 'secondary.main', height: 3 } }}
						sx={{ mt: 3, '& .MuiTab-root': { opacity: 0.7 }, '& .Mui-selected': { opacity: 1 } }}
					>
						{Object.entries(TABS).map(([key, { label }]) => (
							<Tab key={key} value={key} label={label} component={Link} to={`/profile/${key}`} />
						))}
					</Tabs>
				</Container>
			</Box>
			<Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
				<Content />
			</Container>
		</>
	);
};

export default UserShow;
