import React, { useEffect, useState } from 'react';
import templates from '../templates/Templates';
import './styles.css';
import AceEditor from 'react-ace';
import 'ace-builds/webpack-resolver';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-textmate';

const CodeTemplate = ({ algo }) => {
  const [template, setTemplate] = useState(templates[algo]);
  const [selected, setSelected] = useState('Java');

  useEffect(() => {
    setTemplate(templates[algo]);
  }, [algo]);

  const Selector = () => {
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

  const getMode = () => (selected === 'C/C++' ? 'c_cpp' : selected.toLowerCase());

  return (
    <div className="code-template">
      <Selector />
      <AceEditor
        className="editor"
        mode={getMode()}
        theme="textmate"
        fontSize={14}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        value={template[selected]}
        readOnly={true}
        // showPrintMargin={false}
      />
    </div>
  );
};

export default CodeTemplate;
