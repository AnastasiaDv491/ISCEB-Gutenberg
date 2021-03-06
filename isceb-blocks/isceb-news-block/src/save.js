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
import { useBlockProps, RichText } from '@wordpress/block-editor';


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
		selectedPosts,
		subheading,
		description
	} = attributes;

	return (
		<div className="wrapper isceb-homepage-wrapper" id="full-width-page-wrapper">

			<div className="container-fluid" id="content">
				<div className="mainMessage">

					<RichText.Content
						tagName="h1"
						className='isceb-news-block-heading-h1'
						value={subheading}
					/>
					<RichText.Content
						tagName="p"
						className='isceb-news-block-heading-p'
						value={description}
					/>
					
				</div>

				<section  {...useBlockProps.save({ className: "homepage-banners" })}>
					<div className="container-banners">
						{selectedPosts?.map(post =>
							<a href={post.link}>
								<div className="itemBanner" key={post.id} >
									<div key={post.id} className="bannerCardImage" style={{
										backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${post.imgurl})`,
									}}></div>

									{post?.tagText?.length > 0 &&
										<div className="bannerCardTag">
											<p className="bannerTagText">{post.tagText[0]}</p>
										</div>
									}
									<div className="bannerCardContent">
										<h3 className="bannerCardTitle">{post.title.rendered}</h3>
										<p className="bannerCardDescription">{post.excerpt.raw}</p>
										<button className="bannerCardButton" >More Info</button>
									</div>
								</div>
							</a>
						)}
					</div>
				</section >
			</div>
		</div>

	);
}
