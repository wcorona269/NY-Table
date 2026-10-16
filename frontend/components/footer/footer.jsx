import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import Logo from '../nav_bar/logo';

const FooterColumn = ({ title, children }) => (
	<Grid item xs={6} md={2.5}>
		<Typography variant="overline" sx={{ color: 'secondary.main' }}>{title}</Typography>
		<Stack spacing={1} sx={{ mt: 1 }}>{children}</Stack>
	</Grid>
);

const FooterLink = ({ href, icon, children }) => (
	<Link href={href} target="_blank" rel="noopener noreferrer" underline="hover" color="inherit"
		sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, opacity: 0.85, '&:hover': { opacity: 1 } }}>
		{icon}{children}
	</Link>
);

const FooterText = ({ children }) => (
	<Typography variant="body2" sx={{ opacity: 0.75 }}>{children}</Typography>
);

const Footer = () => (
	<Box component="footer" sx={{ bgcolor: 'primary.main', color: 'common.white', mt: { xs: 6, md: 10 }, py: { xs: 6, md: 8 } }}>
		<Container maxWidth="lg">
			<Grid container spacing={4}>
				<Grid item xs={12} md={4.5}>
					<Logo inverted />
					<Typography variant="body2" sx={{ mt: 2, opacity: 0.75, maxWidth: 360 }}>
						NY Table is a restaurant reservation app for New York City, inspired by OpenTable.
						Built by Will Corona, a graduate of App Academy's full-stack software engineering program.
					</Typography>
				</Grid>
				<FooterColumn title="Developer">
					<FooterLink href="https://github.com/wcorona269" icon={<GitHubIcon fontSize="small" />}>GitHub</FooterLink>
					<FooterLink href="https://www.linkedin.com/in/william-corona/" icon={<LinkedInIcon fontSize="small" />}>LinkedIn</FooterLink>
					<FooterLink href="https://will-corona.info" icon={<LanguageIcon fontSize="small" />}>Personal site</FooterLink>
				</FooterColumn>
				<FooterColumn title="Built with">
					<FooterText>React · Redux · Material UI</FooterText>
					<FooterText>Ruby on Rails · PostgreSQL</FooterText>
					<FooterText>Amazon S3</FooterText>
				</FooterColumn>
				<FooterColumn title="More projects">
					<FooterLink href="https://wcorona269.github.io/LitterBug/">Litterbug</FooterLink>
					<FooterLink href="https://indevview.herokuapp.com/">InDevView</FooterLink>
				</FooterColumn>
			</Grid>
			<Typography variant="caption" component="p" sx={{ mt: 6, opacity: 0.5 }}>
				© {new Date().getFullYear()} NY Table · A portfolio project. Not affiliated with OpenTable.
			</Typography>
		</Container>
	</Box>
);

export default Footer;
