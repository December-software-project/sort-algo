import React from 'react';

const ContactUsHeader = () => {
  const ContactUsText = () => (
    <span>
      Do contact us if there is any error or improvement or wish to collaborate on this project
    </span>
  );

  return (
    <div className="contact-us-header-box">
      <ContactUsHeader sectionHeader={'Contact Us'} translateX={'translateX(23px)'} />
      <ContactUsText />
    </div>
  );
};

export default ContactUsHeader;
