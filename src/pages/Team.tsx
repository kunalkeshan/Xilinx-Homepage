/**
 * Full Team Page
 */

import { TEAM } from '../data/team';
import MemberCard from '../components/cards/MemberCard';
import ScrollToTop from '../components/reusable/ScrollToTop';

const TeamTitles = Object.keys(TEAM);

const TeamPage = () => {
	return (
		<main className='w-full px-4 py-12 max-w-7xl mx-auto text-center md:text-left'>
			<h1 className='font-heading text-3xl md:text-7xl'>Team</h1>
			<h2 className='font-subHeading text-xl md:text-3xl'>
				Meet the team that made this possible!
			</h2>
			{TeamTitles.map((title) => (
				<section className='mt-8'>
					<h3 className='font-heading text-xl'>{title}</h3>
					<div className='grid grid-cols-1 md:grid-cols-3 mt-8 gap-8'>
						{TEAM[title].map((member, index) => (
							<MemberCard key={index} data={member} />
						))}
					</div>
				</section>
			))}
			<ScrollToTop />
		</main>
	);
};

export default TeamPage;
