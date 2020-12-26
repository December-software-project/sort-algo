import React, { useEffect, useState } from 'react';
import './styles.css';
import explanations from '../explanations/Explanations';
import PerformanceSection from './PerformanceSection';

/**
 * CodeExplanation component which encapsulates the details for how the sorting algorithm works,
 * and the performance of the algorithm.
 *
 * @component
 * @category CodeExplanation
 * @param {string} algo Current algorithm selected.
 * @returns {JSX.Element} Code explanation component.
 */
const CodeExplanation = ({ algo }) => {
  // Sort details of the algorithm.
  const [sortDetails, setSortDetails] = useState(() => explanations[algo]);

  useEffect(() => {
    setSortDetails(explanations[algo]);
  }, [algo]);

  /**
   * First header component for the explanation section.
   *
   * @returns {JSX.Element} First header component for the explanation section.
   */
  const HeaderOne = () => <header>How {sortDetails.name} Sort works</header>;

  /**
   * Explanation component detailing how the code works.
   *
   * @returns {JSX.Element} Explanation component detailing how the code works.
   */
  const Explanation = () => <p style={{ width: `112%` }}>{sortDetails.description}</p>;

  /**
   * Second header component for the performance section.
   *
   * @returns {JSX.Element} Second header component for the performance section.
   */
  const HeaderTwo = () => <header>Performance</header>;

  /**
   * Link component which provides a link to an external website for more information about the
   * sorting algorithm used.
   *
   * @returns {JSX.Element} Link component.
   */
  const Link = () => (
    <a className="link" target="_blank" rel="noopener noreferrer" href={sortDetails.link}>
      Click for more info
    </a>
  );

  return (
    <div className="main">
      <HeaderOne />
      <Explanation />
      <HeaderTwo />
      <PerformanceSection sortDetails={sortDetails} />
      <Link />
    </div>
  );
};

export default CodeExplanation;
