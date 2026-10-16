// Shared formatting helpers for dates, times, prices and reservation options.

const pad = (n) => String(n).padStart(2, '0');

// Accepts "HH:MM" or a Rails time like "2000-01-01T19:30:00.000Z" and
// returns "HH:MM" (24h).
export const toHHMM = (time) => {
	const match = String(time || '').match(/(\d{1,2}):(\d{2})/);
	return match ? `${pad(match[1])}:${match[2]}` : '';
};

// "19:30" -> "7:30 PM"
export const formatTime = (time) => {
	const hhmm = toHHMM(time);
	if (!hhmm) return '';
	let [h, m] = hhmm.split(':').map(Number);
	const suffix = h >= 12 ? 'PM' : 'AM';
	h = h % 12 || 12;
	return `${h}:${pad(m)} ${suffix}`;
};

// Local-time Date -> "YYYY-MM-DD"
export const toISODate = (date = new Date()) => (
	`${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
);

// "YYYY-MM-DD" -> local Date (avoids the UTC shift of `new Date("YYYY-MM-DD")`)
export const parseISODate = (iso) => {
	const [y, m, d] = String(iso).split('-').map(Number);
	return new Date(y, (m || 1) - 1, d || 1);
};

// "YYYY-MM-DD" -> "Fri, Oct 16" (adds the year when it isn't the current one)
export const formatDate = (iso) => {
	const date = parseISODate(iso);
	const opts = { weekday: 'short', month: 'short', day: 'numeric' };
	if (date.getFullYear() !== new Date().getFullYear()) opts.year = 'numeric';
	return date.toLocaleDateString('en-US', opts);
};

// True if the booking date is today or later.
export const isUpcoming = (iso) => {
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	return parseISODate(iso) >= today;
};

export const addMinutes = (hhmm, minutes) => {
	const [h, m] = toHHMM(hhmm).split(':').map(Number);
	const total = Math.min(Math.max(h * 60 + m + minutes, 0), 23 * 60 + 45);
	return `${pad(Math.floor(total / 60))}:${pad(total % 60)}`;
};

// Half-hour slots from 11:00 AM to 11:00 PM.
export const TIME_OPTIONS = Array.from({ length: 25 }, (_, i) => addMinutes('11:00', i * 30));

export const PARTY_OPTIONS = Array.from({ length: 20 }, (_, i) => i + 1);

export const partyLabel = (n) => `${n} ${Number(n) === 1 ? 'person' : 'people'}`;

export const priceSymbols = (n) => '$'.repeat(Number(n) || 1);

export const PRICE_TEXT = {
	1: '$20 and under',
	2: '$30 and under',
	3: '$31 to $50',
	4: '$50 and over',
};

export const formatPhone = (phone) => {
	const s = String(phone || '');
	return s.length === 10 ? `(${s.slice(0, 3)}) ${s.slice(3, 6)}-${s.slice(6)}` : s;
};

export const formatRating = (rating) => (rating ? Number(rating).toFixed(1) : '–');

// Default reservation search: today, next half hour (clamped to service hours), 2 people.
export const defaultSearch = () => {
	const now = new Date();
	const next = now.getHours() * 60 + now.getMinutes() + 30;
	const rounded = Math.ceil(next / 30) * 30;
	let time = `${pad(Math.floor(rounded / 60) % 24)}:${pad(rounded % 60)}`;
	if (!TIME_OPTIONS.includes(time)) time = '19:00';
	return { date: toISODate(now), time, party: 2 };
};
