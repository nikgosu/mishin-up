import React from 'react'
import Typography from "@mui/material/Typography"

const MyBigParagraph = ({fontSize, children}) => {
	return (
		<Typography
			component={'p'}
			color={'secondary'}
			sx={{
				fontSize: {xs: '30px',md: fontSize},
				fontWeight: 700,
				textShadow: '5px 5px 5px rgba(0, 0, 0, 0.50)',
				lineHeight: 0.9,
				textAlign: 'center'
			}}
		>
			{children}
		</Typography>
	)
}

export default MyBigParagraph