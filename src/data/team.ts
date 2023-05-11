// Team Data

export interface TeamMember {
	name: string;
	image: string;
	profile: string;
	position: string;
	socials: {
		website?: string;
		linkedin?: string;
		twitter?: string;
		instagram?: string;
	};
}

interface TeamCollection {
	[key: string]: TeamMember[];
}

export const TEAM: TeamCollection = {
	FellowMembers: [
		{
			name: 'Dr. S. Malarvizhi',
			image: '/images/team/malarvizhi.jpg',
			profile: 'https://www.srmist.edu.in/faculty/dr-s-malarvizhi/',
			position: 'Professor of ECE',
			socials: {
				website: 'https://www.srmist.edu.in/faculty/dr-s-malarvizhi/',
			},
		},
		{
			name: 'Dr. Revathi Venkatraman',
			image: '/images/team/revathi.jpg',
			profile:
				'https://www.srmist.edu.in/faculty/dr-revathi-venkataraman/',
			position: 'Chairperson of School of Computing',
			socials: {
				website:
					'https://www.srmist.edu.in/faculty/dr-revathi-venkataraman/',
			},
		},
		{
			name: 'Dr. Shantanu Patil',
			image: '/images/team/shantanu.jpg',
			profile: 'https://www.linkedin.com/in/shantanu-patil-2355122/',
			position:
				'Head of Department of Translational-Medicine-And-Research and Associate Director, Innovation, Incubation & Entrepreneurship Center SRM IST',
			socials: {
				linkedin: 'https://www.linkedin.com/in/shantanu-patil-2355122/',
			},
		},
	],
	Faculty: [],
	Students: [
		{
			name: 'Kunal Keshan',
			image: '/images/team/kunalkeshan.jpeg',
			profile: 'https://kunalkeshan.dev',
			position: 'Student at ECE & Web Developer',
			socials: {
				website: 'https://kunalkeshan.dev',
				linkedin: 'https://www.linkedin.com/in/kunalkeshan/',
				twitter: 'https://twitter.com/_kunalkeshan_',
				instagram: 'https://instagram.com/kunalkeshan',
			},
		},
	],
};
