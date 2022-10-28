import React from 'react'
import {Box} from "@mui/material"
import SocialIconsBar from "./SocialIconsBar"
import ContactForm from "./ContactForm"
import ContactInfo from "./ContactInfo"


const Footer = () => {
	return (
		<Box
			sx={{
				width: '100%',
				backgroundColor: 'rgba(0,0,0,0.95)',
				color: 'white'
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: {xs: 'column', md: 'row'},
					justifyContent: 'space between',
					paddingTop: '40px'
				}}
			>
				<ContactInfo/>
				<ContactForm/>
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center'
				}}
			>
				<SocialIconsBar/>
			</Box>
		</Box>
	)
}

export default Footer