/**
 * Report Card Component
 */

// Dependencies
import React from 'react';
import { Report } from '../../data/reports';

interface ReportCardProps {
	data: Report;
}

const ReportCard: React.FC<ReportCardProps> = ({ data }) => {
	return (
		<a
			className='rounded-xl group overflow-hidden block bg-primaryEvenLight transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
			href={data.slug}
		>
			<div className='px-8 py-4'>
				<h3 className='font-subHeading font-bold text-2xl'>
					{data.title}
				</h3>
				<p className='group-hover:text-lg transition-all duration-300 group-hover:font-bold'>
					Learn more ↗
				</p>
			</div>
		</a>
	);
};

export default ReportCard;
