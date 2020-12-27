import React from 'react';
import Form from './body/Form';
import Footer from './footer/Footer';
import './styles.css';
import ContactUsHeader from './contactusheader/ContactUsHeader';

/**
 * Contact Us Section of the app.
 *
 * @component
 * @category App Body
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
