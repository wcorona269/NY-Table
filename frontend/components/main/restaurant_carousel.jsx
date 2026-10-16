import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RestaurantTile from './restaurant_tile';

const arrowSx = {
	position: 'absolute',
	top: '38%',
	zIndex: 1,
	bgcolor: 'background.paper',
	boxShadow: 3,
	display: { xs: 'none', md: 'inline-flex' },
	'&:hover': { bgcolor: 'background.paper' },
};

// Horizontal, scroll-snapping row of restaurant tiles. Touch-scrollable on
// mobile; arrow buttons on desktop.
const RestaurantCarousel = ({ rests }) => {
	const ref = useRef(null);
	const [edges, setEdges] = useState({ start: true, end: false });

	const updateEdges = () => {
		const el = ref.current;
		if (!el) return;
		setEdges({
			start: el.scrollLeft <= 4,
			end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
		});
	};

	useEffect(updateEdges, [rests.length]);

	const scroll = (dir) => {
		const el = ref.current;
		el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: 'smooth' });
	};

	if (!rests.length) return null;

	return (
		<Box sx={{ position: 'relative' }}>
			{!edges.start && (
				<IconButton onClick={() => scroll(-1)} aria-label="Scroll left" sx={{ ...arrowSx, left: -20 }}>
					<ChevronLeftIcon />
				</IconButton>
			)}
			<Box
				ref={ref}
				onScroll={updateEdges}
				sx={{
					display: 'grid',
					gridAutoFlow: 'column',
					gridAutoColumns: { xs: '78%', sm: '44%', md: 'calc((100% - 48px) / 4)' },
					gap: 2,
					overflowX: 'auto',
					scrollSnapType: 'x mandatory',
					scrollbarWidth: 'none',
					'&::-webkit-scrollbar': { display: 'none' },
					py: 1,
					'& > *': { scrollSnapAlign: 'start' },
				}}
			>
				{rests.map(rest => <RestaurantTile key={rest.id} rest={rest} />)}
			</Box>
			{!edges.end && (
				<IconButton onClick={() => scroll(1)} aria-label="Scroll right" sx={{ ...arrowSx, right: -20 }}>
					<ChevronRightIcon />
				</IconButton>
			)}
		</Box>
	);
};

export default RestaurantCarousel;
