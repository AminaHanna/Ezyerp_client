import React, { useState } from 'react';
import languageIcon from "../../External Files/Icons/translation.png"

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = ['English', 'Spanish', 'French', 'German', 'Chinese'];

  const handleChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <div className="flex items-center">
      <select
        id="language"
        value={selectedLanguage}
        onChange={handleChange}
        className=""
      >
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
      <img className='h-5' src={languageIcon} alt="" />
    </div>
  );
};

export default LanguageSelector;
