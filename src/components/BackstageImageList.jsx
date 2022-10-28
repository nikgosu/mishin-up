import * as React from 'react'
import {useState} from 'react'
import Box from '@mui/material/Box'
import {BACKSTAGE_PHOTOS} from "../consts/BACKSTAGE_PHOTOS"
import MyModal from "./UI/MyModal"
import MyImage from "./UI/MyImage"
import MyCarousel from "./UI/MyCarousel"
import MyImageList from "./UI/MyImageList"


const BackstageImageList = () => {

	const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
	const [isOpen, setIsOpen] = useState(false)
	const handleOpen = () => setIsOpen(true)
	const handleClose = () => setIsOpen(false)

	const handlePhotoClick = async (photo) => {
		await setCurrentPhotoIndex(BACKSTAGE_PHOTOS.findIndex(el => el.name === photo.name))
		await handleOpen()
	}

	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				paddingTop: '40px'
		}}
		>
			<MyImageList
				imageArr={BACKSTAGE_PHOTOS}
				onPhotoClick={handlePhotoClick}
			/>
			<MyModal
				isOpen={isOpen}
				onClose={handleClose}
			>
				<>
					<MyCarousel
						setCurrentPhotoIndex={setCurrentPhotoIndex}
						currentPhotoIndex={currentPhotoIndex}
						arr={BACKSTAGE_PHOTOS}
					>
						{BACKSTAGE_PHOTOS.map((photo, i) =>
							<Box
								key={photo.url}
								hidden={i !== currentPhotoIndex}
								sx={{
									height: '100%',
									width: '100%',
								}}
							>
								<MyImage
									key={photo.url}
									img={photo.url}
									objectFit={'contain'}
								/>
							</Box>
						)}
					</MyCarousel>
				</>
			</MyModal>
		</Box>
	);
}

export default BackstageImageList
