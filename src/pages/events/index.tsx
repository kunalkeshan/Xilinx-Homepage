import { EVENTS } from '../../data/events';
import EventCard from '../../components/cards/EventCard';

const EventsPage = () => {
	return (
		<main className='w-full px-4 py-12 max-w-7xl mx-auto text-center md:text-left'>
			<h1 className='font-heading text-3xl md:text-7xl'>Events</h1>
			<h2 className='font-subHeading text-xl md:text-3xl'>
				Our impact to the community
			</h2>
			<section className='grid grid-cols-1 md:grid-cols-3 mt-8 gap-8'>
				{EVENTS.map((event, index) => (
					<EventCard key={index} data={event} />
				))}
			</section>
		</main>
	);
};

export default EventsPage;
