import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import EventIcon from "@mui/icons-material/EventOutlined";
import BookmarkIcon from "@mui/icons-material/BookmarkBorder";
import PersonIcon from "@mui/icons-material/PersonOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import RestaurantIcon from "@mui/icons-material/RestaurantMenu";
import Logo from "./logo";
import { showModal } from "../../actions/modal_actions";
import { logout } from "../../actions/session_actions";
import { fetchMyBookings } from "../../actions/booking_actions";
import { fetchAllFavs } from "../../actions/favorite_actions";
import { selectCurrentUser, useBookings } from "../../util/selectors";
import { formatDate, formatTime, isUpcoming, partyLabel } from "../../util/format";

const ReservationsMenu = ({ anchorEl, onClose }) => {
	const history = useHistory();
	const bookings = useBookings();
	const upcoming = useMemo(() => (
		bookings
			.filter(b => !b.cancelled && isUpcoming(b.date))
			.sort((a, b) => a.date.localeCompare(b.date))
	), [bookings]);

	const go = (path) => { onClose(); history.push(path); };

	return (
		<Menu
			anchorEl={anchorEl}
			open={Boolean(anchorEl)}
			onClose={onClose}
			anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			slotProps={{ paper: { sx: { width: 320, maxWidth: 'calc(100vw - 32px)', mt: 1 } } }}
		>
			<Typography variant="overline" sx={{ px: 2, color: 'text.secondary' }}>Upcoming reservations</Typography>
			{upcoming.length === 0 && (
				<Typography sx={{ px: 2, py: 1.5 }} color="text.secondary">You have no upcoming reservations.</Typography>
			)}
			{upcoming.slice(0, 5).map(b => (
				<MenuItem key={b.id} onClick={() => go(`/reservations/${b.id}`)} sx={{ py: 1.25, whiteSpace: 'normal' }}>
					<ListItemIcon><RestaurantIcon fontSize="small" /></ListItemIcon>
					<ListItemText
						primary={b.restaurant?.name}
						secondary={`${formatDate(b.date)} · ${formatTime(b.time)} · ${partyLabel(b.party_size)}`}
					/>
				</MenuItem>
			))}
			<Divider />
			<MenuItem onClick={() => go('/profile/reservations')}>View all reservations</MenuItem>
		</Menu>
	);
};

const NavBar = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const currentUser = useSelector(selectCurrentUser);
	const bookings = useBookings();
	const upcomingCount = useMemo(() => bookings.filter(b => !b.cancelled && isUpcoming(b.date)).length, [bookings]);
	const [userAnchor, setUserAnchor] = useState(null);
	const [resAnchor, setResAnchor] = useState(null);

	useEffect(() => {
		if (currentUser) {
			dispatch(fetchMyBookings());
			dispatch(fetchAllFavs());
		}
	}, [currentUser?.id]);

	const go = (path) => { setUserAnchor(null); history.push(path); };
	const handleLogout = () => {
		setUserAnchor(null);
		dispatch(logout()).then(() => history.push('/'));
	};

	return (
		<AppBar position="sticky" sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)' }}>
			<Container maxWidth="lg">
				<Toolbar disableGutters sx={{ gap: 1, minHeight: { xs: 60, md: 68 } }}>
					<Logo />
					<Box sx={{ flex: 1 }} />
					<Tooltip title="Search">
						<IconButton onClick={() => dispatch(showModal('search'))} aria-label="Search">
							<SearchIcon />
						</IconButton>
					</Tooltip>
					{currentUser ? (
						<>
							<Tooltip title="Upcoming reservations">
								<IconButton onClick={e => setResAnchor(e.currentTarget)} aria-label="Upcoming reservations">
									<Badge badgeContent={upcomingCount} color="error">
										<EventIcon />
									</Badge>
								</IconButton>
							</Tooltip>
							<ReservationsMenu anchorEl={resAnchor} onClose={() => setResAnchor(null)} />
							<IconButton onClick={e => setUserAnchor(e.currentTarget)} aria-label="Account menu" sx={{ p: 0.5 }}>
								<Avatar sx={{ width: 34, height: 34, bgcolor: 'secondary.main', color: 'primary.main', fontWeight: 700, fontSize: 15 }}>
									{currentUser.fname?.[0]?.toUpperCase()}
								</Avatar>
							</IconButton>
							<Menu
								anchorEl={userAnchor}
								open={Boolean(userAnchor)}
								onClose={() => setUserAnchor(null)}
								anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
								transformOrigin={{ vertical: 'top', horizontal: 'right' }}
								slotProps={{ paper: { sx: { minWidth: 220, mt: 1 } } }}
							>
								<Box sx={{ px: 2, py: 1 }}>
									<Typography fontWeight={700}>Hello, {currentUser.fname}!</Typography>
									<Typography variant="body2" color="text.secondary" noWrap>{currentUser.email}</Typography>
								</Box>
								<Divider />
								<MenuItem onClick={() => go('/profile/reservations')}>
									<ListItemIcon><EventIcon fontSize="small" /></ListItemIcon>My reservations
								</MenuItem>
								<MenuItem onClick={() => go('/profile/saved')}>
									<ListItemIcon><BookmarkIcon fontSize="small" /></ListItemIcon>Saved restaurants
								</MenuItem>
								<MenuItem onClick={() => go('/profile/account')}>
									<ListItemIcon><PersonIcon fontSize="small" /></ListItemIcon>Account details
								</MenuItem>
								<Divider />
								<MenuItem onClick={handleLogout}>
									<ListItemIcon><LogoutIcon fontSize="small" /></ListItemIcon>Sign out
								</MenuItem>
							</Menu>
						</>
					) : (
						<>
							<Button color="primary" onClick={() => dispatch(showModal('login'))} sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>
								Sign in
							</Button>
							<Button variant="contained" onClick={() => dispatch(showModal('signup'))} sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>
								Sign up
							</Button>
							<Button variant="contained" size="small" onClick={() => dispatch(showModal('login'))} sx={{ display: { xs: 'inline-flex', sm: 'none' } }}>
								Sign in
							</Button>
						</>
					)}
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default NavBar;
