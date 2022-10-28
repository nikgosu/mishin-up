import React from 'react'
import Typography from "@mui/material/Typography"

const MySmallParagraph = ({fontSize, children}) => {
	return (
		<Typography
			color={'primary'}
			sx={{
				fontSize: {xs: '16px', md: fontSize},
				textAlign: 'center'
			}}
		>
			{children}
		</Typography>
	)
}

export default MySmallParagraph