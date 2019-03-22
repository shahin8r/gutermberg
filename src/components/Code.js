import SyntaxHighlighter from 'react-syntax-highlighter'

const Code = ( { style, language, showLineNumbers, children } ) => {
	style.hljs.margin = 0
	style.hljs.padding = '10px'

	const codeStyle = {
		fontFamily: 'monospace',
		fontSize: 14,
		margin: 0,
		padding: 0,
		lineHeight: '1.5',
	}

	const preStyle = {
		fontFamily: 'monospace',
		fontSize: 14,
		whiteSpace: 'pre',
		lineHeight: '1.5',
	}

	return (
		<SyntaxHighlighter
			language={ language }
			showLineNumbers={ showLineNumbers }
			codeTagProps={ { style: codeStyle } }
			customStyle={ preStyle }
			style={ style }
		>
			{ children }
		</SyntaxHighlighter>
	)
}

export default Code
