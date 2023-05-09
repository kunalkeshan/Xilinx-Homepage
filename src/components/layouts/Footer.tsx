import { FOOTER_LINKS } from '../../data/navigation';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className='w-full px-4 py-6 bg-tertiary text-white text-center'>
			<div className='max-w-7xl w-full mx-auto flex flex-col items-center justify-center'>
				<p>
					<a
						href='https://github.com/kunalkeshan/Xilinx-Homepage/blob/main/LICENSE'
						target='_blank'
						className='hover:underline hover:text-primaryLight transition-all duration-300'
					>
						Copyright &copy; 2023,
					</a>{' '}
					<a
						href='https://srmist.edu.in/'
						target='_blank'
						className='hover:underline hover:text-primaryLight transition-all duration-300'
					>
						SRM Institute of Science and Technology, Potheri, SRM
						Nagar, Kattankulathur, Tamil Nadu 603203
					</a>
				</p>
				<ul className='flex items-center gap-4 mt-2 flex-wrap justify-center'>
					{FOOTER_LINKS.map((link, index) => (
						<li
							key={index}
							className='underline text-textSecondary underline-offset-4 transition-all duration-300 hover:decoration-primary hover:text-primary'
						>
							<Link to={link.url}>{link.name}</Link>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
