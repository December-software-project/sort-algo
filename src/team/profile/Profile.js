import React from 'react';
import './styles.css';
import IsVisibleYDirection from '../../component/IsVisibleYDirection/IsVisibleYDirection';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Profile = ({ img, name, description, linkedInLink, gitHubLink }) => {
  return (
    <IsVisibleYDirection classNameToUse={'profile-container'} yValue={`translateY(125px)`}>
      <img className="picture" src={img} alt="" />
      <div className="profile-description-container">
        <p className="profile-title">{name}</p>
        <p className="profile-description">{description}</p>
        <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={23} color={'#0e76a8'} />
        </a>
        <a href={gitHubLink} target="_blank" rel="noopener noreferrer" className="github-logo">
          <FaGithub size={23} color={'#211F1F'} />
        </a>
      </div>
    </IsVisibleYDirection>
  );
};

export default Profile;
