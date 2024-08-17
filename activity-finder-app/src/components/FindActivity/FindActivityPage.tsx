import React from 'react';
import ActivityForm from './ActivityForm';
import ResultsSection from './ResultsSection';
import './FindActivityPage.css';

const FindActivityPage: React.FC = () => {
  return (
    <div className="find-activity-page">
      <ActivityForm />
      <ResultsSection />
    </div>
  );
};

export default FindActivityPage;
