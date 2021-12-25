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
import { PanelBody, IconButton, SelectControl } from '@wordpress/components';
import { Component } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
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

export default class mySelectPosts extends Component {
	// Method for setting the initial state.
	static getInitialState(selectedPost) {
		return {
			posts: [],
			selectedPost: selectedPost,
			post: {},
		};
	}

	// Constructing our component. With super() we are setting everything to 'this'.
	// Now we can access the attributes with this.props.attributes
	constructor() {
		super(...arguments);
		// Maybe we have a previously selected post. Try to load it.
		this.state = this.constructor.getInitialState(this.props.attributes.selectedPost);
		// Bind so we can use 'this' inside the method.
		this.getOptions = this.getOptions.bind(this);
		// Load posts.
		this.getOptions();

		// Bind it.
		this.onChangeSelectPost = this.onChangeSelectPost.bind(this);
	}

	getOptions() {
			return (apiFetch({ path: '/wp/v2/pages' }).then((posts) => {
			if (posts && 0 !== this.state.selectedPost) {
				// If we have a selected Post, find that post and add it.
				const post = posts.find((item) => { return item.id == this.state.selectedPost });
				// This is the same as { post: post, posts: posts }
				this.setState({ post, posts });
			} else {
				this.setState({ posts });
			}
		}));
	}

	onChangeSelectPost( value ) {
		// Find the post
		const post = this.state.posts.find( ( item ) => { return item.id == parseInt( value ) } );
		// Set the state
		this.setState( { selectedPost: parseInt( value ), post } );
		// Set the attributes
		this.props.setAttributes( {
		  selectedPost: parseInt( value ),
		  title: post.title.rendered,
		  content: post.excerpt.rendered,
		  link: post.link,
		});
	  }

	render() {
		// Options to hold all loaded posts. For now, just the default.
		let options = [{ value: 0, label: __('Select a Post') }];
		let output = __('Loading Posts');
		this.props.className += ' loading';
		if (this.state.posts.length > 0) {
			const loading = __('We have %d posts. Choose one.');
			output = loading.replace('%d', this.state.posts.length);
			this.state.posts.forEach((post) => {
				options.push({ value: post.id, label: post.title.rendered });
			});
		} else {
			output = __('No posts found. Please create some first.');
		}

		 // Checking if we have anything in the object
		if( this.state.post.hasOwnProperty('title') ) {
			output = <div className="post">
			  <a href={ this.state.post.link }><h2 dangerouslySetInnerHTML={ { __html: this.state.post.title.rendered } }></h2></a>
			  <p dangerouslySetInnerHTML={ { __html: this.state.post.excerpt.rendered } }></p>
			  </div>;
			this.props.className += ' has-post';
		  } else {
			this.props.className += ' no-post';
		  }

		return [ // If we are focused on this block, create the inspector controls.
			!!this.props.isSelected && (<InspectorControls key='inspector'>
				<SelectControl
					// Selected value.
					value={this.props.attributes.selectedPost}
					onChange={this.onChangeSelectPost}
					label={__('Select a Post')}
					options={options} />
			</InspectorControls>
			),
			<div className={this.props.className}>{output}</div>
		]
	}
}



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
