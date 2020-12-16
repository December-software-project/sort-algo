import React, { useEffect, useState } from 'react';
import './CodeExplanation.css';
import explanations from '../explanations/Explanations';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const CodeExplanation = ({ algo }) => {
  const [sort, setSort] = useState(explanations[algo]);

  useEffect(() => {
    setSort(explanations[algo]);
  }, [algo]);

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
          <FaCheckCircle size="25" color="#11C2C9" />
        ) : (
          <FaTimesCircle size="25" color="#FF4E4E" />
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
        <p className="explanation-para">
          {`Assuming N is the size of array, ` + sort.additionalDesc}
        </p>
        <div className="row-container-one">
          {text()}
          {complexity()}
        </div>
        <div className="row-container-two">
          {wordWithIcon('Stable', sort.stable)}
          {wordWithIcon('In-place', sort.inPlace)}
        </div>
      </div>
    );
  };

  return (
    <div className="main">
      {headerOne()}
      {explanation()}
      {headerTwo()}
      {performanceSection()}
    </div>
  );
};

export default CodeExplanation;
