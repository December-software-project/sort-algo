import React from 'react';
import Form from './body/Form';
import Footer from './footer/Footer';
import './styles.css';
import ContactUsHeader from './contactusheader/ContactUsHeader';

/**
 * Contains all component of the Contact Us portion.
 *
 * @component
 */
const ContactUs = () => {
  return (
    <div id="contactUs" className="contact-us">
      <ContactUsHeader />
      <Form />
      <Footer />
    </div>
  );
};

export default ContactUs;
