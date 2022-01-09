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
import { useSelect } from '@wordpress/data';

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

	const currentDate = useSelect(
		(select) => {
			// TODO: parce the dat
			// console.log(select( 'core/editor' ));
			return select( 'core/editor' ).getEditedPostAttribute( 'date' );
			// console.log(select( 'core/editor' ).getEditedPostAttribute('date'));
		},[]
	);
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

	console.log(currentDate);

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
		<div {...useBlockProps({ className: "isceb-gutenberg-block-wrapper" })} >
			<div className="isceb-standard-page-head">
				<div className="isceb-standard-page-title-head-topic">
					<p>Topic: </p>
					<input type="text" onChange={updateTopic} value={topic} placeholder="Post topic" />
				</div>
				<div className="isceb-standard-page-date">
					{currentDate}
					{/* <input type="text" onChange={updateDate} value={date} placeholder="Post date" /> */}
				</div>
			</div>

			<div className="isceb-standard-page-head-container test-class">
				<img src={authorImage}
					className="isceb-standard-page-author-img"
				/>
				<input type="text"
					onChange={updateAuthor}
					value={author}
					style={{ color: titleColor }}
					placeholder="Name of the page's author"
					className="isceb-standard-page-author" />



			</div>
		</div>]);
}
