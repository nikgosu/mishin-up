import React from 'react'
import {Box, Container} from "@mui/material"
import homeVideo from '../../assets/videos/vid2.MP4'
import MyVideo from "../UI/MyVideo"
import MyBigParagraph from "../UI/MyBigParagraph"
import MySmallParagraph from "../UI/MySmallParagraph"

const HomeVideoBlock = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				position: 'relative',
				height: '140vh',
				width: '100%',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<MyVideo video={homeVideo}/>
			<Container
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					zIndex: 40
				}}
			>
				<MyBigParagraph fontSize={'85px'}>
					WE MAKE
				</MyBigParagraph>
				<MyBigParagraph fontSize={'85px'}>
					SHAREABLE
				</MyBigParagraph>
				<MyBigParagraph fontSize={'85px'}>
					CONTENT.
				</MyBigParagraph>
				<Box sx={{
					marginTop: '40px'
				}}>
					<MySmallParagraph fontSize={'20px'}>
						In an attention-driven world, getting eyes on your brand is harder than ever.
					</MySmallParagraph>
					<MySmallParagraph fontSize={'20px'}>
						Respective makes it easy.
					</MySmallParagraph>
				</Box>
			</Container>
		</Box>
	)
}

export default HomeVideoBlock