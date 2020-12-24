import React from 'react';
import './styles.css';
import 'intersection-observer';
import IsVisible from 'react-is-visible';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Profile = ({ img, name, description, linkedInLink, gitHubLink }) => {
  const HeaderLineStyling = (isVisible) => ({
    transform: isVisible ? `translateY(0px)` : `translateY(125px)`,
    transition: `all 1.0s ease-in-out`,
  });

  return (
    <IsVisible once>
      {(isVisible) => (
        <div className="profile-container" style={HeaderLineStyling(isVisible)}>
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
        </div>
      )}
    </IsVisible>
  );
};

export default Profile;
