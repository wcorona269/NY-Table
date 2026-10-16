import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchBar, { buildSearchUrl } from '../search/searchbar';
import RestaurantCarousel from './restaurant_carousel';
import { useRestaurants } from '../../util/selectors';
import { defaultSearch } from '../../util/format';

const byDesc = (key) => (a, b) => (Number(b[key]) || 0) - (Number(a[key]) || 0);

const Section = ({ title, subtitle, children }) => (
	<Box component="section" sx={{ mt: { xs: 5, md: 7 } }}>
		<Stack direction="row" alignItems="flex-end" justifyContent="space-between" sx={{ mb: 2 }}>
			<Box>
				<Typography variant="h5" component="h2">{title}</Typography>
				{subtitle && <Typography color="text.secondary">{subtitle}</Typography>}
			</Box>
			<Button component={Link} to="/restaurants" endIcon={<ArrowForwardIcon />} sx={{ flexShrink: 0 }}>
				View all
			</Button>
		</Stack>
		{children}
	</Box>
);

const CarouselSkeleton = () => (
	<Box sx={{ display: 'grid', gridTemplateColumns: { xs: '78%', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 2, overflow: 'hidden' }}>
		{[0, 1, 2, 3].map(i => <Skeleton key={i} variant="rounded" height={280} />)}
	</Box>
);

const Home = () => {
	const allRests = useRestaurants();
	const rests = useMemo(() => allRests.filter(r => r.iconUrl), [allRests]);

	const sections = useMemo(() => ([
		{ title: 'Popular right now', subtitle: 'The most-booked tables in the city', rests: [...rests].sort(byDesc('bookings_count')) },
		{ title: 'Top rated', subtitle: 'Diners can’t stop raving', rests: [...rests].sort(byDesc('avg_rating')) },
		{ title: 'Special occasions', subtitle: 'Worth dressing up for', rests: rests.filter(r => r.price_range >= 3).sort(byDesc('avg_rating')) },
		{ title: 'Cheap eats', subtitle: 'Classic New York on a budget', rests: rests.filter(r => r.price_range <= 2).sort(byDesc('bookings_count')) },
	]), [rests]);

	const neighborhoods = useMemo(() => [...new Set(rests.map(r => r.neighborhood))].sort(), [rests]);
	const { date, time, party } = defaultSearch();

	return (
		<>
			<Box
				sx={{
					bgcolor: 'primary.main',
					color: 'common.white',
					pt: { xs: 6, md: 10 },
					pb: { xs: 6, md: 10 },
					backgroundImage: 'radial-gradient(circle at 85% 20%, rgba(252,204,10,0.18), transparent 40%), radial-gradient(circle at 10% 90%, rgba(238,53,46,0.15), transparent 45%)',
				}}
			>
				<Container maxWidth="lg">
					<Typography variant="overline" sx={{ color: 'secondary.main' }}>New York City reservations</Typography>
					<Typography variant="h2" component="h1" sx={{ maxWidth: 720, mt: 1, mb: { xs: 3, md: 5 } }}>
						Find your table for{' '}
						<Box component="span" sx={{ color: 'secondary.main' }}>any</Box>{' '}
						occasion
					</Typography>
					<SearchBar elevated />
				</Container>
			</Box>

			<Container maxWidth="lg">
				{rests.length === 0 ? (
					<Box sx={{ mt: 7 }}><CarouselSkeleton /></Box>
				) : sections.map(({ title, subtitle, rests: list }) => list.length > 0 && (
					<Section key={title} title={title} subtitle={subtitle}>
						<RestaurantCarousel rests={list} />
					</Section>
				))}

				{neighborhoods.length > 0 && (
					<Box component="section" sx={{ mt: { xs: 5, md: 7 } }}>
						<Typography variant="h5" component="h2" sx={{ mb: 2 }}>Explore by neighborhood</Typography>
						<Stack direction="row" useFlexGap flexWrap="wrap" spacing={1}>
							{neighborhoods.map(n => (
								<Chip
									key={n}
									label={n}
									clickable
									component={Link}
									to={buildSearchUrl({ q: n, date, time, party })}
									variant="outlined"
									sx={{ bgcolor: 'background.paper', '&:hover': { bgcolor: 'secondary.light' } }}
								/>
							))}
						</Stack>
					</Box>
				)}
			</Container>
		</>
	);
};

export default Home;
