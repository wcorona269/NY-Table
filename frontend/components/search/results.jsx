import React, { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import TuneIcon from '@mui/icons-material/Tune';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SearchBar, { useSearchParams } from './searchbar';
import TimeButtons from '../booking/time_buttons';
import { RatingLine, MetaLine, ratingLabel } from '../restaurant/rest_meta';
import { useRestaurants } from '../../util/selectors';

const SORTS = {
	recommended: { label: 'Recommended', fn: (a, b) => (b.avg_rating * Math.log(b.bookings_count + 2)) - (a.avg_rating * Math.log(a.bookings_count + 2)) },
	rating: { label: 'Highest rated', fn: (a, b) => (Number(b.avg_rating) || 0) - (Number(a.avg_rating) || 0) },
	popular: { label: 'Most booked', fn: (a, b) => b.bookings_count - a.bookings_count },
	price_low: { label: 'Price: low to high', fn: (a, b) => a.price_range - b.price_range },
	price_high: { label: 'Price: high to low', fn: (a, b) => b.price_range - a.price_range },
};

const matchesQuery = (rest, q) => {
	if (!q) return true;
	const needle = q.toLowerCase();
	return [rest.name, rest.neighborhood, rest.cuisines].some(v => v?.toLowerCase().includes(needle));
};

const ResultCard = ({ rest, search }) => (
	<Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, overflow: 'hidden' }}>
		<Box component={Link} to={`/restaurants/${rest.id}`} sx={{ flexShrink: 0, width: { xs: '100%', sm: 220 } }}>
			<CardMedia component="img" image={rest.iconUrl} alt={rest.name} loading="lazy"
				sx={{ height: { xs: 180, sm: '100%' }, minHeight: { sm: 200 }, objectFit: 'cover' }} />
		</Box>
		<CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1, p: { xs: 2, sm: 2.5 } }}>
			<Typography variant="h6" component={Link} to={`/restaurants/${rest.id}`} sx={{ '&:hover': { textDecoration: 'underline' } }}>
				{rest.name}
			</Typography>
			<Stack direction="row" alignItems="center" spacing={1} flexWrap="wrap">
				<RatingLine rating={rest.avg_rating} count={rest.review_count} />
				{rest.avg_rating && <Typography variant="body2" fontWeight={600}>{ratingLabel(Number(rest.avg_rating))}</Typography>}
			</Stack>
			<MetaLine rest={rest} />
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
				<TrendingUpIcon sx={{ fontSize: 16 }} />
				<Typography variant="caption">Booked {rest.bookings_count} times</Typography>
			</Box>
			<Box sx={{ mt: 'auto', pt: 1 }}>
				<TimeButtons restId={rest.id} {...search} />
			</Box>
		</CardContent>
	</Card>
);

const Filters = ({ cuisines, cuisineFilters, setCuisineFilters, priceFilters, setPriceFilters }) => {
	const toggleCuisine = (c) => setCuisineFilters(
		cuisineFilters.includes(c) ? cuisineFilters.filter(x => x !== c) : [...cuisineFilters, c]
	);

	return (
		<Stack spacing={3}>
			<Box>
				<Typography variant="subtitle1" sx={{ mb: 1 }}>Price</Typography>
				<ToggleButtonGroup value={priceFilters} onChange={(_, v) => setPriceFilters(v)} size="small" fullWidth>
					{[1, 2, 3, 4].map(n => (
						<ToggleButton key={n} value={n} sx={{ fontWeight: 700 }}>{'$'.repeat(n)}</ToggleButton>
					))}
				</ToggleButtonGroup>
			</Box>
			<Divider />
			<Box>
				<Typography variant="subtitle1" sx={{ mb: 0.5 }}>Cuisine</Typography>
				<FormGroup>
					{cuisines.map(c => (
						<FormControlLabel
							key={c}
							label={c}
							control={<Checkbox size="small" checked={cuisineFilters.includes(c)} onChange={() => toggleCuisine(c)} />}
						/>
					))}
				</FormGroup>
			</Box>
			{(cuisineFilters.length > 0 || priceFilters.length > 0) && (
				<Button onClick={() => { setCuisineFilters([]); setPriceFilters([]); }}>Clear filters</Button>
			)}
		</Stack>
	);
};

