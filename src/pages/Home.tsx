import FellowMembers from '../components/home/FellowMembers';
import Goals from '../components/home/Goals';
import Intro from '../components/home/Intro';

const HomePage = () => {
	return (
		<main className='w-full p-4'>
			<Intro />
			<FellowMembers />
			<Goals />
		</main>
	);
};

export default HomePage;
