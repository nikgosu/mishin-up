import React from 'react'
import {Box} from "@mui/material"
import BackstageImageList from "../components/BackstageImageList"
import MyBigParagraph from "../components/UI/MyBigParagraph"

const Backstage = () => {

	return (
		<Box
			sx={{
				backgroundColor: 'rgb(3,17,16)',
				paddingTop: '150px',
			}}
		>
			<MyBigParagraph>
				BACKSTAGE PHOTOS
			</MyBigParagraph>
			<BackstageImageList/>
		</Box>
	)
}

export default Backstage