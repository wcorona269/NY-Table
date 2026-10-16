import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import FavButton from '../user/fav_button';
import RestDetails from './rest_details';
import Gallery from './gallery';
import Menu from './menu';
import Reviews from '../reviews/reviews';
import ReservationCard from './reservation_card';
import AdditionalInfo from './additional_info';
import NotFound from '../not_found';
import { fetchRest } from "../../actions/rest_actions";

const SECTIONS = [
	{ id: 'overview', label: 'Overview' },
	{ id: 'photos', label: 'Photos' },
	{ id: 'menu', label: 'Menu' },
	{ id: 'reviews', label: 'Reviews' },
	{ id: 'details', label: 'Details' },
];

// Height of the sticky app bar + section tabs, used to offset scrolling.
const STICKY_OFFSET = 130;

const useActiveSection = (ready) => {
	const [active, setActive] = useState('overview');
	useEffect(() => {
		if (!ready) return;
		const onScroll = () => {
			let current = SECTIONS[0].id;
			SECTIONS.forEach(({ id }) => {
				const el = document.getElementById(id);
				if (el && el.getBoundingClientRect().top <= STICKY_OFFSET + 10) current = id;
			});
			setActive(current);
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, [ready]);
	return active;
};

const scrollToId = (id) => {
	const el = document.getElementById(id);
	if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - STICKY_OFFSET + 2, behavior: 'smooth' });
};

const RestShow = () => {
	const dispatch = useDispatch();
	const { restId } = useParams();
	const restaurant = useSelector(state => state.entities.rests[restId]);
	const menuItemsById = useSelector(state => state.entities.menu_items);
	const reviewsById = useSelector(state => state.entities.reviews);
	const loaded = Boolean(restaurant?.banner);
	const active = useActiveSection(loaded);
	const theme = useTheme();
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
	const [notFound, setNotFound] = useState(false);

	useEffect(() => {
		setNotFound(false);
		dispatch(fetchRest(restId)).catch(() => setNotFound(true));
	}, [restId]);

	const menuItems = useMemo(() => (
		Object.values(menuItemsById).filter(item => item.rest_id == restId)
	), [menuItemsById, restId]);

	const reviews = useMemo(() => (
		Object.values(reviewsById).filter(review => review.rest_id == restId)
	), [reviewsById, restId]);

	const rating = reviews.length ? reviews.reduce((s, r) => s + r.overall, 0) / reviews.length : null;
	const sections = SECTIONS.filter(s => (s.id !== 'photos' || restaurant?.photoUrls?.length) && (s.id !== 'menu' || menuItems.length));

	if (notFound) return <NotFound title="Restaurant not found" message="This restaurant may no longer be on NY Table." />;

	if (!loaded) {
		return (
			<>
				<Skeleton variant="rectangular" sx={{ height: { xs: 240, md: 400 } }} />
				<Container maxWidth="lg" sx={{ mt: 4 }}>
					<Skeleton width="40%" height={56} />
					<Skeleton width="70%" />
					<Skeleton width="60%" />
				</Container>
			</>
		);
	}

	return (
		<>
			<Box sx={{ position: 'relative', height: { xs: 260, md: 420 }, bgcolor: 'primary.main', overflow: 'hidden' }}>
				<Box component="img" src={restaurant.banner} alt="" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
				<Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.75) 100%)' }} />
				<Container maxWidth="lg" sx={{ position: 'absolute', left: 0, right: 0, bottom: { xs: 20, md: 36 }, color: 'common.white' }}>
					<Stack direction="row" alignItems="flex-end" justifyContent="space-between" spacing={2}>
						<Box sx={{ minWidth: 0 }}>
							<Chip icon={<PlaceOutlinedIcon />} label={restaurant.neighborhood} size="small"
								sx={{ bgcolor: 'secondary.main', color: 'primary.main', mb: 1.5, '& .MuiChip-icon': { color: 'primary.main' } }} />
							<Typography variant="h2" component="h1" sx={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}>{restaurant.name}</Typography>
						</Box>
						<FavButton restId={restaurant.id} sx={{ flexShrink: 0 }} />
					</Stack>
				</Container>
			</Box>

			<Paper square elevation={0} sx={{ position: 'sticky', top: { xs: 60, md: 68 }, zIndex: 10, borderBottom: 1, borderColor: 'divider' }}>
				<Container maxWidth="lg">
					<Tabs value={sections.some(s => s.id === active) ? active : false} onChange={(_, id) => scrollToId(id)} variant="scrollable" scrollButtons={false}>
						{sections.map(s => <Tab key={s.id} value={s.id} label={s.label} />)}
					</Tabs>
				</Container>
			</Paper>

			<Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 }, pb: { xs: 12, md: 6 } }}>
				<Grid container spacing={{ xs: 4, md: 6 }}>
					<Grid item xs={12} md={8}>
						<Stack spacing={{ xs: 5, md: 6 }}>
							<RestDetails restaurant={restaurant} rating={rating} reviewCount={reviews.length} />
							{!isDesktop && <ReservationCard restaurant={restaurant} />}
							<Gallery photos={restaurant.photoUrls} />
							<Menu menuItems={menuItems} />
							<Reviews reviews={reviews} />
							<AdditionalInfo restaurant={restaurant} />
						</Stack>
					</Grid>
					{isDesktop && (
						<Grid item md={4}>
							<Box sx={{ position: 'sticky', top: STICKY_OFFSET + 16 }}>
								<ReservationCard restaurant={restaurant} />
							</Box>
						</Grid>
					)}
				</Grid>
			</Container>

			<Paper elevation={8} square sx={{ display: isDesktop ? 'none' : 'block', position: 'fixed', left: 0, right: 0, bottom: 0, p: 1.5, zIndex: 20 }}>
				<Button fullWidth variant="contained" color="secondary" size="large" onClick={() => scrollToId('reserve')}>
					Find a table
				</Button>
			</Paper>
		</>
	);
};

export default RestShow;
