/**
 * Goals Component
 * Includes Vision and Mission.
 */

import { VISION, MISSION } from '../../data/goals';
import GoalCard from '../cards/GoalCard';

const Goals = () => {
	return (
		<section className='w-full min-h-fit max-w-7xl mx-auto mt-16'>
			{/* Vision */}
			<div
				id='vision'
				className='items-center justify-center text-center md:text-left grid grid-cols-1 md:grid-cols-2'
			>
				<div>
					<p className='font-subHeading text-base md:text-xl'>
						A target to strive for
					</p>
					<h2 className='font-heading text-3xl md:text-5xl'>
						Our Vision
					</h2>
				</div>
				<div className='mt-4 md:mt-0'>
					<p className='text-lg md:text-xl'>{VISION}</p>
				</div>
			</div>
			{/* Mission */}
			<div className='mt-16 text-center md:text-left'>
				<h2 className='font-heading text-3xl md:text-5xl'>
					Our Project's Purpose
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 mt-8 gap-8'>
					{MISSION.map((mission, index) => (
						<GoalCard
							key={index}
							data={mission}
							index={index + 1}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Goals;
