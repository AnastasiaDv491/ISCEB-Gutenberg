/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('isceb-blocks/news-block', {
    /**
     * @see ./edit.js
     */
    edit: Edit,

    /**
     * @see ./save.js
     */
    save,
    attributes: {
        author: {
            type: 'string'
        },
        authorImage: {
            type: 'string',
            default: null
        },
        titleColor: {
            type: 'string',
            default: 'red'
        },
        topic: {
            type: 'string',
            default: null
        },
        selectedPost: {
            type: 'number',
            default: 0,
        },
        selectedPosts: {
            type: 'array',
            default: [],
        },
        align: {
            type: 'string',
            default: 'full',
        },
        subheading: {
            type: 'string',
        },
        description: {
            type: 'string',
        }

    },
    supports: {
        align: true,
        alignWide: true,
    },
    getEditWrapperProps(attributes) {
        return {
            'data-align': 'full'
        };
    },
});
