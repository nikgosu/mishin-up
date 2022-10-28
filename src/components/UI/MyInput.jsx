import {InputBase, styled} from "@mui/material"

const MyInput = styled(InputBase)(({ theme }) => ({
	'label + &': {
		marginTop: theme.spacing(3),
	},
	'& .MuiInputBase-input': {
		borderRadius: 16,
		position: 'relative',
		backgroundColor: '#fcfcfb',
		border: '1px solid #ced4da',
		fontSize: 16,
		width: '100%',
		padding: '10px 12px',
		// transition: theme.transitions.create([
		// 	'border-color',
		// 	'background-color',
		// 	'box-shadow',
		// ]),
		// Use the system font instead of the default Roboto font.
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		]
	},
}));

export default MyInput