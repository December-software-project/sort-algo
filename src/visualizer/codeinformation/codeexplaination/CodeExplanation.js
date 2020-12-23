import React, { useEffect, useState } from 'react';
import './styles.css';
import explanations from '../explanations/Explanations';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const CodeExplanation = ({ algo }) => {
  const [sort, setSort] = useState(explanations[algo]);

  useEffect(() => {
    setSort(explanations[algo]);
  }, [algo]);

  const HeaderOne = () => <header>How {sort.name} Sort works</header>;
  const Explanation = () => <p style={{ width: `112%` }}>{sort.description}</p>;
  const HeaderTwo = () => <header>Performance</header>;

  const PerformanceSection = () => {
    const ListOfComplexities = () => (
      <div className="text">
        <p>Worst time complexity</p>
        <p>Average time complexity</p>
        <p>Best time complexity</p>
        <p>Worst space complexity</p>
      </div>
    );

    const Complexity = () => (
      <div className="complexity">
        <p>O({sort.worstTime})</p>
        <p>θ({sort.averageTime})</p>
        <p>Ω({sort.bestTime})</p>
        <p>O({sort.worstSpace})</p>
      </div>
    );

    const WordWithIcon = ({ word, boolean }) => {
      const CircleType = () => {
        return boolean ? (
          <FaCheckCircle size="25" color="#11C2C9" />
        ) : (
          <FaTimesCircle size="25" color="#FF4E4E" />
        );
      };

      return (
        <div className="wordWithIcon">
          <p>{word}</p>
          <CircleType />
        </div>
      );
    };

    return (
      <div className="performance">
        <p className="explanation-para">
          {`Assuming N is the size of array, ` + sort.additionalDesc}
        </p>
        <div className="row-container-one">
          <ListOfComplexities />
          <Complexity />
        </div>
        <div className="row-container-two">
          <WordWithIcon word={'Stable'} boolean={sort.stable} />
          <WordWithIcon word={'In-place'} boolean={sort.inPlace} />
        </div>
      </div>
    );
  };

  const Link = () => (
    <a className="link" target="_blank" rel="noopener noreferrer" href={sort.link}>
      Click for more info
    </a>
  );

  return (
    <div className="main">
      <HeaderOne />
      <Explanation />
      <HeaderTwo />
      <PerformanceSection />
      <Link />
    </div>
  );
};

export default CodeExplanation;
