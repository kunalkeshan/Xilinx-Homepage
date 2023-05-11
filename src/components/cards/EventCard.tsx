/**
 * Event Card Component
 */

import React from 'react';
import { Event } from '../../data/events';

interface EventCardProps {
	data: Event;
}

const EventCard: React.FC<EventCardProps> = ({ data }) => {
	return (
		<a
			className='rounded-xl group overflow-hidden block bg-primaryEvenLight transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
			href={data.slug}
		>
			<div className='w-full overflow-hidden h-1/2'>
				<img
					src={data.cover}
					alt={data.title}
					className='w-full h-auto object-contain group-hover:scale-110 transition-all duration-300'
				/>
			</div>
			<div className='px-8 py-4'>
				<h3 className='font-subHeading font-bold text-2xl'>
					{data.title}
				</h3>
				<p className='mt-4 text-lg'>{data.description}</p>
				<p className='group-hover:text-lg transition-all duration-300 group-hover:font-bold'>
					Learn more ↗
				</p>
			</div>
		</a>
	);
};

export default EventCard;
