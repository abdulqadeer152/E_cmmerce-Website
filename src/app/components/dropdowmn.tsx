"use client"
import { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const languages = ['English', 'French', 'Urdu'];

  return (
    <div className="relative inline-block">
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center bg-transparent text-white px-4 py-2 rounded-md"
      >
        {selectedLanguage}
        <span className="ml-2">&#9662;</span> 
      </button>

      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-violet-800 text-white rounded-md shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setSelectedLanguage(lang);
                setIsOpen(false);
              }}
              className="block px-4 py-2 text-sm hover:bg-gray-700 w-full text-left"
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
