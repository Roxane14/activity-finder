import React, { useState } from 'react';
import './ActivityForm.css';

const ActivityForm: React.FC = () => {
  const [criteria, setCriteria] = useState({
    childrenCount: 1,
    ageGroup: '',
    location: '',
    resources: [] as Array<string>,
    duration: 10,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCriteria({
      ...criteria,
      [e.target.name]: e.target.value,
    });
  };

  const handleResourceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setCriteria({
      ...criteria,
      resources: checked
        ? [...criteria.resources, value]
        : criteria.resources.filter((resource) => resource !== value),
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle submission logic here
    console.log(criteria);
  };

  return (
    <section className="form-section">
      <h2>Find an Activity</h2>
      <form className="activity-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="children-count">Number of Children:</label>
          <input
            type="number"
            id="children-count"
            name="childrenCount"
            value={criteria.childrenCount}
            onChange={handleChange}
            min="1"
            max="100"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age-group">Age Group:</label>
          <select id="age-group" name="ageGroup" value={criteria.ageGroup} onChange={handleChange} required>
            <option value="">Select Age Group</option>
            <option value="3-5">3-5 years</option>
            <option value="6-8">6-8 years</option>
            <option value="9-12">9-12 years</option>
            <option value="13+">13 years and older</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <select id="location" name="location" value={criteria.location} onChange={handleChange} required>
            <option value="">Select Location</option>
            <option value="inside">Inside</option>
            <option value="outside">Outside</option>
          </select>
        </div>

        <div className="form-group">
          <label>Available Resources:</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="resources"
                value="ball"
                checked={criteria.resources.includes('ball')}
                onChange={handleResourceChange}
              />
              Ball
            </label>
            <label>
              <input
                type="checkbox"
                name="resources"
                value="rope"
                checked={criteria.resources.includes('rope')}
                onChange={handleResourceChange}
              />
              Rope
            </label>
            <label>
              <input
                type="checkbox"
                name="resources"
                value="cones"
                checked={criteria.resources.includes('cones')}
                onChange={handleResourceChange}
              />
              Cones
            </label>
            <label>
              <input
                type="checkbox"
                name="resources"
                value="music"
                checked={criteria.resources.includes('music')}
                onChange={handleResourceChange}
              />
              Music
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="duration">Duration (minutes):</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={criteria.duration}
            onChange={handleChange}
            min="1"
            max="120"
            required
          />
        </div>

        <button type="submit" className="cta-button">Find Activity</button>
      </form>
    </section>
  );
};

export default ActivityForm;
