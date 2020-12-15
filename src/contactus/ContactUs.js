import React from 'react';
import Form from './body/Form';
import './styles.css';
import ContactUsHeader from '../component/header/SectionHeader';

const ContactUs = () => {
  const ContactUsText = () => (
    <span>
      Do contact us if there is any error or improvement or wish to collaborate on this project
    </span>
  );

  return (
    <div id="contactUs" className="contact-us">
      {/*Remember to abstract it out when ashley has pushed it in*/}
      <div className="contact-us-header-box">
        <ContactUsHeader sectionHeader={'Contact Us'} translateX={'translateX(23px)'} />
        <ContactUsText />
      </div>
      <Form />
    </div>
  );
};

export default ContactUs;
