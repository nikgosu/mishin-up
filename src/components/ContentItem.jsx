import React, {useState} from 'react'
import {Box, Container} from "@mui/material"
import MyVideo from "./UI/MyVideo"
import MyImage from "./UI/MyImage"
import Typography from "@mui/material/Typography"

const ContentItem = ({video, img, children, alignItems, justifyContent, fontSize, height}) => {

	const [isHover, setIsHover] = useState(false)

	const handleEnter = () => {
		video && setIsHover(true)
	}

	const handleLeave = () => {
		video &&setIsHover(false)
	}

	return (
		<Container
			maxWidth={"xl"}
			disableGutters={true}
			sx={{
				display: 'flex',
				position: 'relative',
				height: video ? height : {sx: '200px', md: height},
				width: '100%',
				alignItems: alignItems,
				justifyContent: justifyContent,
				padding: '60px 40px'
			}}
			onMouseEnter={handleEnter}
			onMouseLeave={handleLeave}
		>
			{video &&
				<Box hidden={!isHover}>
					<MyVideo video={video}/>
				</Box>
			}
			<Box hidden={isHover}>
				<MyImage img={img}/>
			</Box>
			<Typography
				color={'secondary'}
				sx={{
					zIndex: 40,
					fontSize: video ? fontSize: {xs: '20px', md: fontSize},
					fontWeight: 700
				}}
			>
				{children}
			</Typography>
		</Container>
	)
}

export default ContentItem