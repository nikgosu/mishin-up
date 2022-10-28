import React from 'react'
import {Box, FormControl, Typography} from "@mui/material"
import MyInput from "../UI/MyInput"
import Button from "@mui/material/Button"

const ContactForm = () => {
	return (
		<FormControl
			sx={{
				width: '90%',
				display: 'flex',
				flexDirection: 'column',
				padding: {xs: '15px', md: '40px'}
			}}
		>
			<Typography
				sx={{
					textAlign: 'center',
					paddingTop: '20px'
				}}
			>
				You’ll hear from us within 24 hours. What’s up?
			</Typography>
			<FormControl>
				<MyInput/>
			</FormControl>
			<Typography
				sx={{
					textAlign: 'center',
					marginTop: '15px'
				}}
			>
				How can we contact you? (phone/email)
			</Typography>
			<FormControl>
				<MyInput/>
			</FormControl>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					width: '100%',
					marginTop: '15px'
				}}
			>
				<Button
					variant={'contained'}
					sx={{
						color: 'white',
						borderRadius: '16px',
						width: '23%',
						backgroundColor: 'rgba(131,129,131,0.83)'
					}}
				>
					Submit
				</Button>
			</Box>
		</FormControl>
	)
}

export default ContactForm