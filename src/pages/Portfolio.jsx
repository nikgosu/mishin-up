import React from 'react'
import {Box} from "@mui/material"
import ContentItem from "../components/ContentItem"
import vid1 from '../assets/videos/backstage/C0232_3.mp4'
import vid2 from '../assets/videos/vid3.MP4'
import img1 from '../assets/img/backstage/jpeg/DSC0603.jpg'
import img2 from '../assets/img/backstage/jpeg/DSC0868.jpg'
import {useNavigate} from "react-router-dom"

const Portfolio = () => {

	const navigate = useNavigate()

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: {xs: 'column', md: 'row'},
				padding: {xs: '10px', md: '0 70px 140px 70px'},
				boxSizing: 'border-box',
				justifyContent: 'space-between',
				backgroundColor: 'rgb(3,17,16)',
				width: '100%'
			}}
		>
			<Box
				onClick={() => navigate('/commercial')}
				sx={{
					width: {xs: '99%', md: '45%'}
				}}
			>
				<ContentItem
					video={vid1}
					img={img1}
					alignItems={'center'}
					justifyContent={'center'}
					fontSize={'25px'}
					height={'700px'}
				>
					COMMERCIAL
				</ContentItem>
			</Box>
			<Box
				onClick={() => navigate('/reels')}
				sx={{
					width: {xs: '99%', md: '45%'},
					paddingTop: {xs: '15px', md: '0'}
				}}
			>
				<ContentItem
					video={vid2}
					img={img2}
					alignItems={'center'}
					justifyContent={'center'}
					fontSize={'25px'}
					height={'700px'}
				>
					REELS
				</ContentItem>
			</Box>
		</Box>
	)
}

export default Portfolio