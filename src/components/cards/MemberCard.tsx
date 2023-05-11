import React from 'react';
import { TeamMember } from '../../data/team';

interface MemberCardProps {
	data: TeamMember;
}

const MemberCard: React.FC<MemberCardProps> = ({ data }) => {
	return (
		<div className='px-8 py-4 rounded bg-primaryEvenLight flex items-center justify-center flex-col'>
			<a
				href={data.profile}
				target='_blank'
				className='w-40 h-40 rounded-full overflow-hidden border-2 border-primary hover:border-4 transition-all duration-75'
			>
				<img
					src={data.image}
					alt={data.name}
					className='w-full h-auto object-contain'
				/>
			</a>
			<h3 className='mt-2 font-heading text-2xl'>{data.name}</h3>
			<p
				className='font-subHeading text-sm font-semibold mt-1 whitespace-nowrap overflow-hidden text-ellipsis max-w-[28ch]'
				title={data.position}
			>
				{data.position}
			</p>
		</div>
	);
};

export default MemberCard;
