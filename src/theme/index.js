import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
	status: {
		danger: '#e53e3e',
	},
	palette: {
		primary: {
			main: '#dadada',
			darker: '#ffffff',
		},
		neutral: {
			main: '#f8f8f8',
			contrastText: '#fff',
		},
		secondary: {
			main: '#f8f8f8',
		},
		lightSec: {
			main: '#dcdbdb'
		}
	},
	components: {
		MuiMenu: {
			styleOverrides: {
				root: {
					width: '100vw',
					left: "0px"
				},
				paper: {
					width: '100%',
					maxHeight: 'unset',
					maxWidth: 'unset',
				},
				list: {
					backgroundColor: 'rgba(0,0,0,0.84)',
					width: '100%',
					left: '0px'
				},
			}
		},
		MuiMenuItem: {
			styleOverrides: {
				root: {
					color: 'white'
				}
			}
		}
	}
});