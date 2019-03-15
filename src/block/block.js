
import Terminal from '../components/Terminal'
import Ace from 'react-ace'

import { registerBlockType } from '@wordpress/blocks'
import { Fragment } from '@wordpress/element'
import { PanelBody, SelectControl, TextControl } from '@wordpress/components'
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
		const updateTitle = ( value ) => setAttributes( { title: value } )
		const updateCode = ( value ) => setAttributes( { content: value } )

		const viewMode = (
			<Terminal>
				{ attributes.content ? attributes.content : '' }
			</Terminal>
		)

		const editMode = (
			<Fragment>

				<InspectorControls>
					<PanelBody title="Select language">
						<SelectControl
							id="gutermberg-language"
							options={ [
								{ label: 'PHP', value: 'php' },
							] }
						/>
					</PanelBody>

					<PanelBody title="Enter your title (e.g a filename)">
						<TextControl
							id="gutermberg-title"
							value={ attributes.value }
							onChange={ updateTitle }
						/>
					</PanelBody>
				</InspectorControls>

				<Ace
					mode="php"
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
			<Terminal>
				{ attributes.content ? attributes.content : '' }
			</Terminal>
		)
	},
} )
