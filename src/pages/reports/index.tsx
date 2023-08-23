/**
 * All Reports Page
 */

import ScrollToTop from '../../components/reusable/ScrollToTop';
import ReportCard from '../../components/cards/ReportCard';
import { REPORTS } from '../../data/reports';

// Dependencies

const MainResourcesPage = () => {
	return (
		<main className='w-full px-4 py-12 max-w-7xl mx-auto text-center md:text-left'>
			<h1 className='font-heading text-3xl md:text-7xl'>Reports</h1>
			<h2 className='font-subHeading text-xl md:text-3xl'>
				Our progress over time
			</h2>
			<section className='grid grid-cols-1 md:grid-cols-3 mt-8 gap-8'>
				{REPORTS.map((event, index) => (
					<ReportCard key={index} data={event} />
				))}
			</section>
			<ScrollToTop />
		</main>
	);
};

export default MainResourcesPage;
