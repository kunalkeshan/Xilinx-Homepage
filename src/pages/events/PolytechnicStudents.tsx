/**
 * Polytechnic Students Event Page
 */

const PolytechnicStudentsEventsPage = () => {
	const ACTIVITIES = [
		{
			name: 'Web App Development',
			activities:
				"Web application development is the creation of application programs that reside on remote servers and are delivered to the user's device over the Internet.",
		},
		{
			name: 'Circuit Design Tools',
			activities:
				'Circuit design is the first step for every electronics design project and requires the creation of a schematic diagram. The schematic defines how the pins of electrical components are logically connected together on a printed circuit board (PCB).',
		},
		{
			name: 'Programming Skills',
			activities:
				'Computer programming is important today because so much of our world is automated. Humans need to be able to control the interaction between people and machines. Since computers and machines are able to do things so efficiently and accurately, we use computer programming to harness that computing power.',
		},
	];

	return (
		<main className='w-full px-4 py-12 max-w-7xl mx-auto text-center md:text-left'>
			<h1 className='font-heading text-xl md:text-5xl'>
				Polytechnic Students
			</h1>
			<h2 className='font-subHeading text-base md:text-xl'>
				Equiping polytechnic students with the necessary skills and
				knowledge for successful careers in their chosen fields.
			</h2>
			<section className='mt-8 flex flex-col gap-4'>
				<h3 className='font-heading text-xl md:text-3xl'>Activity</h3>
				<h4 className='font-subHeading text-base md:text-xl font-bold'>
					An event on “Towards Polytechnic Students".
				</h4>
				<ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
					{ACTIVITIES.map((activity, index) => (
						<li
							key={index}
							className='bg-primaryEvenLight text-primary px-8 py-4 rounded'
						>
							<p className='font-subHeading font-bold text-xl'>
								{activity.name}
							</p>
							<p>{activity.activities}</p>
						</li>
					))}
				</ul>
			</section>
			<section className='mt-8'>
				<div className='rounded-xl overflow-hidden max-w-4xl mx-auto w-full'>
					<img
						src={
							'/images/events/polytechnic/career-talk-07-02-2022.jpg'
						}
						alt={'Polytechnic Students'}
						className='w-full h-auto object-contain'
					/>
				</div>
			</section>
		</main>
	);
};

export default PolytechnicStudentsEventsPage;
