import React from 'react';
import './styles.css';
import Ashley from './image/ashley.png';
import Keane from './image/keanecjy_smaller.png';
import TeamImage from './image/team-image.jpg';
import TeamHeader from '../component/header/SectionHeader';
import Profile from './profile/Profile';

const Team = () => {
  return (
    <div className="team" id="team">
      <TeamHeader sectionHeader={'Team'} translateX={'translateX(13px)'} />
      <div className="team-container">
        <img className="team-picture" src={TeamImage} />
        <div className="team-profile">
          <p className="team-title">Meet our team</p>
          <p className="team-description">
            We are a group of highly motivated students from National University of Singapore that
            are invested in the field of software engineering and algorithms. Feel free to contact
            us to collaborate on interesting software engineering projects.
          </p>
          <Profile
            // img={Sean}
            name="Lum Jian Yang Sean"
            description="Sophomore at National University of Singapore"
            linkedInLink="https://www.linkedin.com/in/jyjy98/"
            gitHubLink="https://github.com/seanjyjy"
          />
          <Profile
            img={Keane}
            name="Keane Chan Jun Yu"
            description="Sophomore at National University of Singapore"
            linkedInLink="https://www.linkedin.com/in/keanecjy/"
            gitHubLink="https://github.com/keanecjy"
          />
          <Profile
            img={Ashley}
            name="Lau Jun Hao Ashley"
            description="Sophomore at National University of Singapore"
            linkedInLink="https://www.linkedin.com/in/ashley-lau-625237163/"
            gitHubLink="https://github.com/Ashley-Lau"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
