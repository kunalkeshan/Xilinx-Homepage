import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import HomePage from './pages/Home';
import EventsPage from './pages/events';
import ResearchPage from './pages/Research';
import GalleryPage from './pages/Gallery';
import TeamPage from './pages/Team';
import NotFoundPage from './pages/NotFound';
import StemProgrammeEventPage from './pages/events/StemProgramme';
import EAndTEducationEventPage from './pages/events/EAndTEducation';
import PolytechnicStudentsEventsPage from './pages/events/PolytechnicStudents';

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/events' element={<EventsPage />} />
				<Route
					path='/event/stem-programme'
					element={<StemProgrammeEventPage />}
				/>
				<Route
					path='/event/engineering-and-technology-education'
					element={<EAndTEducationEventPage />}
				/>
				<Route
					path='/event/polytechnic-students'
					element={<PolytechnicStudentsEventsPage />}
				/>
				<Route path='/research' element={<ResearchPage />} />
				<Route path='/gallery' element={<GalleryPage />} />
				<Route path='/team' element={<TeamPage />} />
				<Route path='*' element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
