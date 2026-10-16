import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import { RatingLine } from './rest_meta';
import { PRICE_TEXT } from '../../util/format';

const Fact = ({ icon, children }) => (
	<Stack direction="row" spacing={0.75} alignItems="center" sx={{ color: 'text.secondary' }}>
		{icon}
		<Typography variant="body2" color="text.primary">{children}</Typography>
	</Stack>
);

const RestDetails = ({ restaurant, rating, reviewCount }) => {
	const [expanded, setExpanded] = useState(false);
	const long = (restaurant.description || '').length > 280;

	return (
		<Box component="section" id="overview">
			<Stack direction="row" useFlexGap flexWrap="wrap" spacing={2.5} alignItems="center" sx={{ pb: 2.5, borderBottom: 1, borderColor: 'divider' }}>
				<RatingLine rating={rating} />
				<Fact icon={<ChatBubbleOutlineIcon fontSize="small" />}>{reviewCount} reviews</Fact>
				<Fact icon={<PaymentsOutlinedIcon fontSize="small" />}>{PRICE_TEXT[restaurant.price_range]}</Fact>
				<Fact icon={<RestaurantOutlinedIcon fontSize="small" />}>{restaurant.cuisines}</Fact>
			</Stack>
			<Collapse in={expanded || !long} collapsedSize={long ? 120 : 0}>
				<Typography sx={{ mt: 2.5, lineHeight: 1.75, whiteSpace: 'pre-line' }}>{restaurant.description}</Typography>
			</Collapse>
			{long && (
				<Button onClick={() => setExpanded(!expanded)} sx={{ mt: 1, ml: -1.5 }}>
					{expanded ? 'Read less' : 'Read more'}
				</Button>
			)}
		</Box>
	);
};

export default RestDetails;
