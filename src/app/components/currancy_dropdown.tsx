"use client"
import { useState } from 'react';

const DropdownMenuCurrancy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const currencies = ['USD', 'PKR', 'EUR'];

  return (
    <div className="relative inline-block">
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center bg-transparent text-white px-4 py-2 rounded-md"
      >
        {selectedCurrency}
        <span className="ml-2">&#9662;</span> 
      </button>

      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-violet-800 text-white rounded-md shadow-lg">
          {currencies.map((currency) => (
            <button
              key={currency}
              onClick={() => {
                setSelectedCurrency(currency);
                setIsOpen(false);
              }}
              className="block px-4 py-2 text-sm hover:bg-gray-700 w-full text-left"
            >
              {currency}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenuCurrancy;