const SearchResults = () => {
	const { pathname, search: queryString } = useLocation();
	const search = useSearchParams();
	const { q, ...slot } = search;
	const allRests = useRestaurants();
	const loading = allRests.length === 0;

	const [cuisineFilters, setCuisineFilters] = useState([]);
	const [priceFilters, setPriceFilters] = useState([]);
	const [sort, setSort] = useState('recommended');
	const [drawerOpen, setDrawerOpen] = useState(false);

	const matches = useMemo(() => (
		allRests.filter(r => r.iconUrl && matchesQuery(r, pathname === '/search' ? q : ''))
	), [allRests, q, pathname]);

	const cuisines = useMemo(() => [...new Set(matches.map(r => r.cuisines))].sort(), [matches]);

	const results = useMemo(() => (
		matches
			.filter(r => !cuisineFilters.length || cuisineFilters.includes(r.cuisines))
			.filter(r => !priceFilters.length || priceFilters.includes(r.price_range))
			.sort(SORTS[sort].fn)
	), [matches, cuisineFilters, priceFilters, sort]);

	const filterProps = { cuisines, cuisineFilters, setCuisineFilters, priceFilters, setPriceFilters };
	const activeCount = cuisineFilters.length + priceFilters.length;
	const heading = pathname === '/search' && q ? `Results for “${q}”` : 'All restaurants';

	return (
		<>
			<Box sx={{ bgcolor: 'primary.main', py: { xs: 2, md: 3 } }}>
				<Container maxWidth="lg">
					<SearchBar key={queryString} elevated />
				</Container>
			</Box>
			<Container maxWidth="lg" sx={{ py: { xs: 3, md: 5 } }}>
				<Grid container spacing={4}>
					<Grid item md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
						<Box sx={{ position: 'sticky', top: 96 }}>
							<Filters {...filterProps} />
						</Box>
					</Grid>
					<Grid item xs={12} md={9}>
						<Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ sm: 'center' }} spacing={2} sx={{ mb: 3 }}>
							<Box>
								<Typography variant="h4" component="h1">{heading}</Typography>
								<Typography color="text.secondary">
									{loading ? 'Loading…' : `${results.length} ${results.length === 1 ? 'restaurant' : 'restaurants'} available`}
								</Typography>
							</Box>
							<Stack direction="row" spacing={1}>
								<Button variant="outlined" startIcon={<TuneIcon />} onClick={() => setDrawerOpen(true)}
									sx={{ display: { md: 'none' }, flex: 1 }}>
									Filters{activeCount ? ` (${activeCount})` : ''}
								</Button>
								<TextField select size="small" label="Sort by" value={sort} onChange={e => setSort(e.target.value)} sx={{ minWidth: 180, flex: 1 }}>
									{Object.entries(SORTS).map(([key, { label }]) => <MenuItem key={key} value={key}>{label}</MenuItem>)}
								</TextField>
							</Stack>
						</Stack>

						<Stack spacing={2}>
							{loading && [0, 1, 2].map(i => <Skeleton key={i} variant="rounded" height={200} />)}
							{results.map(rest => <ResultCard key={rest.id} rest={rest} search={slot} />)}
							{!loading && results.length === 0 && (
								<Card sx={{ p: 4, textAlign: 'center' }}>
									<Typography variant="h6">No restaurants match your search</Typography>
									<Typography color="text.secondary" sx={{ mt: 1, mb: 2 }}>Try a different neighborhood, cuisine or restaurant name.</Typography>
									<Button component={Link} to="/restaurants" variant="contained">Browse all restaurants</Button>
								</Card>
							)}
						</Stack>
					</Grid>
				</Grid>
			</Container>

			<Drawer anchor="bottom" open={drawerOpen} onClose={() => setDrawerOpen(false)}
				PaperProps={{ sx: { borderTopLeftRadius: 20, borderTopRightRadius: 20, p: 3, maxHeight: '80vh' } }}>
				<Typography variant="h6" sx={{ mb: 2 }}>Filters</Typography>
				<Filters {...filterProps} />
				<Button variant="contained" size="large" sx={{ mt: 3 }} onClick={() => setDrawerOpen(false)}>
					Show {results.length} results
				</Button>
			</Drawer>
		</>
	);
};

export default SearchResults;
