import SyntaxHighlighter from 'react-syntax-highlighter'

const Code = ( { style, language, children } ) => {
	style.hljs.margin = 0
	style.hljs.padding = '10px'

	return (
		<SyntaxHighlighter
			language={ language }
			showLineNumbers={ false }
			codeTagProps={ { style: { fontSize: 14, margin: 0, padding: 0 } } }
			style={ style }
		>
			{ children }
		</SyntaxHighlighter>
	)
}

export default Code
