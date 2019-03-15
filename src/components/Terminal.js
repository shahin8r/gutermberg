import OSXControls from './window-controls/OSXControls'
import Code from './Code'
import { tomorrowNight } from 'react-syntax-highlighter/dist/styles/hljs'

const wrapperStyle = {
	display: 'inline-block',
	maxWidth: '100%',
	width: '800px',
	background: tomorrowNight.hljs.background,
	borderRadius: '4px',
	margin: '1rem 0',
	padding: '5px 10px 10px 10px',
	lineHeight: '100%',
}

const Terminal = ( { language, children } ) => {
	return (
		<div style={ wrapperStyle }>
			<OSXControls />
			<Code
				style={ tomorrowNight }
				language={ language }
			>
				{ children }
			</Code>
		</div>
	)
}

export default Terminal
