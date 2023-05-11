// Events Data

export interface Event {
	title: string;
	description: string;
	cover: string;
	slug: string;
}

export const EVENTS: Event[] = [
	{
		title: 'STEM Programme',
		description:
			'STEM is based on the idea of educating students in four specific disciplines - Science, Technology, Engineering and Mathematics in an interdisciplinary and applied approach.',
		cover: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		slug: '/event/stem-programme',
	},
	{
		title: 'Engineering and Technology Education',
		description:
			'Preparing electronics graduates for the industry by incorporating real-world applications and new technologies.',
		cover: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		slug: '/event/engineering-and-technology-education',
	},
	{
		title: 'Polytechnic Students',
		description:
			'Equiping polytechnic students with the necessary skills and knowledge for successful careers in their chosen fields.',
		cover: 'https://images.unsplash.com/photo-1639918764791-1b6a8b939125?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
		slug: '/event/polytechnic-students',
	},
];
