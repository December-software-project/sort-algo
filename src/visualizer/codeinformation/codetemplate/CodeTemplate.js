import React, { useEffect, useState } from 'react';
import templates from '../templates/Templates';
import Selector from './Selector';
import './styles.css';
import AceEditor from 'react-ace';
import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-textmate';

/**
 * Code template which encapsulates the details for the programming language selectors and code
 * editor.
 *
 * @component
 * @category CodeTemplate
 * @param {string} algo Current algorithm selected.
 * @returns {JSX.Element} Code template component.
 */
const CodeTemplate = ({ algo }) => {
  // Code templates used of this algorithm
  const [template, setTemplate] = useState(() => templates[algo]);

  // Current programming language selected
  const [selected, setSelected] = useState('Java');

  useEffect(() => {
    setTemplate(templates[algo]);
  }, [algo]);

  /**
   * Gets the current mode corresponding to the programming language selected.
   *
   * @returns {string} Current mode.
   */
  const getMode = () => (selected === 'C/C++' ? 'c_cpp' : selected.toLowerCase());

  return (
    <div className="code-template">
      <Selector selected={selected} setSelected={setSelected} />
      <AceEditor
        className="editor"
        mode={getMode()}
        theme="textmate"
        fontSize={14}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        value={template[selected]}
        readOnly={true}
      />
    </div>
  );
};

export default CodeTemplate;
