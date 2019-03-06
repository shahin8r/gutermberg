
import Terminal from '../components/Terminal'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { Fragment } = wp.element
const { InspectorControls } = wp.editor
const { PanelBody, TextareaControl, TextControl } = wp.components

registerBlockType( 'gutermberg/block-gutermberg', {
	title: __( 'gutermberg' ),
	icon: 'shield',
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

	edit: ( { setAttributes, attributes } ) => {
		const updateTitle = ( value ) => setAttributes( { title: value } )
		const updateCode = ( value ) => setAttributes( { content: value } )

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title="Language">
						<select>
							<option>PHP</option>
						</select>
					</PanelBody>
					<PanelBody title="Title">
						<TextControl
							help="Enter your title (e.g a filename)"
							value={ attributes.value }
							onChange={ updateTitle }
						/>
					</PanelBody>
					<PanelBody title="Code">
						<TextareaControl
							help="Enter your code"
							value={ attributes.content }
							onChange={ updateCode }
						/>
					</PanelBody>
				</InspectorControls>

				<Terminal>
					{ attributes.content ? attributes.content : '' }
				</Terminal>
			</Fragment>
		)
	},

	save: () => {
		return null
	},
} )
