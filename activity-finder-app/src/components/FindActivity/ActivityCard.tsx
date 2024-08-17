import React from 'react';
import "./ActivityCard.css";

interface ActivityCardProps {
  activity: {
    title: string;
    ageGroup: string;
    location: string;
    childrenCount: number;
    resources: string[];
    duration: number;
  };
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <div className="activity-card">
      <h3>{activity.title}</h3>
      <p><strong>Age Group:</strong> {activity.ageGroup}</p>
      <p><strong>Location:</strong> {activity.location}</p>
      <p><strong>Number of Children:</strong> {activity.childrenCount}</p>
      <p><strong>Resources:</strong> {activity.resources.join(', ')}</p>
      <p><strong>Duration:</strong> {activity.duration} minutes</p>
    </div>
  );
};

export default ActivityCard;
