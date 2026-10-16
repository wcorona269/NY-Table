import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// NYC-flavored palette: subway-signage black and white, with MTA line
// colors as accents (yellow N/Q/R/W, red 1/2/3, green 4/5/6).
const ink = '#111111';
const mtaYellow = '#FCCC0A';
const mtaRed = '#EE352E';
const mtaGreen = '#00933C';

let theme = createTheme({
	palette: {
		primary: { main: ink, light: '#2b2b2b', dark: '#000000', contrastText: '#ffffff' },
		secondary: { main: mtaYellow, light: '#FFE066', dark: '#D9A900', contrastText: ink },
		error: { main: mtaRed },
		success: { main: mtaGreen },
		background: { default: '#F6F5F1', paper: '#ffffff' },
		text: { primary: ink, secondary: '#5f5f5f' },
		divider: 'rgba(17, 17, 17, 0.10)',
	},
	shape: { borderRadius: 12 },
	typography: {
		fontFamily: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
		h1: { fontWeight: 800, letterSpacing: '-0.03em' },
		h2: { fontWeight: 800, letterSpacing: '-0.03em' },
		h3: { fontWeight: 800, letterSpacing: '-0.02em' },
		h4: { fontWeight: 800, letterSpacing: '-0.02em' },
		h5: { fontWeight: 700, letterSpacing: '-0.01em' },
		h6: { fontWeight: 700, letterSpacing: '-0.01em' },
		subtitle1: { fontWeight: 600 },
		subtitle2: { fontWeight: 600 },
		button: { fontWeight: 600, textTransform: 'none', letterSpacing: 0 },
		overline: { fontWeight: 700, letterSpacing: '0.12em' },
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: { WebkitFontSmoothing: 'antialiased' },
				a: { color: 'inherit', textDecoration: 'none' },
				img: { display: 'block', maxWidth: '100%' },
			},
		},
		MuiButton: {
			defaultProps: { disableElevation: true },
			styleOverrides: {
				root: { borderRadius: 999, paddingInline: 20 },
				sizeLarge: { paddingBlock: 12, fontSize: '1rem' },
			},
		},
		MuiCard: {
			defaultProps: { elevation: 0 },
			styleOverrides: {
				root: ({ theme }) => ({
					border: `1px solid ${theme.palette.divider}`,
					borderRadius: 16,
				}),
			},
		},
		MuiPaper: {
			styleOverrides: { rounded: { borderRadius: 16 } },
		},
		MuiChip: {
			styleOverrides: { root: { fontWeight: 600 } },
		},
		MuiRating: {
			defaultProps: { readOnly: true, precision: 0.1 },
			styleOverrides: {
				iconFilled: { color: '#E8A800' },
			},
		},
		MuiTextField: {
			defaultProps: { fullWidth: true },
		},
		MuiAppBar: {
			defaultProps: { elevation: 0, color: 'inherit' },
		},
		MuiTab: {
			styleOverrides: { root: { textTransform: 'none', fontWeight: 600, minWidth: 0 } },
		},
		MuiDialog: {
			styleOverrides: { paper: { borderRadius: 20 } },
		},
	},
});

theme = responsiveFontSizes(theme);

export default theme;
