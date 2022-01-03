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
import { SelectControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';


export default function Edit({ attributes, setAttributes }) {
	const {
		selectedPosts
	} = attributes;

	const options = useSelect(
		(select) => {
			const { getEntityRecords } = select('core');
			let postCollection = getEntityRecords('postType', 'post', { per_page: -1, status: 'publish' });
			let tagsCollection = getEntityRecords('taxonomy', 'post_tag', { per_page: -1 });


			postCollection?.forEach(post => {
				post.imgurl = select('core').getMedia(post.featured_media)?.media_details.sizes.medium_large.source_url;
				post.tagText = tagsCollection?.filter(tag => post.tags.includes(tag.id)).map(tag => tag.name);

			});
			return postCollection
		}
	);

	function onSelectedPageChange(selectedPages) {
		let selectedPagesNumberParsed = selectedPages.map(post => { return parseInt(post) });

		setAttributes({ selectedPosts: options.filter(post => selectedPagesNumberParsed.includes(post.id))});
	}

	return [
		<InspectorControls key='inspector'>
			<SelectControl
				multiple
				value={attributes.selectedPosts.map(post => { return post.id })}
				onChange={onSelectedPageChange}
				label={__('Select a Post')}
				options={options?.map(post => ({ label: post.title.rendered, value: post.id }))}
				className='isceb-gutenberg-select'
			/>
		</InspectorControls>
		,
		<section  {...useBlockProps({ className: "homepage-banners" })}>
			<div className="container-banners">
				{selectedPosts?.map(post =>
					<a href={post.link}>
						<div className="itemBanner" key={post.id} >
							<div key={post.id} className="bannerCardImage" style={{
								backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${post.imgurl})`,
							}} />
							{post?.tagText?.length > 0 &&
								<div className="bannerCardTag">
									<p className="bannerTagText">{post.tagText[0]}</p>
								</div>
							}

							<div className="bannerCardContent">
								<h3 className="bannerCardTitle">{post.title.rendered}</h3>
								<p className="bannerCardDescription">{post.excerpt.raw}</p>
								<button className="bannerCardButton">More Info</button>
							</div>
						</div>
					</a>
				)}
			</div>
		</section >
	]
}
