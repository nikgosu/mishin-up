import React from 'react'
import {Container, Typography} from "@mui/material"

const ContactInfo = () => {
	return (
		<Container
			maxWidth={'xl'}
			disableGutters={true}
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				paddingLeft: {xs: '0px', md: '20px'}
			}}
		>
			<Typography
				sx={{
					fontSize: '65px',
					fontWeight: 700,
					textAlign: 'center',
					verticalAlign: 'text-top'
				}}
			>
				GET IN TOUCH TODAY
			</Typography>
			<Typography
				color={'primary'}
				sx={{
					fontSize: '18px',
					marginTop: '45px'
				}}
			>
				(386) 882-2158
			</Typography>
			<Typography
				color={'primary'}
				sx={{
					fontSize: '18px'
				}}
			>
				RESPECTIVECOMPANY@GMAIL.COM
			</Typography>
		</Container>
	)
}

export default ContactInfo