
import SyntaxHighlighter from 'react-syntax-highlighter'

const Code = ( { style, language, children } ) => {
	return (
		<SyntaxHighlighter
			language={ language }
			showLineNumbers={ false }
      style={ style }
		>
			{ children }
		</SyntaxHighlighter>
	)
}

export default Code
