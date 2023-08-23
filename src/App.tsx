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
import MainResourcesPage from './pages/reports';
import FirstQuarter from './pages/reports/FirstQuarter';
import SecondQuarter from './pages/reports/SecondQuarter';
import ThirdQuarter from './pages/reports/ThirdQuarter';

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
				<Route path='/reports' element={<MainResourcesPage />} />
				<Route
					path='/report/first-quarter'
					element={<FirstQuarter />}
				/>
				<Route
					path='/report/second-quarter'
					element={<SecondQuarter />}
				/>
				<Route
					path='/report/third-quarter'
					element={<ThirdQuarter />}
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
