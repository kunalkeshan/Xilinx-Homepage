// Goals Information

import { GiMaterialsScience } from 'react-icons/gi';
import { BsCalendar3Event } from 'react-icons/bs';
import { CgGirl } from 'react-icons/cg';
import { IconType } from 'react-icons';

export interface IMission {
	title: string;
	information: string;
	Icon: IconType;
}

export const VISION =
	'The objective of the program is to enhance the representation, participation, as well as entrepreneurial skills and abilities of women pursuing careers in the Technology field.';

export const MISSION: IMission[] = [
	{
		title: 'Real-World STEM Learning',
		information:
			'Through STEM programs, provide students with a learning paradigm that integrates real-world applications to facilitate a cohesive educational experience.',
		Icon: GiMaterialsScience,
	},
	{
		title: 'Skill-Building Workshops',
		information:
			'Organize mentorship events, seminars, and workshops to help students acquire new skill sets.',
		Icon: BsCalendar3Event,
	},
	{
		title: 'Women in Research',
		information:
			'Encourage girl students to pursue research and development initiatives that can benefit women in general.',
		Icon: CgGirl,
	},
];
