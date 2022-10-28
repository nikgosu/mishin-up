import * as React from 'react'
import Modal from '@mui/material/Modal'
import {Box} from "@mui/material"

const MyModal = ({isOpen, onClose, children}) => {

	return (
			<Box
				sx={{
					height: '100vh',
					width: '100vw',
					color: 'transparent'
				}}
				onClick={onClose}
				hidden
			>
				<Modal
					open={isOpen}
					onClose={onClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					{children}
				</Modal>
			</Box>
	);
}

export default MyModal