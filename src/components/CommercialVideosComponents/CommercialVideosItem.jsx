import React, {useState} from 'react'
import ContentItem from "../ContentItem"
import {Box} from "@mui/material"
import MyModal from "../UI/MyModal"
import ReactPlayer from 'react-player'

const CommercialVideosItem = ({img, children, url}) => {

	const [isOpen, setIsOpen] = useState(false);
	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	return (
		<Box
			sx={{
				width: {xs: '100%', md: '80%'},
				marginTop: '20px'
			}}
		>
			<Box
				onClick={handleOpen}
			>
				<ContentItem
					img={img}
					height={'600px'}
					justifyContent={'center'}
					alignItems={'center'}
					fontSize={'40px'}
				>
					{children}
				</ContentItem>
			</Box>
			<MyModal
				isOpen={isOpen}
				onClose={handleClose}
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100vw',
						height: '100%'
					}}
				>
					<Box
						sx={{
							height: {xs: '35vh', md: '85vh'},
							width: {xs: '100vw', md: '70vw'},
						}}
					>
						<ReactPlayer
							height={'100%'}
							width={'100%'}
							controls={true}
							url={url}
						/>
					</Box>
				</Box>
			</MyModal>
		</Box>
	)
}

export default CommercialVideosItem