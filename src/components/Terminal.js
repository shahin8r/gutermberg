import OSXControls from './window-controls/OSXControls'

const Terminal = ( { className } ) => {
	return (
		<div className={ className }>
			<div className="window-controls">
				<OSXControls />
			</div>
		</div>
	)
}

export default Terminal
