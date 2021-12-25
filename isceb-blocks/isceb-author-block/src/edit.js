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
import { useBlockProps, InspectorControls, ColorPalette, MediaUpload } from '@wordpress/block-editor';
import { PanelBody, IconButton } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const {
		author,
		titleColor,
		authorImage,
		topic,
		date
	} = attributes;

	function onSelectAuthorImage(image) {
		//improve with right resolution 
		console.log(image);
		setAttributes({ authorImage: image.sizes.thumbnail.url });
	}

	function onTitleColourChange(color) {
		setAttributes({ titleColor: color });
	}

	function updateAuthor(event) {

		setAttributes({ author: event.target.value });
	}

	function updateTopic(topic) {
		setAttributes({ topic: topic.target.value });
	}

	function updateDate(date) {
		setAttributes({ date: date.target.value });

	}

	return ([
		<InspectorControls style={{ marginBottom: '40px' }}>

			<PanelBody title={'Font color settings'}>
				<p> Selet a title color </p>
				<ColorPalette value={titleColor}
					onChange={onTitleColourChange} />
			</PanelBody>
			<PanelBody title={'Author Image'}>
				<p>Select a  Bacgkround Image </p>
				<MediaUpload
					onSelect={onSelectAuthorImage}
					type="image"
					value={authorImage}
					render={({ open }) => (
						<IconButton
							className="editor-media-placeholder__button is-button is-default is-large"
							icon="upload"
							onClick={open}>
							Background Image
						</IconButton>
					)}
				/>
			</PanelBody>
		</InspectorControls>,
		<div { ...useBlockProps() }>
			<div class="isceb-standard-page-title-head">
				<input type="text" onChange={updateTopic} value={attributes.topic} placeholder="Post topic" class="isceb-standard-page-topic" />
				<input type="text" onChange={updateDate} value={attributes.date} placeholder="Post date" class="isceb-standard-page-date" />

			</div>
			<div class="isceb-standard-page-head-container">
				<input type="text" onChange={updateAuthor} value={attributes.author} style={{ color: titleColor }} placeholder="Name of the page's author" class="isceb-standard-page-author" />
				<img src={authorImage}
					style={{
						borderRadius: '50%',
						height: '60px',
						width: '60px',
						border: '5px solid #1F476B'
						// boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
					}}
					class="isceb-standard-page-author-img" />



			</div>
		</div>]);
}
