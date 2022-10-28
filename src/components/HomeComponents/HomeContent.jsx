import React from 'react'
import {Box, Container} from "@mui/material"
import Typography from "@mui/material/Typography"
import vid1 from '../../assets/videos/backstage/C0232_3.mp4'
import vid2 from '../../assets/videos/vid3.MP4'
import img1 from '../../assets/img/backstage/jpeg/DSC0566-—-копия.jpg'
import img2 from '../../assets/img/backstage/jpeg/DSC0877.jpg'
import ContentItem from "../ContentItem"
import ClientsIconsList from "../FooterComponents/ClientsIconsList"
import {useNavigate} from "react-router-dom"

const HomeContent = () => {

	const navigate = useNavigate()

	return (
		<Box
			sx={{
				padding: {xs: '40px 20px', md: '60px 40px'},
				backgroundColor: 'rgb(3,17,16)',
				display: 'flex',
				boxSizing: 'border-box',
				width: '100%',
				flexDirection: 'column'
			}}
		>
			<Typography
				color={'lightgray'}
				sx={{
					fontSize: {xs: '20px',md: '60px'},
					fontWeight: 700
				}}
			>
				MY WORK
			</Typography>
			<Typography
				color={'gray'}
				sx={{
					marginTop: '20px',
					fontSize: {xs: '20px',md: '20px'},
					fontWeight: 700
				}}
			>
				SOCIAL CONTENT MADE TO ELEVATE YOUR BRAND
			</Typography>
			<Container
				maxWidth={"xl"}
				disableGutters={true}
				sx={{
					display: 'flex',
					flexDirection: {xs: 'column', md: 'row'},
					justifyContent: 'space-between',
					marginTop: '80px'
				}}
			>
				<Box
					sx={{
						width: {xs: '100%', md: '48.5%'}
					}}
					onClick={() => {
						navigate('/portfolio')
						window.scrollTo(0, 0)
					}}
				>
					<ContentItem
						video={vid2}
						img={img1}
						alignItems={'flex-end'}
						justifyContent={'flex-start'}
						fontSize={'40px'}
						height={'700px'}
					>
						VIDEO
					</ContentItem>
				</Box>
				<Box
					sx={{
						marginTop: {xs: '40px', md: '120px'},
						width: {xs: '100%', md: '48.5%'}
					}}
					onClick={() => navigate('/backstage')}
				>
					<ContentItem
						video={vid1}
						img={img2}
						alignItems={'flex-end'}
						justifyContent={'flex-start'}
						fontSize={'40px'}
						height={'700px'}
					>
						BACKSTAGE
					</ContentItem>
				</Box>
			</Container>
			<Container
				maxWidth={"xl"}
				disableGutters={true}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: '65px'
				}}
			>
				<Typography
					component={'span'}
					color={'primary'}
					fontWeight={'700'}
					fontSize={'23px'}
				>
					TRUSTED CLIENTS AND PARTNERS
				</Typography>
				<ClientsIconsList/>
			</Container>
		</Box>
	)
}

export default HomeContent