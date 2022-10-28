import React from 'react'
import {Container} from "@mui/material"
import {ICONS} from "../../consts/ICONS"
import MyIcon from "../UI/MyIcon"

const ClientsIconsList = () => {
	return (
		<Container
			maxWidth={"xl"}
			disableGutters={true}
			sx={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100%'
			}}
		>
			{ICONS.map(iconUrl => <MyIcon key={iconUrl} img={iconUrl}/>)}
		</Container>
	)
}

export default ClientsIconsList