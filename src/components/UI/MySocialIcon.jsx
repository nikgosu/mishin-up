import React from 'react'
import IconButton from "@mui/material/IconButton"

const MySocialIcon = ({children}) => {
	return (
		<IconButton
			color={"primary"}
			sx={{
				width: {xs: '120px', md: '85px'},
				height: '50px',
				border: '0.5px solid white',
				borderRadius: '20px',
				margin: '10px'
			}}
		>
			{children}
		</IconButton>
	)
}

export default MySocialIcon