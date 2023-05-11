// Team Data

interface TeamMember {
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
	FellowMembers: [],
	Faculty: [],
	Students: [],
};
