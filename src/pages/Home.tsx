import FellowMembers from '../components/home/FellowMembers';
import Goals from '../components/home/Goals';
import Intro from '../components/home/Intro';
import ProjectHighlight from '../components/home/ProjectHighlight';
// import YouTubeEmbed from '../components/home/YouTubeEmbed';

const HomePage = () => {
	return (
		<main className='w-full p-4'>
			<Intro />
			<FellowMembers />
			<ProjectHighlight />
			<Goals />
			{/* <YouTubeEmbed embedId={'U7-F9dA_U9c'} /> */}
		</main>
	);
};

export default HomePage;
