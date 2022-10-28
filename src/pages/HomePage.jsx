import React from 'react'
import {Box} from "@mui/material"
import HomeVideoBlock from "../components/HomeComponents/HomeVideoBlock"
import HomeContent from "../components/HomeComponents/HomeContent"

const HomePage = () => {
	return (
		<Box
			sx={{
				margin: 0,
				width: '100%'
			}}
		>
			<HomeVideoBlock/>
			<HomeContent/>
		</Box>
	)
}

export default HomePage