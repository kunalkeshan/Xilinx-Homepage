// Navigation Data

interface Link {
	name: string;
	url: string;
}

type Links = Array<Link>;

const commonLinks: Links = [
	{
		name: 'Home',
		url: '/',
	},
	{
		name: 'Events',
		url: '/events',
	},
	{
		name: 'Gallery',
		url: '/gallery',
	},
	{
		name: 'Research',
		url: '/research',
	},
];

export const NAV_LINKS: Links = [
	...commonLinks,
	{
		name: 'Visit SRMIST ↗',
		url: 'https://srmist.edu.in/',
	},
];

export const FOOTER_LINKS: Links = [
	...commonLinks,
	{
		name: 'Team',
		url: '/team',
	},
	{
		name: 'GitHub',
		url: 'https://github.com/kunalkeshan/Xilinx-Homepage',
	},
];
