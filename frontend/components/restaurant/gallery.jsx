import React from 'react';
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { showGallery } from '../../actions/modal_actions';

// Mosaic: one large photo plus up to four smaller ones; collapses to a
// two-column grid on phones.
const Gallery = ({ photos = [] }) => {
	const dispatch = useDispatch();
	if (!photos.length) return null;

	const shown = photos.slice(0, 5);
	const extra = photos.length - shown.length;
	const open = (idx) => dispatch(showGallery('gallery', photos, idx));

	return (
		<Box component="section" id="photos">
			<Typography variant="h5" component="h2" sx={{ mb: 2 }}>{photos.length} Photos</Typography>
			<Box
				sx={{
					display: 'grid',
					gap: 1,
					gridTemplateColumns: { xs: '1fr 1fr', sm: '2fr 1fr 1fr' },
					gridAutoRows: { xs: 120, sm: 140 },
					borderRadius: 3,
					overflow: 'hidden',
				}}
			>
				{shown.map((url, idx) => (
					<ButtonBase
						key={url}
						onClick={() => open(idx)}
						aria-label={`Open photo ${idx + 1}`}
						sx={{
							position: 'relative',
							gridColumn: idx === 0 ? { xs: '1 / -1', sm: 'auto' } : 'auto',
							gridRow: idx === 0 ? { sm: 'span 2' } : 'auto',
							'& img': { transition: 'transform 300ms ease' },
							'&:hover img': { transform: 'scale(1.04)' },
						}}
					>
						<Box component="img" src={url} alt="" loading="lazy" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
						{idx === shown.length - 1 && extra > 0 && (
							<Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.5)', color: 'common.white', display: 'grid', placeItems: 'center' }}>
								<Typography fontWeight={700}>+{extra} more</Typography>
							</Box>
						)}
					</ButtonBase>
				))}
			</Box>
		</Box>
	);
};

export default Gallery;
