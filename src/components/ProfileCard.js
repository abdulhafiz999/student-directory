import React from 'react';
import './ProfileCard.css';

function ProfileCard({ student, onToggleActive }) {
  return (
    <div className="profile-card">
      <div className="card-header">
        <h3>{student.name}</h3>
        {student.isActive ? (
          <span className="status active">Active</span>
        ) : (
          <span className="status inactive">Inactive</span>
        )}
      </div>
      
      <div className="card-body">
        <p className="track"><strong>Track:</strong> {student.track}</p>
        <p className="bio">{student.bio}</p>
        <p className="skill-level">
          <strong>Skill Level:</strong> 
          <span className={`skill-badge ${student.skillLevel.toLowerCase()}`}>
            {student.skillLevel}
          </span>
        </p>
      </div>
      
      <div className="card-footer">
        <button 
          className="toggle-btn"
          onClick={() => onToggleActive(student.id)}
        >
          {student.isActive ? 'Deactivate' : 'Activate'}
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
