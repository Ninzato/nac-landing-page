'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Play } from 'lucide-react';

type MediaItem = {
	src: string;
	type: 'video' | 'image';
};

type GalleryProps = {
	media: MediaItem[];
	title?: string;
};

// Helper to check if a file is a video
function isVideoFile(src: string): boolean {
	return /\.(mp4|webm|ogg|mov)$/i.test(src);
}

// Helper to create MediaItem array from string array
export function createMediaItems(sources: string[]): MediaItem[] {
	return sources.map((src) => ({
		src,
		type: isVideoFile(src) ? 'video' : 'image',
	}));
}

export function BriquetteGallery({ media, title }: GalleryProps) {
	const [activeIndex, setActiveIndex] = useState(0);

	// Use placeholder if no media provided
	const displayMedia: MediaItem[] =
		media.length > 0 ? media : [{ src: '/placeholder.svg', type: 'image' }];

	const currentItem = displayMedia[activeIndex];

	return (
		<div className="space-y-4 w-full max-w-full overflow-hidden">
			{title && (
				<h3 className="text-lg font-semibold text-foreground">{title}</h3>
			)}

			{/* Main Display */}
			<div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted">
				{currentItem.type === 'video' ? (
					<video
						key={currentItem.src}
						src={currentItem.src}
						controls
						className="absolute inset-0 w-full h-full object-cover"
						playsInline
					>
						Your browser does not support the video tag.
					</video>
				) : (
					<Image
						src={currentItem.src}
						alt={`Gallery image ${activeIndex + 1}`}
						fill
						className="object-cover transition-opacity duration-300"
						onError={(e) => {
							const target = e.target as HTMLImageElement;
							target.src = '/placeholder.svg';
						}}
					/>
				)}
			</div>

			{/* Thumbnails */}
			{displayMedia.length > 1 && (
				<div className="flex gap-2 overflow-x-auto pb-2">
					{displayMedia.map((item, index) => (
						<button
							key={index}
							onClick={() => setActiveIndex(index)}
							className={`cursor-pointer relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg transition-all ${
								activeIndex === index
									? 'ring-2 ring-primary ring-offset-2'
									: 'opacity-70 hover:opacity-100'
							}`}
						>
							{item.type === 'video' ? (
								<>
									{/* Video thumbnail - use first frame or placeholder */}
									<video
										src={item.src}
										className="w-full h-full object-cover"
										muted
										preload="metadata"
									/>
									{/* Play icon overlay */}
									<div className="absolute inset-0 flex items-center justify-center bg-black/30">
										<Play className="w-5 h-5 text-white fill-white" />
									</div>
								</>
							) : (
								<Image
									src={item.src}
									alt={`Thumbnail ${index + 1}`}
									fill
									className="object-cover"
									onError={(e) => {
										const target = e.target as HTMLImageElement;
										target.src = '/placeholder.svg';
									}}
								/>
							)}
						</button>
					))}
				</div>
			)}
		</div>
	);
}
