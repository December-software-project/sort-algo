import React from 'react';
import './styles.css';

/**
 * Selector component which allows the users to select the code corresponding to the programming
 * language.
 *
 * @component
 * @category CodeTemplate
 * @returns {JSX.Element} Selector component.
 */
const Selector = ({ selected, setSelected }) => {
  /**
   * Select button for users to choose the programming language.
   *
   * @param language Programming language.
   * @returns {JSX.Element} Select button.
   */
  const Select = ({ language }) => (
    <p
      className="select"
      style={{
        background: selected === language ? `linear-gradient(0deg, #7c89f8, #5466ff)` : `#A5BBC9`,
      }}
      onClick={() => setSelected(language)}
    >
      {language}
    </p>
  );

  return (
    <div className="selector">
      <Select language={'Java'} />
      <Select language={'JavaScript'} />
      <Select language={'Python'} />
      <Select language={'C/C++'} />
    </div>
  );
};

export default Selector;
