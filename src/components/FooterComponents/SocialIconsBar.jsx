import React from 'react'
import MySocialIcon from "../UI/MySocialIcon"
import {Box} from "@mui/material"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TikTokIcon from '../UI/Icons/TiTokIcon'

const SocialIconsBar = () => {
	return (
		<Box
			sx={{
				paddingTop: '50px',
				paddingBottom: '200px',
				display: 'flex',
				flexWrap: 'wrap',
				height: '100%',
				width: {xs: '80%', md: '40%'},
				justifyContent: {xs: 'center', md: 'space-between'},
			}}
		>
			<MySocialIcon>
				<InstagramIcon
					fontSize={'large'}
				/>
			</MySocialIcon>
			<MySocialIcon>
				<TwitterIcon
					fontSize={'large'}
				/>
			</MySocialIcon>
			<MySocialIcon>
				<YouTubeIcon
					fontSize={'large'}
				/>
			</MySocialIcon>
			<MySocialIcon>
				<LinkedInIcon
					fontSize={'large'}
				/>
			</MySocialIcon>
			<MySocialIcon>
				<TikTokIcon
					fontSize={'large'}
				/>
			</MySocialIcon>
		</Box>
	)
}

export default SocialIconsBar