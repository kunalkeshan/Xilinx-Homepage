/**
 * Engineering & Technology Education Event Page
 */

const EAndTEducationEventPage = () => {
	const ACTIVITIES = [
		'Design flow using Xilinx tools ( hardware and software)',
		'Seminars for Career prospects',
		'Technical Workshops',
		'Study Sessions',
		'Hackathons / Ideathons',
		'Visit to industry',
		'Interdisciplinary course formation',
		'App development',
	];

	return (
		<main className='w-full px-4 py-12 max-w-7xl mx-auto text-center md:text-left'>
			<h1 className='font-heading text-xl md:text-5xl'>
				Engineering & Technology Education
			</h1>
			<h2 className='font-subHeading text-base md:text-xl'>
				Preparing electronics graduates for the industry by
				incorporating real-world applications and new technologies.
			</h2>
			<section className='mt-8 flex flex-col gap-4'>
				<h3 className='font-heading text-xl md:text-3xl'>Activity</h3>
				<h4 className='font-subHeading text-base md:text-xl font-bold'>
					An event on “Towards Electronics graduates".
				</h4>
				<p>
					<b>Highlights:</b>
					<ul className='list-disc ml-8'>
						{[
							'January 21st 1.30 to 3.00 pm and January 22nd 4.00 to 5.00 pm',
							'Career Opportunities in VLSI and Embedded industry was organized in two slots through Zoom platform.',
							'Third year Students of ECE department, SRMIST, KTR in association with placement cell of the department.',
						].map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</p>
				<p>
					Mr. Arun John Mathias, and Mr. Pronadeep Bora, CoreEL
					Technologies with the students. About 200 students attended
					the event. Dr. S. Malarvizhi presented the welcome address
					and introduced the guest to the participants. Mr. John
					Mathias, started the session with an presentation on
					introduction to VLSI and Embedded systems and explained the
					career opportunities and openings, certificate courses
					available in the field of VLSI and Embedded. He also
					answered the questions raised by the students. Mr. Pronadeep
					Bora demonstrated the working of various hardware boards
					from Xilinx and explained about their specific features.
				</p>
			</section>
			<section className='mt-8'>
				<ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
					{ACTIVITIES.map((activity, index) => (
						<li
							key={index}
							className='bg-primaryEvenLight text-primary px-8 py-4 rounded'
						>
							<p className='font-subHeading font-bold text-xl'>
								{activity}
							</p>
						</li>
					))}
				</ul>
			</section>
		</main>
	);
};

export default EAndTEducationEventPage;
