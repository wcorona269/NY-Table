import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export const selectCurrentUser = (state) => state.entities.users[state.session.id];

// Memoized so components only re-render when the restaurants map changes.
export const useRestaurants = () => {
	const restsById = useSelector(state => state.entities.rests);
	return useMemo(() => Object.values(restsById), [restsById]);
};

export const useBookings = () => {
	const bookingsById = useSelector(state => state.entities.bookings);
	return useMemo(() => Object.values(bookingsById), [bookingsById]);
};
