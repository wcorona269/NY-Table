import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import WineBarOutlinedIcon from '@mui/icons-material/WineBarOutlined';
import CheckroomOutlinedIcon from '@mui/icons-material/CheckroomOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import { formatPhone } from '../../util/format';

const DINING_STYLE = { 1: 'Casual Dining', 2: 'Casual Dining', 3: 'Casual Elegant', 4: 'Fine Dining' };
const DRESS_CODE = { 1: 'Casual Dress', 2: 'Casual Dress', 3: 'Business Casual', 4: 'Smart Casual' };

const paymentOptions = (rest) => {
	if (rest.name === 'Peter Luger Steak House') return 'Cash, Check or Debit Card';
	if (rest.price_range === 1) return 'Cash Only';
	return 'AMEX, Discover, MasterCard, Visa';
};

const Info = ({ icon, label, children }) => (
	<ListItem disableGutters alignItems="flex-start" sx={{ py: 0.75 }}>
		<ListItemIcon sx={{ minWidth: 36, mt: 0.5, color: 'text.primary' }}>{icon}</ListItemIcon>
		<ListItemText
			primary={label}
			secondary={children}
			primaryTypographyProps={{ variant: 'body2', fontWeight: 700 }}
			secondaryTypographyProps={{ variant: 'body2', color: 'text.secondary', component: 'div' }}
		/>
	</ListItem>
);

const AdditionalInfo = ({ restaurant }) => {
	const mapQuery = encodeURIComponent(`${restaurant.name}, ${restaurant.address}`);

	return (
		<Box component="section" id="details">
			<Typography variant="h5" component="h2" sx={{ mb: 2 }}>Location & details</Typography>
			<Card sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' } }}>
				<Box
					component="iframe"
					title={`Map of ${restaurant.name}`}
					src={`https://maps.google.com/maps?q=${mapQuery}&z=15&output=embed`}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					sx={{ width: '100%', height: '100%', minHeight: 240, border: 0, display: 'block' }}
				/>
				<CardContent sx={{ p: 3 }}>
					<List dense disablePadding>
						<Info icon={<PlaceOutlinedIcon fontSize="small" />} label="Address">
							<Link href={`https://maps.google.com/?q=${mapQuery}`} target="_blank" rel="noopener noreferrer" color="inherit">
								{restaurant.address}
							</Link>
						</Info>
						<Info icon={<PhoneOutlinedIcon fontSize="small" />} label="Phone number">
							<Link href={`tel:${restaurant.phone}`} color="inherit">{formatPhone(restaurant.phone)}</Link>
						</Info>
						<Info icon={<LocationCityOutlinedIcon fontSize="small" />} label="Neighborhood">{restaurant.neighborhood}</Info>
						<Info icon={<RestaurantOutlinedIcon fontSize="small" />} label="Cuisine">{restaurant.cuisines}</Info>
						<Info icon={<WineBarOutlinedIcon fontSize="small" />} label="Dining style">{DINING_STYLE[restaurant.price_range]}</Info>
						<Info icon={<CheckroomOutlinedIcon fontSize="small" />} label="Dress code">{DRESS_CODE[restaurant.price_range]}</Info>
						<Info icon={<CreditCardOutlinedIcon fontSize="small" />} label="Payment options">{paymentOptions(restaurant)}</Info>
						<Info icon={<ScheduleOutlinedIcon fontSize="small" />} label="Hours of operation">
							Mon–Thu 11:30 am–10:00 pm<br />Fri, Sat 11:30 am–11:00 pm<br />Sun 11:30 am–9:00 pm
						</Info>
					</List>
				</CardContent>
			</Card>
		</Box>
	);
};

export default AdditionalInfo;
