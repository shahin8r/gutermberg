
import Terminal from '../components/Terminal'
import Ace from 'react-ace'

import { registerBlockType } from '@wordpress/blocks'
import { Fragment } from '@wordpress/element'
import { PanelBody, SelectControl, TextControl, CheckboxControl } from '@wordpress/components'
import { InspectorControls } from '@wordpress/editor'
import { __ } from '@wordpress/i18n'

import 'brace/mode/php'
import 'brace/theme/tomorrow_night'

registerBlockType( 'gutermberg/block-gutermberg', {
	title: __( 'Gutermberg' ),
	icon: 'editor-code',
	category: 'common',
	attributes: {
		content: {
			type: 'string',
		},
	},
	keywords: [
		__( 'terminal' ),
		__( 'embed' ),
		__( 'code' ),
	],

	edit: ( { setAttributes, attributes, isSelected } ) => {
		const updateTitle = ( title ) => setAttributes( { title: title } )
		const updateCode = ( code ) => setAttributes( { content: code } )
		const updateLanguage = ( language ) => setAttributes( { language: language } )
		const updateShowLineNumbers = ( showLineNumbers ) => setAttributes( { showLineNumbers: showLineNumbers } )

		const viewMode = (
			<Terminal
				showLineNumbers={ attributes.showLineNumbers || false }
				language={ attributes.language || 'php' }
				title={ attributes.title }
			>
				{ attributes.content ? attributes.content : '' }
			</Terminal>
		)

		const editMode = (
			<Fragment>

				<InspectorControls>
					<PanelBody title="Enter your title (e.g a filename)">
						<TextControl
							id="gutermberg-title"
							value={ attributes.title }
							onChange={ updateTitle }
						/>
					</PanelBody>

					<PanelBody title="Select language">
						<SelectControl
							id="gutermberg-language"
							value={ attributes.language || 'php' }
							options={ [
								{ label: 'PHP', value: 'php' },
								{ label: 'JavaScript', value: 'javascript' },
								{ label: 'Bash', value: 'bash' },
								{ label: 'CSS', value: 'css' },
								{ label: 'Dockerfile', value: 'dockerfile' },
							] }
							onChange={ updateLanguage }
						/>
					</PanelBody>

					<PanelBody>
						<CheckboxControl
							label="Show line numbers"
							checked={ attributes.showLineNumbers || false }
							onChange={ updateShowLineNumbers }
						/>
					</PanelBody>
				</InspectorControls>

				<Ace
					mode={ attributes.language || 'php' }
					theme="tomorrow_night"
					value={ attributes.content }
					onChange={ updateCode }
					fontSize={ 14 }
					width="100%"
				/>

			</Fragment>
		)

		return isSelected ? editMode : viewMode
	},

	save: ( { attributes } ) => {
		return (
			<Terminal
				showLineNumbers={ attributes.showLineNumbers || false }
				language={ attributes.language || 'php' }
				title={ attributes.title }
			>
				{ attributes.content ? attributes.content : '' }
			</Terminal>
		)
	},
} )
