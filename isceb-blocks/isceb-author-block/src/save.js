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
		<div {...useBlockProps.save({ className: "isceb-gutenberg-block-wrapper" })}>
			<div className="isceb-standard-page-head">
				<div className="isceb-standard-page-title-head-topic">
					<h6>Topic: {topic}</h6>

				</div>
				<div className="isceb-standard-page-date">
					<h6 >{date}</h6>
				</div>
			</div>

			<div className="isceb-standard-page-head-container test-class">
				<img src={authorImage}
					className="isceb-standard-page-author-img"
				/>
				<h6 className="isceb-standard-page-author">{author} </h6>

			</div>
		</div>
	);
}
