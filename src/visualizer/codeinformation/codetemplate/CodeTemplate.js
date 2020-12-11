import React, { useEffect, useState } from 'react';
import templates from '../templates/Templates';
import './CodeTemplate.css';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/theme-chrome';

const CodeTemplate = ({ algo }) => {
  const [template, setTemplate] = useState(templates[algo]);
  const [selected, setSelected] = useState('Java');

  useEffect(() => {
    setTemplate(templates[algo]);
  }, [algo]);

  const selector = () => {
    const select = (language) => (
      <p
        className="select"
        style={{
          background:
            selected === language
              ? `linear-gradient(0deg, #5E9BD1, #292C59)`
              : `linear-gradient(0deg, #A5BBC9, #535E65)`,
        }}
        onClick={() => setSelected(language)}
      >
        {language}
      </p>
    );

    return (
      <div className="selector">
        {select('Java')}
        {select('JavaScript')}
        {select('Python')}
        {select('C/C++')}
      </div>
    );
  };

  const getMode = () => (selected === 'C/C++' ? 'c_cpp' : selected.toLowerCase());

  return (
    <div className="codeTemplate">
      {selector()}
      <AceEditor
        className="editor"
        mode={getMode()}
        theme="chrome"
        fontSize={14}
        editorProps={{ $blockScrolling: true }}
        value={template[selected]}
        readOnly={true}
      />
    </div>
  );
};

export default CodeTemplate;
