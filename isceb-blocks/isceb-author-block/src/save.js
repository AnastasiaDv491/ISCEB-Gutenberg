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

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const {
		authorImage,
		author,
		topic,
		date
	} = attributes;
	return (
		<div {...useBlockProps.save()}>
			<div class="isceb-standard-page-title-head-topic">
				<h6>Topic: {topic}</h6>

			</div>
			<div class="isceb-standard-page-date">
				<h6 >{date}</h6>
			</div>
			<div class="isceb-standard-page-head-container">
				<img src={authorImage} style={{
					borderRadius: '50%',
					height: '60px',
					width: '60px',
					border: '5px solid #1F476B'
					// boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
				}}
					class="isceb-standard-page-author-img"
				/>
				<h6 class="isceb-standard-page-author">{author} </h6>

			</div>
		</div>
	);
}
