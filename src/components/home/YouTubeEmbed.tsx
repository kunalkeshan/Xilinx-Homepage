import React from 'react';

interface YouTubeEmbedProps {
	embedId: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ embedId }) => {
	return (
		<section className='w-full max-w-7xl mx-auto mt-8 text-center'>
			<h2 className='text-5xl font-heading'>Learn more...</h2>
			<div className='overflow-hidden pb-[56%] md:pb-[26.25%] relative h-0 max-w-4xl mx-auto rounded-xl mt-4'>
				<iframe
					src={`https://www.youtube.com/embed/${embedId}`}
					// frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
					title='Embedded youtube'
					className='left-0 top-0 w-full h-full absolute'
				/>
			</div>
		</section>
	);
};

export default YouTubeEmbed;
