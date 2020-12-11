import React from 'react';
import './CodeTemplate.css';

const CodeTemplate = ({ templates }) => {
  const template = templates.Bubble;

  return (
    <div className="codeTemplate">
      <span>{template.C}</span>
    </div>
  );
};

export default CodeTemplate;
