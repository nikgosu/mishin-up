import React from 'react'
import ImageListItem from "@mui/material/ImageListItem"
import ImageList from "@mui/material/ImageList"

const MyImageList = ({imageArr, onPhotoClick}) => {
	return (
		<ImageList
			variant="masonry"
			cols={3}
			gap={8}
			sx={{
				margin: 0,
				width: '80%',
				display: {xs: 'flex', md: 'block'},
				flexDirection: {xs: 'column'}
			}}
		>
			{imageArr.map((item) => (
				<ImageListItem key={item.url}>
					<img
						src={`${item.url}?w=248&fit=crop&auto=format`}
						srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
						alt={'dfs'}
						loading="lazy"
						onClick={() => onPhotoClick(item)}
					/>
				</ImageListItem>
			))}
		</ImageList>
	)
}

export default MyImageList