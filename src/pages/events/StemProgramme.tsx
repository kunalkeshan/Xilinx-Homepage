const StemProgrammeEventPage = () => {
	const FACULTIES_PRESENT = [
		'Dr. Vasantha Dev Suryakala Assistant Professor/ECE',
		'Dr.K. Ferents Koni Jiavana Assistant Professor/ECE',
		'Dr. Ruhan Bevi Assistant Professor/ECE',
		'Dr. J. K. Kasthuri Bha Assistant Professor/ECE',
		'Dr. S. Kayalvizhi Assistant Professor/ECE',
		'Dr. Shiny Angel Assistant Professor/CINTEL',
		'Dr. Mrs. Saranya.A Assistant Professor/CINTEL',
	];

	const DAY1 = {
		cover: '/images/events/stem/activity1.jpeg',
		title: 'Activity 1',
		activities: [
			{
				title: 'Education and Career avenues in Science and Technology for Women',
				incharge: 'Dr.A.Ruhan Bevi – Associate Professor / ECE',
				duration: '30 min',
				work: [
					'The gathering of class XI and XII were addresses for education and career prospects for women in science and Technology. The teachers and the students of the school took part in the interaction of the same.',
					'The talk was aimed to rise the motivation level of the students and to focus on the educational opportunities in their field of study. The students were briefed about the scholarships available and also about the list of competitive exams that could yields them a good career. The talk addressed the crowd about the ways to identify their passion and the response from the students was recorded. It was amazing to know, that each one gave a different passion leading to a new field of career convergence.',
					'The students were given a vision on the roles and leads of an engineering career with the startup packages on front. This would be a definite eye opener for the students to choose a right track in the right time.',
				],
			},
			{
				title: 'Coding with Python (in +2 curriculum)',
				incharge: 'Mrs. A, Saranya, Dr. S. Kayalvizhi',
				duration: '1 hr',
				work: [
					'Based on class 12th curriculum, the below listed the listed topics were discussed in python language, 1. Introduction to Python, 2. Python variables and operators, 3. Control structure, 4. Python structure, 5. Strings and string manipulation',
					'Coding related to the above topics were done as follows,, 1. Program for arithmetic operations like Addition, subtraction, multiply, divide, floor., 2. Program to find largest number., 3. Program to calculate factorial of a given number., 4. Program to convert Fahrenheit to Celsius., 5. Program using functions., 6. Program to find odd and even numbers.',
				],
			},
		],
	};

	const DAY2 = {
		cover: '/images/events/stem/activity2.jpeg',
		title: 'Activity 2',
		subTitle:
			'Celebration of National Science Day 2022 on 1 st March 2022, at Orathur Panchayat Union Middle School',
		description:
			'Ideas of students are judged and recognized in the form of rewards. Among the best the participants are categorized participants into first, second and third positions. After completion of all competition prizes were distributed to winners.',
	};

	const ACTIVITIES = [
		{
			name: 'Coding',
			activities: 'C, C++, Python, Java, Javascript etc.',
		},
		{
			name: 'English',
			activities: 'Removing language barriers.',
		},
		{
			name: 'Fun with Physics',
			activities: 'Physics in our daily life.',
		},
		{
			name: 'Easy Mathematics',
			activities: 'Developing interest in Mathematics.',
		},
		{
			name: 'Science and Engineering',
			activities:
				'Programmes to create interest in science and engineering.',
		},
	];
	return (
		<main className='w-full px-4 py-12 max-w-7xl mx-auto text-center md:text-left'>
			<h1 className='font-heading text-xl md:text-5xl'>STEM Programme</h1>
			<h2 className='font-subHeading text-base md:text-xl'>
				STEM is based on the idea of educating students in four specific
				disciplines - Science, Technology, Engineering and Mathematics
				in an interdisciplinary and applied approach.
			</h2>
			<section className='mt-8 flex flex-col gap-4'>
				<p>
					<b>Target Classes:</b> 11th and 12th students of Govt.
					Higher Secondary School, Singaperumal Kovil , Kanchipuram
					District, Tamilnadu, INDIA.
				</p>
				<p>
					<b>Conducted on:</b> 01-03-2022
				</p>
				<p>
					<b>Faculty Members Present:</b>
					<ul className='list-disc ml-8'>
						{FACULTIES_PRESENT.map((faculty, index) => (
							<li key={index}>{faculty}</li>
						))}
					</ul>
				</p>
			</section>
			<section className='mt-8 flex flex-col gap-4'>
				<h3 className='font-heading text-xl md:text-3xl'>
					{DAY1.title}
				</h3>
				{DAY1.activities.map((activity, index) => (
					<div key={index} className='flex flex-col gap-2'>
						<h4 className='font-subHeading text-base md:text-xl font-bold'>
							{activity.title}
						</h4>
						<p>👩‍🏫 Faculty Incharge: {activity.incharge}</p>
						<p>⏰ Duration: {activity.duration}</p>
						<ul className='list-disc ml-8'>
							{activity.work.map((work, idx) => (
								<li key={idx}>{work}</li>
							))}
						</ul>
					</div>
				))}
				<div className='rounded-xl overflow-hidden max-w-4xl mx-auto md:mx-0 w-full'>
					<img
						src={DAY1.cover}
						alt={DAY1.title}
						className='w-full h-auto object-contain'
					/>
				</div>
			</section>
			<section className='mt-8 flex flex-col md:items-end gap-4 text-inherit md:text-right'>
				<h3 className='font-heading text-xl md:text-3xl'>
					{DAY2.title}
				</h3>
				<h4 className='font-subHeading text-base md:text-xl font-bold'>
					{DAY2.subTitle}
				</h4>
				<p>{DAY2.description}</p>
				<div className='rounded-xl overflow-hidden max-w-4xl mx-auto md:mx-0 w-full'>
					<img
						src={DAY2.cover}
						alt={DAY2.title}
						className='w-full h-auto object-contain'
					/>
				</div>
			</section>
			<section className='mt-8'>
				<ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
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
		</main>
	);
};

export default StemProgrammeEventPage;
