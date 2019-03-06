
import Terminal from '../components/Terminal'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { Fragment } = wp.element
const { BaseControl, SelectControl, TextareaControl, TextControl } = wp.components

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

	edit: ( { setAttributes, attributes, isSelected } ) => {
		const updateTitle = ( value ) => setAttributes( { title: value } )
		const updateCode = ( value ) => setAttributes( { content: value } )

		const viewMode = <Terminal>{ attributes.content ? attributes.content : '' }</Terminal>
		const editMode = (
			<Fragment>
				<BaseControl
					id="gutermberg-language"
					label="Select language"
				>
					<SelectControl
						id="gutermberg-language"
						options={ [
							{ label: 'PHP', value: 'php' },
						] }
					/>
				</BaseControl>

				<BaseControl
					id="gutermberg-title"
					label="Enter your title (e.g a filename)"
				>
					<TextControl
						id="gutermberg-title"
						value={ attributes.value }
						onChange={ updateTitle }
					/>
				</BaseControl>

				<BaseControl
					id="gutermberg-code"
					label="Enter your code"
				>
					<TextareaControl
						id="gutermberg-code"
						value={ attributes.content }
						onChange={ updateCode }
					/>
				</BaseControl>

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
