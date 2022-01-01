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

/**
 * Inspiration:
 * https://www.ibenic.com/create-gutenberg-block-displaying-post/
 * https://rudrastyh.com/gutenberg/get-posts-in-dynamic-select-control.html
 */

// export default class mySelectPosts extends Component {
// 	// Method for setting the initial state.
// 	static getInitialState(selectedPost) {
// 		return {
// 			posts: [],
// 			selectedPost: selectedPost,
// 			post: {},
// 		};
// 	}

// 	// Constructing our component. With super() we are setting everything to 'this'.
// 	// Now we can access the attributes with this.props.attributes
// 	constructor() {
// 		super(...arguments);
// 		// Maybe we have a previously selected post. Try to load it.
// 		this.state = this.constructor.getInitialState(this.props.attributes.selectedPost);
// 		// Bind so we can use 'this' inside the method.
// 		this.getOptions = this.getOptions.bind(this);
// 		// Load posts.
// 		this.getOptions();

// 		// Bind it.
// 		this.onChangeSelectPost = this.onChangeSelectPost.bind(this);
// 	}

// 	getOptions() {
// 			return (apiFetch({ path: '/wp/v2/pages' }).then((posts) => {
// 			if (posts && 0 !== this.state.selectedPost) {
// 				// If we have a selected Post, find that post and add it.
// 				const post = posts.find((item) => { return item.id == this.state.selectedPost });
// 				// This is the same as { post: post, posts: posts }
// 				this.setState({ post, posts });
// 			} else {
// 				this.setState({ posts });
// 			}
// 		}));
// 	}

// 	onChangeSelectPost( value ) {
// 		// Find the post
// 		const post = this.state.posts.find( ( item ) => { return item.id == parseInt( value ) } );
// 		// Set the state
// 		this.setState( { selectedPost: parseInt( value ), post } );
// 		// Set the attributes
// 		this.props.setAttributes( {
// 		  selectedPost: parseInt( value ),
// 		  title: post.title.rendered,
// 		  content: post.excerpt.rendered,
// 		  link: post.link,
// 		});
// 	  }

// 	render() {
// 		// Options to hold all loaded posts. For now, just the default.
// 		let options = [{ value: 0, label: __('Select a Post') }];
// 		let output = __('Loading Posts');

// 		if (this.state.posts.length > 0) {
// 			const loading = __('We have %d posts. Choose one.');
// 			output = loading.replace('%d', this.state.posts.length);
// 			this.state.posts.forEach((post) => {
// 				options.push({ value: post.id, label: post.title.rendered });
// 			});
// 		} else {
// 			output = __('No posts found. Please create some first.');
// 		}

// 		 // Checking if we have anything in the object
// 		if( this.state.post.hasOwnProperty('title') ) {
// 			output = <div className="post">
// 			  <a href={ this.state.post.link }><h2 dangerouslySetInnerHTML={ { __html: this.state.post.title.rendered } }></h2></a>
// 			  <p dangerouslySetInnerHTML={ { __html: this.state.post.excerpt.rendered } }></p>
// 			  </div>;

// 		  } 
// 		return [ // If we are focused on this block, create the inspector controls.
// 			<InspectorControls key='inspector'>
// 				<SelectControl
// 					// Selected value.
// 					value={this.props.attributes.selectedPost}
// 					onChange={this.onChangeSelectPost}
// 					label={__('Select a Post')}
// 					options={options} />
// 					<PostsDropdownControl  label="Title" metaKey="misha_plugin_seo_title"/>
// 			</InspectorControls>
// 			,

// 			<div  >{output}</div>
// 		]
// 	}
// }



