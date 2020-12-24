import CodeExplanation from './codeexplaination/CodeExplanation';
import CodeTemplate from './codetemplate/CodeTemplate';
import React from 'react';
import './styles.css';

const CodeInformation = ({ visualizerAlgorithm }) => (
  <div className="code">
    <CodeExplanation algo={visualizerAlgorithm} />
    <CodeTemplate algo={visualizerAlgorithm} />
  </div>
);

export default CodeInformation;
