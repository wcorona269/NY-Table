import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import { formatRating } from '../../util/format';

const ReviewsHeader = ({ averages, distribution, count }) => (
	<Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'auto 1fr' }, gap: { xs: 3, sm: 5 }, p: 3, bgcolor: 'background.default', borderRadius: 4 }}>
		<Box>
			<Typography variant="h2" component="p" lineHeight={1}>{formatRating(averages.overall)}</Typography>
			<Rating value={Number(averages.overall)} sx={{ mt: 1 }} />
			<Typography variant="body2" color="text.secondary">Based on {count} reviews</Typography>
			<Stack direction="row" spacing={3} sx={{ mt: 2 }}>
				{['food', 'service', 'ambience'].map(key => (
					<Box key={key}>
						<Typography fontWeight={800}>{formatRating(averages[key])}</Typography>
						<Typography variant="caption" color="text.secondary" sx={{ textTransform: 'capitalize' }}>{key}</Typography>
					</Box>
				))}
			</Stack>
		</Box>
		<Stack spacing={1} justifyContent="center">
			{[5, 4, 3, 2, 1].map(star => (
				<Stack key={star} direction="row" alignItems="center" spacing={1.5}>
					<Typography variant="body2" fontWeight={700} sx={{ width: 12 }}>{star}</Typography>
					<LinearProgress
						variant="determinate"
						value={distribution[star]}
						sx={{ flex: 1, height: 8, borderRadius: 4, bgcolor: 'divider', '& .MuiLinearProgress-bar': { bgcolor: '#E8A800', borderRadius: 4 } }}
					/>
				</Stack>
			))}
		</Stack>
	</Box>
);

export default ReviewsHeader;
