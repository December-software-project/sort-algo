import React, { useState } from 'react';
import './styles.css';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Formik } from 'formik';
import * as yup from 'yup';
import emailjs from 'emailjs-com';
import FormHolder from './FormHolder';
import Notification from './Notification';

/**
 * A form for user to fill in their details.
 *
 * @returns {JSX.Element} A fill up form boxes.
 */
const Form = () => {
  const [type, setType] = useState('Type (Optional)');
  const [isShowMessage, setIsShowMessage] = useState(false);

  const listOfTypes = [
    { type: 'Type (Optional)', key: 0 },
    { type: 'Collaboration', key: 1 },
    { type: 'Improvement', key: 2 },
    { type: 'Issue', key: 3 },
    { type: 'Others', key: 4 },
  ];

  /**
   * Change the type of message.
   *
   * @param {String}
   */
  const handleMenuClick = (type) => {
    setType(type);
  };

  /**
   * A drop down list to provide a list of types of message to choose from.
   *
   * @type {JSX.Element}
   */
  const menu = (
    <Menu style={{ transform: 'translateY(-5px)' }}>
      {listOfTypes.map(({ type, key }) => {
        return (
          <Menu.Item key={key} onClick={() => handleMenuClick(type)} style={{ color: '#8789B5' }}>
            {type}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  /**
   * Sends a message to the users and the developers upon the user sends a message.
   *
   * @param values User's details
   */
  const sendMessage = (values) => {
    const message = {
      name: values.name,
      email: values.email,
      type: type,
      message: values.message,
    };
    emailjs
      .send('service_qua6c3o', 'template_l85e43l', message, 'user_Tvjdrhs7WD4QYNebwjcAw')
      .then((r) => {});
  };

  /**
   * A Schema which checks the validity of the inputs from the user.
   */
  const reviewSchema = yup.object({
    name: yup.string().required(),
    email: yup
      .string()
      .required()
      .email('Invalid email')
      .test('check if email is in use', 'Email has been registered', (val) => {
        const emailRegex = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
        return emailRegex.test(val);
      }),
    message: yup.string().required(),
  });

  return (
    <Formik
      initialValues={{ name: '', email: '', type: '', message: '' }}
      validationSchema={reviewSchema}
      onSubmit={(values, actions) => {
        sendMessage(values);
        setType('Type (Optional)');
        setIsShowMessage(true);
        setTimeout(() => setIsShowMessage(false), 5000);
        actions.resetForm();
      }}
    >
      {(props) => (
        <>
          <div className="form-box">
            <div className="form-particulars" id="form-particulars">
              <FormHolder classNameToUse="form-particular-error-holder">
                <div className="form-particulars-holder">
                  <input
                    placeholder="Name"
                    required={true}
                    onChange={props.handleChange}
                    value={props.values.name}
                    name="name"
                  />
                </div>
                <span>{props.touched.name && props.errors.name && 'Name is a required field'}</span>
              </FormHolder>
              <FormHolder classNameToUse="form-particular-error-holder">
                <div className="form-particulars-holder">
                  <input
                    placeholder="Email"
                    required={true}
                    onChange={props.handleChange}
                    value={props.values.email}
                    name="email"
                  />
                </div>
                <span>
                  {props.touched.email && props.errors.email && 'Email is a required field'}
                </span>
              </FormHolder>
              <FormHolder classNameToUse="form-particular-error-holder">
                <div className="form-particulars-holder">
                  <span>{type}</span>
                  <Dropdown overlay={menu} trigger={['click']} placement={'bottomCenter'}>
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                      id="drop-down-arrow-holder"
                    >
                      <DownOutlined style={{ transform: 'translateX(-20px)' }} />
                    </a>
                  </Dropdown>
                </div>
              </FormHolder>
            </div>
            <FormHolder classNameToUse="form-details">
              <div className="form-details-error-holder">
                <div className="form-details-holder">
                  <textarea
                    placeholder="Message"
                    required={true}
                    onChange={props.handleChange}
                    value={props.values.message}
                    name="message"
                  />
                </div>
                <span>
                  {props.touched.message && props.errors.message && 'Message is a required field'}
                </span>
              </div>
            </FormHolder>
            <FormHolder classNameToUse="form-submit-button-box">
              <button className="form-submit-button" onClick={props.handleSubmit} type="submit">
                <span>SEND MESSAGE</span>
              </button>
            </FormHolder>
          </div>
          <Notification isShowMessage={isShowMessage} setIsShowMessage={setIsShowMessage} />
        </>
      )}
    </Formik>
  );
};

export default Form;
