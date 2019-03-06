
import SyntaxHighlighter from 'react-syntax-highlighter'

const Code = ( { style, language, children } ) => {
	return (
		<SyntaxHighlighter
			language={ language }
			showLineNumbers={ true }
			style={ style }
			className="code"
		>
			{ children }
		</SyntaxHighlighter>
	)
}

export default Code
