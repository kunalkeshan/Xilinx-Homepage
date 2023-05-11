import React from 'react';
import { Event } from '../../data/events';

interface EventCardProps {
	data: Event;
}

const EventCard: React.FC<EventCardProps> = ({ data }) => {
	return <div>EventCard</div>;
};

export default EventCard;
