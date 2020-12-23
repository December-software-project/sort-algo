import React from 'react';
import './styles.css';
import { TeamData } from './TeamData';
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
          <p className="team-description">
            We are a group of highly motivated students from National University of Singapore that
            are invested in the field of software engineering and algorithms. Feel free to contact
            us to collaborate on interesting software engineering projects.
          </p>
          {TeamData.map((data) => (
            <Profile
              img={data.img}
              name={data.name}
              description={data.description}
              linkedInLink={data.linkedInUrl}
              gitHubLink={data.gitHubUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
