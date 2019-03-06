import Styled from 'styled-components'

import OSXControls from './window-controls/OSXControls'
import Code from './Code'
import { tomorrowNight } from 'react-syntax-highlighter/dist/styles/hljs'

const Wrapper = Styled.div`
  background: ${ tomorrowNight.hljs.background };
  border-radius: 4px;
  margin: 1em;
  max-width: 100%;
  padding: 10px;
`

const Terminal = ( { children } ) => {
	return (
		<Wrapper>
			<OSXControls />
			<Code
				style={ tomorrowNight }
				language="php"
			>
				{ children }
			</Code>
		</Wrapper>
	)
}

export default Terminal
