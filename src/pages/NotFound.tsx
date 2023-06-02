/**
 * Not Found Page
 */

import { Link } from 'react-router-dom';
import ScrollToTop from '../components/reusable/ScrollToTop';

const NotFoundPage = () => {
	return (
		<main className='w-full min-h-fit px-4 py-20 max-w-7xl mx-auto flex flex-col gap-4'>
			<p className='font-heading text-3xl md:text-7xl'>Page not found.</p>
			<p className='font-subHeading text-xl md:text-3xl'>
				The page you are looking for doesn't exist or has been moved.
			</p>
			<Link to='/' className='btn btn-primary w-fit'>
				Go back Home.
			</Link>
			<ScrollToTop />
		</main>
	);
};

export default NotFoundPage;
