import React from 'react';
import { SearchField } from './searchContainer';
import './App.css';

function App() {
  return (
    <div className="App flex flex-row content-center justifiy-center items-center">
      <div className="rounded border-1 border-gray-600 w-1/3 max-w-1/3 h-screen bg-red-300 mr-4 ml-4 flex flex-col justify-center items-center">
        <div className="mb-4">
          <h1 className="text-3xl">Naive approach</h1>
          <h3>Using ilike with placeholders</h3>
        </div>
        <pre className="mb-4">
          This will produce: %wow such words%
        </pre>
        <div className="border-t-2 border-solid border-black"></div>
        <SearchField />
      </div>
      <div className="rounded border-1 border-gray-600 w-1/3 max-w-1/3 h-screen bg-gray-300 mr-4 ml-4 flex flex-col justify-center items-center">
        <div className="mb-4">
          <h1 className="text-3xl">Compliant aproach</h1>
          <h3>Inserting placeholders at the middle of each word (when input has multiple words)</h3>
        </div>
        <pre className="mb-4">
          This will produce: %wow%such%words%
        </pre>
        <SearchField />
      </div>
      <div className="rounded border-1 border-gray-600 w-1/3 max-w-1/3 h-screen bg-green-300 mr-4 ml-4 flex flex-col justify-center items-center">
        <div className="mb-4">
          <h1 className="text-3xl">Good approach</h1>
          <h3>Using word distance and similarity calculations to show correct value</h3>
        </div>
        <pre className="mb-4">
          This will produce: [' w', 'wow', 'ow ',... ]
        </pre>
        <SearchField />
      </div>
    </div>
  );
}

export default App;
