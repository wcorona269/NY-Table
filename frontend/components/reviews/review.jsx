import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const AVATAR_COLORS = ['#EE352E', '#00933C', '#0039A6', '#FF6319', '#B933AD', '#6CBE45', '#996633', '#A7A9AC'];

const Review = ({ review }) => {
	const name = review.author?.dname || 'Diner';
	const color = AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];

	return (
		<Box sx={{ display: 'flex', gap: 2, py: 3, borderBottom: 1, borderColor: 'divider' }}>
			<Avatar sx={{ bgcolor: color, fontWeight: 700 }}>{name[0].toUpperCase()}</Avatar>
			<Box sx={{ flex: 1, minWidth: 0 }}>
				<Typography fontWeight={700}>{name}</Typography>
				<Stack direction="row" alignItems="center" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 0.25 }}>
					<Rating value={review.overall} size="small" />
					<Typography variant="caption" color="text.secondary">
						Food {review.food} · Service {review.service} · Ambience {review.ambience}
					</Typography>
				</Stack>
				<Typography sx={{ mt: 1, lineHeight: 1.7 }}>{review.body}</Typography>
			</Box>
		</Box>
	);
};

export default Review;
