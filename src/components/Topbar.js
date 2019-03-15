const topbarStyle = {
	display: 'flex',
	position: 'relative',
	lineHeight: '1.5rem',
	color: '#aaa',
}

const columnsStyle = {
	flex: 1,
}

const titleStyle = {
	fontSize: 12,
	textAlign: 'center',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	...columnsStyle,
}

const Topbar = ( { title, children } ) => {
	return (
		<div style={ topbarStyle }>
			<div style={ columnsStyle }>
				{ children }
			</div>
			<div style={ titleStyle }>
				<span title={ title }>{ title }</span>
			</div>
			<div style={ columnsStyle }>
			</div>
		</div>
	)
}

export default Topbar
