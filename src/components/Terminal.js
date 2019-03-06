import OSXControls from './window-controls/OSXControls'
import Code from './Code'
import { tomorrowNight } from 'react-syntax-highlighter/dist/styles/hljs'

const Wrapper = {
	background: tomorrowNight.hljs.background,
	borderRadius: '4px',
	margin: '1rem 0',
	maxWidth: '100%',
	padding: '10px',
}

const Terminal = ( { children } ) => {
	return (
		<div style={Wrapper}>
			<OSXControls />
			<Code
				style={ tomorrowNight }
				language="php"
			>
				{ children }
			</Code>
		</div>
	)
}

export default Terminal
