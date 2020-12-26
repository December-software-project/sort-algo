import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import React from 'react';
import './styles.css';

/**
 * Performance section detailing the performance of the current sorting algorithm.
 *
 * @component
 * @category CodeExplanation
 * @returns {JSX.Element} Performance section component.
 */
const PerformanceSection = ({ sortDetails }) => {
  /**
   * Complexities terminologies used.
   *
   * @returns {JSX.Element} List of complexities component.
   */
  const ListOfComplexities = () => (
    <div className="text">
      <p>Worst time complexity</p>
      <p>Average time complexity</p>
      <p>Best time complexity</p>
      <p>Worst space complexity</p>
    </div>
  );

  /**
   * Complexities of the sorting algorithm.
   *
   * @returns {JSX.Element} Complexity component describing the complexities of the sorting
   * algorithm.
   */
  const Complexity = () => (
    <div className="complexity">
      <p>O({sortDetails.worstTime})</p>
      <p>θ({sortDetails.averageTime})</p>
      <p>Ω({sortDetails.bestTime})</p>
      <p>O({sortDetails.worstSpace})</p>
    </div>
  );

  /**
   * General type with icon template, used for detailing whether the sorting algorithm used is
   * stable and in-place.
   *
   * @param {string} type Input type.
   * @param {boolean} isTick detailing whether the type is true or false.
   * @returns {JSX.Element} Type with icon component.
   */
  const TypeWithIcon = ({ type, isTick }) => {
    /**
     * Icon type which describes whether the boolean is true or false. Returns the Tick symbol
     * if boolean is true, otherwise it returns the Cross symbol.
     *
     * @returns {JSX.Element} IconType.
     */
    const IconType = () => {
      return isTick ? (
        <FaCheckCircle size="25" color="#11C2C9" />
      ) : (
        <FaTimesCircle size="25" color="#FF4E4E" />
      );
    };

    return (
      <div className="typeWithIcon">
        <p>{type}</p>
        <IconType />
      </div>
    );
  };

  return (
    <div className="performance">
      <p className="explanation-para">
        {`Assuming N is the size of array, ` + sortDetails.additionalDesc}
      </p>
      <div className="row-container-one">
        <ListOfComplexities />
        <Complexity />
      </div>
      <div className="row-container-two">
        <TypeWithIcon type={'Stable'} isTick={sortDetails.stable} />
        <TypeWithIcon type={'In-place'} isTick={sortDetails.inPlace} />
      </div>
    </div>
  );
};

export default PerformanceSection;