// components/ThemeToggleButton.js
import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const ThemeToggleButton = () => {
  const { currentMode, toggleMode } = useStateContext();

  return (
    <button
      onClick={toggleMode}
      className="text-sm px-4 py-2 rounded-md shadow-md transition-all duration-300"
      style={{
        backgroundColor: currentMode === 'Dark' ? '#1f2937' : '#e5e7eb',
        color: currentMode === 'Dark' ? '#f3f4f6' : '#111827',
        border: '1px solid #d1d5db',
        cursor: 'pointer',
      }}
    >
      {currentMode === 'Dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
};

export default ThemeToggleButton;
