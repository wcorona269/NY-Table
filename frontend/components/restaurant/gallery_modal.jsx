import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const navButtonSx = {
	position: 'absolute',
	top: '50%',
	transform: 'translateY(-50%)',
	bgcolor: 'rgba(255,255,255,0.15)',
	color: 'common.white',
	'&:hover': { bgcolor: 'rgba(255,255,255,0.3)' },
};

const GalleryModal = ({ photos = [], idx = 0, onClose }) => {
	const [index, setIndex] = useState(Number(idx) || 0);
	const last = photos.length - 1;
	const prev = () => setIndex(i => Math.max(i - 1, 0));
	const next = () => setIndex(i => Math.min(i + 1, last));

	useEffect(() => {
		const onKey = (e) => {
			if (e.key === 'ArrowLeft') prev();
			if (e.key === 'ArrowRight') next();
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [last]);

	return (
		<Dialog open fullScreen onClose={onClose} PaperProps={{ sx: { bgcolor: 'rgba(0,0,0,0.94)', borderRadius: 0 } }}>
			<IconButton onClick={onClose} aria-label="Close gallery" sx={{ position: 'absolute', right: 16, top: 16, color: 'common.white', zIndex: 1 }}>
				<CloseIcon />
			</IconButton>
			<Box sx={{ position: 'relative', flex: 1, display: 'grid', placeItems: 'center', p: { xs: 1, md: 8 } }}>
				<Box component="img" src={photos[index]} alt={`Photo ${index + 1}`}
					sx={{ maxWidth: '100%', maxHeight: 'calc(100vh - 120px)', objectFit: 'contain', borderRadius: 2 }} />
				{index > 0 && (
					<IconButton onClick={prev} aria-label="Previous photo" sx={{ ...navButtonSx, left: { xs: 8, md: 24 } }}>
						<ChevronLeftIcon fontSize="large" />
					</IconButton>
				)}
				{index < last && (
					<IconButton onClick={next} aria-label="Next photo" sx={{ ...navButtonSx, right: { xs: 8, md: 24 } }}>
						<ChevronRightIcon fontSize="large" />
					</IconButton>
				)}
			</Box>
			<Typography align="center" sx={{ color: 'grey.400', pb: 3 }}>{index + 1} / {photos.length}</Typography>
		</Dialog>
	);
};

export default GalleryModal;
