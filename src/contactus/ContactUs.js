import React from 'react';

import './styles.css';
import ContactUsHeader from '../component/header/SectionHeader';

const ContactUs = () => {
  return (
    <div id="contactUs" className="contactus">
      <ContactUsHeader sectionHeader={'Contact Us'} translateX={'translateX(23px)'} />
    </div>
  );
};

export default ContactUs;
