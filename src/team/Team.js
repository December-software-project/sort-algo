import React from 'react';
import './styles.css';
import { TeamData, TeamDescription } from './TeamData';
import TeamImage from './image/team-image.jpg';
import TeamHeader from '../component/header/SectionHeader';
import Profile from './profile/Profile';

const Team = () => {
  return (
    <div className="team" id="team">
      <TeamHeader sectionHeader={'Team'} translateX={'translateX(13px)'} />
      <div className="team-container">
        <img className="team-picture" src={TeamImage} alt="" />
        <div className="team-profile">
          <p className="team-title">Meet our team</p>
          <p className="team-description">{TeamDescription}</p>
          {TeamData.map((data, index) => (
            <Profile
              img={data.img}
              name={data.name}
              description={data.description}
              linkedInLink={data.linkedInUrl}
              gitHubLink={data.gitHubUrl}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
