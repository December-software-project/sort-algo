import React, { useState, useEffect } from 'react';
import templates from '../templates/Templates';
import './CodeTemplate.css';

const CodeTemplate = ({ algo }) => {
  const [template, setTemplate] = useState(templates[algo]);

  useEffect(() => {
    setTemplate(templates[algo]);
  }, [algo]);

  return <div className="codeTemplate">{/*<span>{template.C}</span>*/}</div>;
};

export default CodeTemplate;
