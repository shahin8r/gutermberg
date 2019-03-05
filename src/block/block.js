import './style.scss'
import './editor.scss'

const { __ } = wp.i18n
const { registerBlockType } = wp.blocks

registerBlockType( 'cgb/block-gutermberg', {
	title: __( 'gutermberg' ),
	icon: 'shield',
	category: 'common',
	keywords: [
		__( 'terminal' ),
		__( 'embed' ),
		__( 'code' ),
	],

	edit: function( props ) {
		return (
			<div className={ props.className }>
				<p>— Hello from the backend.</p>
				<p>
					CGB BLOCK: <code>gutermberg</code> is a new Gutenberg block
				</p>
				<p>
					It was created via{ ' ' }
					<code>
						<a href="https://github.com/ahmadawais/create-guten-block">
							create-guten-block
						</a>
					</code>.
				</p>
			</div>
		)
	},

	save: function( props ) {
		return (
			<div>
				<p>— Hello from the frontend.</p>
				<p>
					CGB BLOCK: <code>gutermberg</code> is a new Gutenberg block.
				</p>
				<p>
					It was created via{ ' ' }
					<code>
						<a href="https://github.com/ahmadawais/create-guten-block">
							create-guten-block
						</a>
					</code>.
				</p>
			</div>
		)
	},
} )
