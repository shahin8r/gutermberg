import './style.scss'
import './editor.scss'
import Terminal from '../components/Terminal'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

registerBlockType( 'gutermberg/block-gutermberg', {
	title: __( 'gutermberg' ),
	icon: 'shield',
	category: 'common',
	keywords: [
		__( 'terminal' ),
		__( 'embed' ),
		__( 'code' ),
	],

	edit: ( { className } ) => {
		return (
			<Terminal className={ className } />
		)
	},

	save: () => {
		return (
			<Terminal />
		)
	},
} )
