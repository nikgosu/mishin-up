import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Portfolio from "../pages/Portfolio"

const ComponentPreviews = () => {
	return (
		<Previews palette={<PaletteTree/>}>
			<ComponentPreview path="/Portfolio">
				<Portfolio/>
			</ComponentPreview>
		</Previews>
	)
}

export default ComponentPreviews