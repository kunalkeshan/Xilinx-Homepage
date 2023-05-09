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

export const NAV_LINKS: Links = [...commonLinks];

export const FOOTER_LINKS: Links = [...commonLinks];
