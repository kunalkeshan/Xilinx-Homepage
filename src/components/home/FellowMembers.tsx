import { TEAM } from '../../data/team';
import MemberCard from '../cards/MemberCard';

const FellowMembers = () => {
	return (
		<section className='max-w-7xl mx-auto w-full py-8'>
			<h2 className='font-heading text-3xl md:text-5xl'>
				Fellow Members
			</h2>
			<div>
				{TEAM.FellowMembers.map((member, index) => (
					<MemberCard key={index} data={member} />
				))}
			</div>
		</section>
	);
};

export default FellowMembers;
