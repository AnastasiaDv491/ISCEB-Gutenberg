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
import { useState} from '@wordpress/element'
import React, { forwardRef,setState } from 'react';


import {
	closestCenter,
	DndContext,
	DragOverlay,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import {
	arrayMove,
	SortableContext,
	sortableKeyboardCoordinates,
	verticalListSortingStrategy,
	useSortable,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities';


import { BannerItem } from './components/bannerItem';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

export const Item = forwardRef(({ id, ...props }, ref) => {
	return (
		<div {...props} ref={ref}>heee {id}</div>
	)
});

export default function Edit({ attributes, setAttributes }) {
	const {
		selectedPosts
	} = attributes;
	
	const [activeId, setActiveId] = useState(null);
	// const [items, setItems] = useState(['1', '2', '3']);
	const [items,setItems] = useState(selectedPosts);
	setAttributes({ selectedPosts: items});

	const {options, isLoaded} = useSelect(
		(select) => {
			const { getEntityRecords } = select('core');
			let postCollection = getEntityRecords('postType', 'page', { per_page: -1, status: 'publish' });
			let tagsCollection = getEntityRecords('taxonomy', 'post_tag', { per_page: -1 });


			postCollection?.forEach(post => {
				post.imgurl = select('core').getMedia(post.featured_media)?.media_details.sizes.medium_large.source_url;
				post.tagText = tagsCollection?.filter(tag => post.tags?.includes(tag.id)).map(tag => tag.name);

			});

			
			return {options: postCollection,isLoaded: true}
		}
	);

	function onSelectedPageChange(selectedPages) {
		let selectedPagesNumberParsed = selectedPages.map(post => { return parseInt(post) });

		// setState({selectedPosts: options.filter(post => selectedPagesNumberParsed.includes(post.id))});
		setItems(options.filter(post => selectedPagesNumberParsed.includes(post.id)));
		setAttributes({ selectedPosts: options.filter(post => selectedPagesNumberParsed.includes(post.id)) });
	}


	function SortableItem(props) {
		const {
			attributes,
			listeners,
			setNodeRef,
			transform,
			transition,
		} = useSortable({ id: props.id });

		const style = {
			transform: CSS.Transform.toString(transform),
			transition,
		};


		return (
			// <Item ref={setNodeRef} style={style} {...attributes} {...listeners}>
			// 	Hallo {id}
			// </Item>

			<BannerItem post={props.post} ref={setNodeRef} style={style} {...attributes} {...listeners}></BannerItem>
			// <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
			// 	{props.textContent} oetss
			// </div>
		);
	}


	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	function handleDragEnd(event) {
		const {active, over} = event;
		

		if (active.id !== over.id) {
			console.log("change");
		  setItems((items) => {
			const oldIndex = items.findIndex(obj => obj.id == active.id);
			const newIndex = items.findIndex(obj => obj.id == over.id);
			
			items[oldIndex].sortKey = newIndex;
			items[newIndex].sortKey = oldIndex;
			return arrayMove(items, oldIndex, newIndex); 
			;
		  });
		}
		console.log(selectedPosts,items);
		setAttributes({ selectedPosts: items});
		console.log(selectedPosts,items);
		setActiveId(null);

	  }

	function handleDragStart(event) {
		const {active} = event;
		setActiveId(active.id);
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

		<section {...useBlockProps({ className: "homepage-banners" })}  >
			<div className="container-banners">
				{/* <Sortable {...props} useDragOverlay={false} itemCount={5} /> */}

				< DndContext
					sensors={sensors}
					collisionDetection={closestCenter}
					onDragStart={handleDragStart}
					onDragEnd={handleDragEnd}
				>


					<SortableContext
						items={items}
						strategy={verticalListSortingStrategy}
					>
						{/*  */}


						{items?.map(post => <SortableItem post={post} key={post.id} id={post.id} />)}


					</SortableContext>
					<DragOverlay>
						{activeId ? <BannerItem id={activeId} /> : null}
					</DragOverlay>
					{/* <DragOverlay>
				{activeId ? <SortableItem id={activeId} post={post} key={post.id} /> : null}
			</DragOverlay> */}


				</DndContext >
			</div>
		</section>

	]
}
