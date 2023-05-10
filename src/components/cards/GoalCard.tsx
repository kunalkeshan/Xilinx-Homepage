import React from 'react';
import { IMission } from '../../data/goals';

interface GoalCardProps {
	data: IMission;
	index: number;
}

const GoalCard: React.FC<GoalCardProps> = ({ data, index }) => {
	return (
		<div className='group hover:bg-primaryEvenLight transition-all duration-300 px-8 py-4 rounded text-left'>
			<div className='flex text-primary items-center w-full gap-4'>
				<div className='text-3xl border-2 rounded-full border-primary p-2'>
					{
						<data.Icon className='group-hover:scale-90 transition-all duration-300' />
					}
				</div>
				<div className='font-subHeading w-full'>
					<p className='text-xl'>{index}</p>
					<hr className='w-[60%] border-b border-primary' />
				</div>
			</div>
			<div className='mt-4'>
				<h3 className='font-heading text-xl'>{data.title}</h3>
				<p className='text-justify mt-1'>{data.information}</p>
			</div>
		</div>
	);
};

export default GoalCard;
