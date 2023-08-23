/**
 * Report Page Layout
 */

// Dependencies
import React from 'react';
import { Report } from '../../data/reports';
import ScrollToTop from '../reusable/ScrollToTop';

interface ReportPageProps {
	data: Report;
}

const ReportPage: React.FC<ReportPageProps> = ({ data }) => {
	return (
		<main className='w-full px-4 py-12 max-w-7xl mx-auto text-center md:text-left flex flex-col items-center justify-center'>
			<h1 className='font-heading text-xl md:text-5xl'>{data.title}</h1>
			<div className='max-w-6xl w-full mt-4'>
				<object
					data={data.path}
					type='application/pdf'
					className='w-full h-[44rem]'
				>
					<p>
						Alternative text - include a link{' '}
						<a href={data.path}>to the PDF!</a>
					</p>
				</object>
			</div>
			<ScrollToTop />
		</main>
	);
};

export default ReportPage;
