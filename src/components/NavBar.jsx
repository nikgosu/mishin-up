import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import {useNavigate} from "react-router-dom"

const pages = [
	{name: 'PORTFOLIO', path: '/portfolio'},
	{name: 'BACKSTAGE', path: '/backstage'},
	{name: 'EDUCATION', path: '/education'},
];

export const NavBar = () => {

	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const navigate = useNavigate()

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleNavClick = (path) => {
		handleCloseNavMenu()
		navigate(path)
	}

	return (
		<AppBar
			position="absolute"
			color={'transparent'}
			sx={{boxShadow: 'none', marginTop: '20px'}}
		>
			<Container maxWidth="xl">
				<Toolbar disableGutters sx={{display: 'flex', justifyContent: 'space-between'}}>
					<Typography
						variant="h6"
						noWrap
						component="a"
						href="/"
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontSize: '50px',
							fontWeight: 700,
							color: 'white',
							textDecoration: 'none',
						}}
					>
						MISHIN UP
					</Typography>
					<Typography
						variant="h5"
						noWrap
						component="a"
						onClick={() => navigate('/')}
						color={'primary'}
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontWeight: 700,
							textDecoration: 'none',
						}}
					>
						MISHIN UP
					</Typography>
					<Box
						sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="primary"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							marginThreshold={0}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								color: 'black',
								display: { xs: 'block', md: 'none'},
								width: '100vh'
							}}
							PaperProps={{
								style: {
									width: '100%',
									maxWidth: "100%",
									left: 0,
									right: 0,
									top: 0,
									borderRadius: 0
								}
							}}
						>
							{pages.map((page) => (
								<MenuItem
									key={page.name}
									onClick={() => handleNavClick(page.path)}
								>
									<Typography
										textAlign="center"
									>
										{page.name}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }}}>
						{pages.map((page) => (
							<Button
								key={page.name}
								onClick={() => handleNavClick(page.path)}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								{page.name}
							</Button>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}