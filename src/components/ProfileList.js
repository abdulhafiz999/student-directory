import React from 'react';
import ProfileCard from './ProfileCard';
import './ProfileList.css';

function ProfileList({ students, onToggleActive }) {
  return (
    <div className="profile-list">
      {students.map((student) => (
        <ProfileCard 
          key={student.id} 
          student={student} 
          onToggleActive={onToggleActive}
        />
      ))}
    </div>
  );
}

export default ProfileList;
