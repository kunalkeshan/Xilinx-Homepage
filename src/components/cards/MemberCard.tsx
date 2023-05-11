import React from 'react';
import { TeamMember } from '../../data/team';

interface MemberCardProps {
	data: TeamMember;
}

const MemberCard: React.FC<MemberCardProps> = ({ data }) => {
	return <div>MemberCard</div>;
};

export default MemberCard;