export default function Edit({ attributes, setAttributes }) {
	const {
		selectedPosts
	} = attributes;

	let postCollection = [];
	let posts = [];
	let tagsCollection = [];
	let test = [];


	const options = useSelect(
		(select) => {
			postCollection = select('core').getEntityRecords('postType', 'post', { per_page: -1, status: 'publish' });
			tagsCollection = select('core').getEntityRecords('taxonomy', 'post_tag', { per_page: -1 });
			// tagsCollection = select("core/editor").getEditedPostAttribute("tags");

			let mediaCollection = [];

			postCollection?.forEach(post => {
				post.imgurl = select('core').getMedia(post.featured_media)?.media_details.sizes.medium_large.source_url;
				post.tagText = tagsCollection?.filter(tag => post.tags.includes(tag.id)).map(tag => tag.name);
				// tagsCollection?.forEach(tag => {
				// 	if (post.tags[0] == tag.id) {
				// 		console.log(tag.name);
				// 	}
				// })

			});
			return postCollection
		}
	);

	console.log(tagsCollection);
	console.log(postCollection);



	function onSelectedPageChange(selectedPages) {
		let selectedPagesNumberParsed = selectedPages.map(post => { return parseInt(post) });

		posts = postCollection.filter(post => selectedPagesNumberParsed.includes(post.id));

		console.log(selectedPosts);

		// let postIds = posts.map(post => {return post.id});
		setAttributes({ selectedPosts: posts });
	}

	return [
		<InspectorControls key='inspector' className='isceb-gutenberg-select'>
			<SelectControl
				multiple
				value={attributes.selectedPosts.map(post => { return post.id })}
				onChange={onSelectedPageChange}
				label={__('Select a Post')}
				options={options?.map(post => ({ label: post.title.rendered, value: post.id }))}
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
								<div class="bannerCardTag">
									<p class="bannerTagText">{post.tagText[0]}</p>
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

// const PostsDropdownControl = compose(
// 	// withDispatch allows to save the selected post ID into post meta
// 	withDispatch(function (dispatch, props) {
// 		console.log(props);
// 		return {
// 			setMetaValue: function (metaValue) {
// 				dispatch('core/editor').editPost(
// 					{ meta: { [props.metaKey]: metaValue } }
// 				);
// 				console.log(metaValue);
// 				console.log(props.metaKey);
// 			}
// 		}
// 	}),
// 	// withSelect allows to get posts for our SelectControl and also to get the post meta value
// 	withSelect(function (select, props) {
// 		console.log(select('core/editor').getEditedPostAttribute('meta'));
// 		return {
// 			posts: select('core').getEntityRecords('postType', 'page'),
// 			metaValue: select('core/editor').getEditedPostAttribute('meta')[props.metaKey],
// 		}
// 	}))(function (props) {

// 		// options for SelectControl
// 		var options = [];

// 		console.log(props.posts);

// 		// if posts found
// 		if (props.posts) {
// 			options.push({ value: 0, label: 'Select something' });
// 			props.posts.forEach((post) => { // simple foreach loop
// 				options.push({ value: post.id, label: post.title.rendered });
// 			});
// 		} else {
// 			options.push({ value: 0, label: 'Loading...' })
// 		}

// 		console.log(props);

// 		return <SelectControl
// 			onChange={function (content) {
// 				console.log("hhh");
// 				console.log(content);
// 				props.setMetaValue(content);
// 			}}
// 			label={__('Select a Post')}
// 			options={options}
// 			value={props.metaValue}
// 		/>;


// 	}

// 	);



// /**
//  * The edit function describes the structure of your block in the context of the
//  * editor. This represents what the editor will render when the block is used.
//  *
//  * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
//  *
//  * @return {WPElement} Element to render.
//  */
// export default function Edit({ attributes, setAttributes }) {
// 	const {
// 		author,
// 		titleColor,
// 		authorImage,
// 		topic,
// 		date,

// 	} = attributes;

// 	function onSelectAuthorImage(image) {
// 		//improve with right resolution 
// 		console.log(image);
// 		setAttributes({ authorImage: image.sizes.thumbnail.url });
// 	}

// 	function onTitleColourChange(color) {
// 		setAttributes({ titleColor: color });
// 	}

// 	function updateAuthor(event) {

// 		setAttributes({ author: event.target.value });
// 	}

// 	function updateTopic(topic) {
// 		setAttributes({ topic: topic.target.value });
// 	}

// 	function updateDate(date) {
// 		setAttributes({ date: date.target.value });

// 	}

// 	return ([
// 		<InspectorControls style={{ marginBottom: '40px' }}>

// 			<PanelBody title={'Font color settings'}>
// 				<p> Selet a title color </p>
// 				<ColorPalette value={titleColor}
// 					onChange={onTitleColourChange} />
// 			</PanelBody>
// 			<PanelBody title={'Author Image'}>
// 				<p>Select a  Bacgkround Image </p>
// 				<MediaUpload
// 					onSelect={onSelectAuthorImage}
// 					type="image"
// 					value={authorImage}
// 					render={({ open }) => (
// 						<IconButton
// 							className="editor-media-placeholder__button is-button is-default is-large"
// 							icon="upload"
// 							onClick={open}>
// 							Background Image
// 						</IconButton>
// 					)}
// 				/>
// 			</PanelBody>
// 		</InspectorControls>,
// 		<div {...useBlockProps()} class="isceb-gutenberg-block-wrapper">
// 			<div class="isceb-standard-page-title-head-topic">
// 				<p>Topic: </p>
// 				<input type="text" onChange={updateTopic} value={attributes.topic} placeholder="Post topic" />
// 			</div>
// 			<div class="isceb-standard-page-date">
// 				<input type="text" onChange={updateDate} value={attributes.date} placeholder="Post date" />
// 			</div>
// 			<div class="isceb-standard-page-head-container">
// 				<input type="text" onChange={updateAuthor} value={attributes.author} style={{ color: titleColor }} placeholder="Name of the page's author" class="isceb-standard-page-author" />
// 				<img src={authorImage}
// 					style={{
// 						borderRadius: '50%',
// 						height: '60px',
// 						width: '60px',
// 						border: '5px solid #1F476B'
// 						// boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
// 					}}
// 					class="isceb-standard-page-author-img" />



// 			</div>
// 		</div>]);
// }
