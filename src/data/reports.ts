// Report Data

export interface Report {
	title: string;
	path: string;
	slug: string;
}

export const REPORTS: Report[] = [
	{
		title: 'First Quarter',
		path: `${
			window.location.protocol +
			'//' +
			window.location.hostname +
			(window.location.port.length > 0 ? ':' + window.location.port : '')
		}/pdfs/first-quarter.pdf`,
		slug: '/report/first-quarter',
	},
	{
		title: 'Second Quarter',
		path: `${
			window.location.protocol +
			'//' +
			window.location.hostname +
			(window.location.port.length > 0 ? ':' + window.location.port : '')
		}/pdfs/second-quarter.pdf`,
		slug: '/report/second-quarter',
	},
	{
		title: 'Third Quarter',
		path: `${
			window.location.protocol +
			'//' +
			window.location.hostname +
			(window.location.port.length > 0 ? ':' + window.location.port : '')
		}/pdfs/third-quarter.pdf`,
		slug: '/report/third-quarter',
	},
];
