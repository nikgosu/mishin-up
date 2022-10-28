import React from 'react'
import {CardMedia} from "@mui/material"

const MyVideo = ({video}) => {
	return (
		<CardMedia
			component={'video'}
			image={video}
			autoPlay
			loop
			muted
			sx={{
				objectFit: 'cover',
				height: '100%',
				width: '100%',
				position: 'absolute',
				top: 0,
				left: 0
			}}
		/>
	)
}

export default MyVideo