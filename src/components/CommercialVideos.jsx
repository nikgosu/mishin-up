import React from 'react'
import {Box} from "@mui/material"
import CommercialVideosHeader from "./CommercialVideosComponents/CommercialVideosHeader"
import CommercialVideosItem from "./CommercialVideosComponents/CommercialVideosItem"
import {YOUTUBE_VIDEOS} from "../consts/YOUTUBE_URLS"

const CommercialVideos = () => {
	return (
		<Box
			sx={{
				backgroundColor: 'rgb(3,17,16)',
				paddingTop: '100px'
			}}
		>
			<CommercialVideosHeader/>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					marginTop: '20px'
				}}
			>
				{YOUTUBE_VIDEOS.map(video =>
					<CommercialVideosItem
						key={video.img}
						img={video.img}
						url={video.url}
					>
						{video.name}
					</CommercialVideosItem>
				)}
			</Box>
		</Box>
	)
}

export default CommercialVideos