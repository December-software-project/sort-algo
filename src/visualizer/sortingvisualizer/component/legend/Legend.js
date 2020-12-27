import React, { useContext } from 'react';
import LegendInformation from './LegendInformation';
import LegendHeader from './LegendHeader';
import './styles.css';
import { VisualizerStateContext } from '../../Visualizer';
import { hasLegend, isMergeSort, isSelectionSort } from '../../util/GeneralUtil';

/**
 * A legend which display information about the current sorting animation.
 *
 * @component
 * @category Visualizer
 */
const Legend = () => {
  const { visualizerAlgorithm } = useContext(VisualizerStateContext);

  const legendInformation = [
    {
      color: 'linear-gradient(45deg, #13B1B7, #11C2C9)',
      description: isMergeSort(visualizerAlgorithm)
        ? 'Currently involved in the merge process'
        : isSelectionSort(visualizerAlgorithm)
        ? 'Currently involved in selection process'
        : 'Currently involved in the swap process',
    },
    {
      color: 'linear-gradient(45deg, #287ED0, #5466FF)',
      description: isMergeSort(visualizerAlgorithm)
        ? 'Not involved in the merge process'
        : isSelectionSort(visualizerAlgorithm)
        ? 'Not involved in the selection process'
        : 'Not involved in the swap process',
    },
  ];

  return (
    <div className="legend-box">
      {hasLegend(visualizerAlgorithm) && (
        <div>
          <div className="legend-header-box">
            <LegendHeader />
          </div>
          <div className="legend-information-box">
            {legendInformation.map(({ color, description }, index) => (
              <LegendInformation color={color} description={description} key={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Legend;
