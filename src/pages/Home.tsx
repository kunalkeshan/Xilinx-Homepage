/**
 * Home Page
 */

import FellowMembers from '../components/home/FellowMembers';
import Goals from '../components/home/Goals';
import Intro from '../components/home/Intro';
import ProjectHighlight from '../components/home/ProjectHighlight';
import ScrollToTop from '../components/reusable/ScrollToTop';
import YouTubeEmbed from '../components/home/YouTubeEmbed';

const YOUTUBE_EMBED_VIDEO_ID = 'VBcGz1YuocE';

const HomePage = () => {
	return (
		<main className='w-full p-4'>
			<Intro />
			<FellowMembers />
			<ProjectHighlight />
			<Goals />
			<YouTubeEmbed embedId={YOUTUBE_EMBED_VIDEO_ID} />
			<ScrollToTop />
		</main>
	);
};

export default HomePage;
