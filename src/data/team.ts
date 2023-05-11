// Team Data

export interface TeamMember {
	name: string;
	image: string;
	profile: string;
	position: string;
	socials?: {
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
		},
		{
			name: 'Dr. Revathi Venkatraman',
			image: '/images/team/revathi.jpg',
			profile:
				'https://www.srmist.edu.in/faculty/dr-revathi-venkataraman/',
			position: 'Chairperson of School of Computing',
		},
		{
			name: 'Dr. Shantanu Patil',
			image: '/images/team/shantanu.jpg',
			profile: 'https://www.linkedin.com/in/shantanu-patil-2355122/',
			position:
				'Head of Department of Translational-Medicine-And-Research and Associate Director, Innovation, Incubation & Entrepreneurship Center SRM IST',
		},
	],
	Faculty: [],
	Students: [],
};
