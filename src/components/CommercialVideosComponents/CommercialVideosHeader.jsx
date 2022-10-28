import React from 'react'
import MyBigParagraph from "../UI/MyBigParagraph"
import {Box, Container} from "@mui/material"
import MySmallParagraph from "../UI/MySmallParagraph"

const CommercialVideosHeader = () => {
	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				marginTop: '30px'
			}}
		>
			<MyBigParagraph fontSize={'60px'}>
				COMMERCIAL VIDEOS
			</MyBigParagraph>
			<Box
				sx={{
					marginTop: '10px'
				}}
			>
				<MySmallParagraph>
					Here you can see my commercial fulfilled works...
				</MySmallParagraph>
			</Box>
		</Container>
	)
}

export default CommercialVideosHeader