import React from 'react';
import ActivityCard from './ActivityCard';

const ResultsSection: React.FC = () => {
  const activities = [
    // Example activities (you will replace this with dynamic data from your database)
    {
      title: 'Soccer Game',
      ageGroup: '6-8 years',
      location: 'Outside',
      childrenCount: 10,
      resources: ['ball'],
      duration: 30,
    },
    {
      title: 'Musical Chairs',
      ageGroup: '6-8 years',
      location: 'Inside',
      childrenCount: 10,
      resources: ['music'],
      duration: 20,
    },
  ];

  return (
    <section className="results-section">
      <h2>Matching Activities</h2>
      <div className="results">
        {activities.map((activity, index) => (
          <ActivityCard key={index} activity={activity} />
        ))}
      </div>
    </section>
  );
};

export default ResultsSection;
