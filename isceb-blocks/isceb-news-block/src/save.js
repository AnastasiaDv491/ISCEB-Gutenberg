/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';
import apiFetch from '@wordpress/api-fetch';


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

// GET
apiFetch({ path: '/wp/v2/posts' }).then((posts) => {
	console.log(posts);
});

// POST
apiFetch({
	path: '/wp/v2/posts/1',
	method: 'POST',
	data: { title: 'Hello World' },
}).then((res) => {
	console.log(res);
});
export default function save({ attributes }) {
	const {
		aPost,
	} = attributes;
	console.log(aPost);

	return (
		<section  {...useBlockProps.save({className:"homepage-banners"})}>
			<div class="container-banners">
			</div>
			
			<div>  hello
			{aPost}


			</div>
		</section >
	);
}
