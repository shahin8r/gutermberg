import OSXControls from './window-controls/OSXControls'
import Code from './Code'
import Topbar from './Topbar'
import { tomorrowNight } from 'react-syntax-highlighter/dist/styles/hljs'

const wrapperStyle = {
	display: 'inline-block',
	overflow: 'hidden',
	fontFamily: 'monospace',
	maxWidth: '100%',
	width: '800px',
	background: tomorrowNight.hljs.background,
	borderRadius: '4px',
	margin: '1rem 0',
	padding: 0,
	lineHeight: '1.5rem',
}

const Terminal = ( { language, title, showLineNumbers, children } ) => {
	return (
		<div style={ wrapperStyle }>
			<Topbar title={ title }>
				<OSXControls />
			</Topbar>
			<Code
				style={ tomorrowNight }
				language={ language }
				showLineNumbers={ showLineNumbers }
			>
				{ children }
			</Code>
		</div>
	)
}

export default Terminal
