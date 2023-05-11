import React from 'react';
import { TeamMember } from '../../data/team';
import { FaGlobe, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface MemberCardProps {
	data: TeamMember;
}

interface SocialLinkIconProps {
	icon: keyof TeamMember['socials'];
	link?: string;
}

const SocialLinkIcon: React.FC<SocialLinkIconProps> = ({ icon, link }) => {
	let Icon: IconType;
	switch (icon) {
		case 'instagram': {
			Icon = FaInstagram;
			break;
		}
		case 'linkedin': {
			Icon = FaLinkedinIn;
			break;
		}
		case 'twitter': {
			Icon = FaTwitter;
			break;
		}
		case 'website': {
			Icon = FaGlobe;
			break;
		}
	}
	return link ? (
		<a
			href={link}
			target='_blank'
			className='hover:scale-105 transition-all duration-300'
			title={`${icon} - ${link}`}
		>
			<Icon />
		</a>
	) : null;
};

const MemberCard: React.FC<MemberCardProps> = ({ data }) => {
	return (
		<div className='px-8 py-4 rounded bg-primaryEvenLight flex items-center flex-col text-center bg-opacity-60 transition-all duration-75 hover:bg-opacity-100'>
			<a
				href={data.profile}
				target='_blank'
				className='w-28 h-28 rounded-full bg-primary overflow-hidden border-2 border-primary hover:border-4 transition-all duration-75'
			>
				<img
					src={data.image}
					alt={data.name}
					className='w-full h-auto object-contain'
				/>
			</a>
			<h3 className='mt-2 font-heading text-2xl'>{data.name}</h3>
			<p className='text-sm font-semibold mt-1' title={data.position}>
				{data.position}
			</p>
			<a
				href={data.profile}
				target='_blank'
				className='text-xs text-primary underline underline-offset-4 hover:font-bold transition-all duration-75'
			>
				View Profile ↗
			</a>
			<div className='flex gap-4 items-center mt-4 text-primary text-xl'>
				<SocialLinkIcon icon='website' link={data.socials.website} />
				<SocialLinkIcon icon='linkedin' link={data.socials.linkedin} />
				<SocialLinkIcon icon='twitter' link={data.socials.twitter} />
				<SocialLinkIcon
					icon='instagram'
					link={data.socials.instagram}
				/>
			</div>
		</div>
	);
};

export default MemberCard;
