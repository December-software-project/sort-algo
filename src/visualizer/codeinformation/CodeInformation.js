import CodeExplanation from './codeexplaination/CodeExplanation';
import CodeTemplate from './codetemplate/CodeTemplate';
import React from 'react';
import './styles.css';

/**
 * Code information component which provides information on the current sorting algorithm.
 *
 * @component
 * @param {string} visualizerAlgorithm Current sorting algorithm selected.
 * @returns {JSX.Element} Code information component which provides information on the current sorting algorithm.
 */
const CodeInformation = ({ visualizerAlgorithm }) => (
  <div className="code">
    <CodeExplanation algo={visualizerAlgorithm} />
    <CodeTemplate algo={visualizerAlgorithm} />
  </div>
);

export default CodeInformation;
