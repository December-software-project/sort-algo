import React, { useState } from 'react';
import './styles.css';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Formik } from 'formik';
import * as yup from 'yup';
import emailjs from 'emailjs-com';

const Form = () => {
  const [type, setType] = useState('Type (Optional)');

  const listOfTypes = [
    { type: 'Type (Optional)', key: 0 },
    { type: 'Collaboration', key: 1 },
    { type: 'Improvement', key: 2 },
    { type: 'Issue', key: 3 },
    { type: 'Others', key: 4 },
  ];

  const handleMenuClick = (type) => {
    setType(type);
  };

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
      className="form-box"
      initialValues={{ name: '', email: '', type: '', message: '' }}
      validationSchema={reviewSchema}
      onSubmit={(values, actions) => {
        sendMessage(values);
        setType('Type (Optional)');
        actions.resetForm();
      }}
    >
      {(props) => (
        <div>
          <div className="form-particulars" id="form-particulars">
            <div className="form-particular-error-holder">
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
            </div>
            <div className="form-particular-error-holder">
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
            </div>
            <div className="form-particular-error-holder">
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
            </div>
          </div>
          <div className="form-details">
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
          </div>
          <div className="form-submit-button-box">
            <button className="form-submit-button" onClick={props.handleSubmit} type="submit">
              <span>SEND MESSAGE</span>
            </button>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Form;
