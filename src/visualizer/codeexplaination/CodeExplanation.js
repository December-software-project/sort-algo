import React from 'react';
import './CodeExplanation.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const CodeExplanation = ({ explanations }) => {
  const sort = explanations.Bubble;

  const headerOne = () => <header>How {sort.name} Sort works</header>;
  const explanation = () => <p>{sort.description}</p>;
  const headerTwo = () => <header>Performance</header>;

  const performanceSection = () => {
    const text = () => (
      <div className="text">
        <p>Worst time complexity</p>
        <p>Average time complexity</p>
        <p>Best time complexity</p>
        <p>Worst space complexity</p>
      </div>
    );

    const complexity = () => (
      <div className="complexity">
        <p>O({sort.worstTime})</p>
        <p>θ({sort.averageTime})</p>
        <p>Ω({sort.bestTime})</p>
        <p>O({sort.worstSpace})</p>
      </div>
    );

    const wordWithIcon = (word, boolean) => {
      const getIcon = () => {
        return boolean ? (
          <FaCheckCircle size="27" color="green" />
        ) : (
          <FaTimesCircle size="27" color="red" />
        );
      };

      return (
        <div className="wordWithIcon">
          <p>{word}</p>
          {getIcon()}
        </div>
      );
    };

    return (
      <div className="performance">
        <div className="rowContainerOne">
          {text()}
          {complexity()}
        </div>
        <div className="rowContainerTwo">
          {wordWithIcon('In-place', sort.inPlace)}
          {wordWithIcon('Stable', sort.stable)}
        </div>
      </div>
    );
  };

  return (
    <div className="explanation">
      {headerOne()}
      {explanation()}
      {headerTwo()}
      {performanceSection()}
    </div>
  );
};

export default CodeExplanation;
