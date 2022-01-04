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
import { useState,useEffect } from '@wordpress/element'
import React, { forwardRef, setState } from 'react';


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

	const [items, setItems] = useState(selectedPosts);
	
	
	const { options =__( '...retrieving' ) , isLoaded } = useSelect(
		(select) => {
			const { getEntityRecords } = select('core');
			let postCollection = getEntityRecords('postType', 'page', { per_page: -1, status: 'publish' });
			let tagsCollection = getEntityRecords('taxonomy', 'post_tag', { per_page: -1 });


			postCollection?.forEach(post => {
				post.imgurl = select('core').getMedia(post.featured_media)?.media_details.sizes.medium_large.source_url;
				post.tagText = tagsCollection?.filter(tag => post.tags?.includes(tag.id)).map(tag => tag.name);

			});

			console.log(postCollection)

			return { options: postCollection, isLoaded: true }
		}, []
	);

	//Triggers every time items array is changed
	useEffect(()=>{
		setAttributes({ selectedPosts: items });
	},[items])
	
	

	function onSelectedPageChange(selectedPages) {
		let selectedPagesNumberParsed = selectedPages.map(post => { return parseInt(post) });

		setItems(options.filter(post => selectedPagesNumberParsed.includes(post.id)));
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
			<BannerItem post={props.post} ref={setNodeRef} style={style} {...attributes} {...listeners}></BannerItem>
		);
	}


	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);

	function handleDragEnd(event) {
		const { active, over } = event;


		if (active.id !== over.id) {
			setItems((items) => {
				const oldIndex = items.findIndex(obj => obj.id == active.id);
				const newIndex = items.findIndex(obj => obj.id == over.id);

				items[oldIndex].sortKey = newIndex;
				items[newIndex].sortKey = oldIndex;
				return arrayMove(items, oldIndex, newIndex);
				;
			});
		}

		setActiveId(null);

	}

	function handleDragStart(event) {
		const { active } = event;
		setActiveId(active.id);
	}


	return [
		<InspectorControls key='inspector'>
			<SelectControl
				multiple
				value={items.map(post => { return post.id })}
				onChange={onSelectedPageChange}
				label={__('Select a Post (use CTRL to select multiple)')}
				options={options?.map(post => ({ label: post.title.rendered, value: post.id }))}
				className='isceb-gutenberg-select'
			/>
		</InspectorControls>
		,

		<section {...useBlockProps({ className: "homepage-banners" })}  >
			<div className="container-banners">
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
						
						{
						items?.map(post => <SortableItem post={post} key={post.id} id={post.id} />)}
					</SortableContext>
					{/* 
					Activate if you want to see something else when dragging the element
					<DragOverlay>
						{activeId ? <BannerItem post={items.find(post => {post.id == activeId})} id={activeId} /> : null}
					</DragOverlay>
					 */}
				</DndContext >
			</div>
		</section>

	]
}
