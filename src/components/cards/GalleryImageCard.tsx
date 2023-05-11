import React from 'react';
import { Image } from '../../data/gallery';

interface GalleryImageCardProps {
	data: Image;
}

const GalleryImageCard: React.FC<GalleryImageCardProps> = ({ data }) => {
	return (
		<div className='h-auto max-w-full rounded-lg overflow-hidden relative group hover:scale-125 shadow-xl hover:z-10 transition-all duration-300'>
			<img
				src={data.src}
				alt={data.alt}
				className='w-full h-auto object-contain'
				loading='lazy'
			/>
			<p className='text-white text-center px-8 py-4 absolute -bottom-full group-hover:bottom-0 transition-all duration-300 from-tertiary to-transparent bg-gradient-to-t'>
				{data.alt}
			</p>
		</div>
	);
};

export default GalleryImageCard;
