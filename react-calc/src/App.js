import React from 'react';
import './App.css';
import Calculator from '../src/containers/Calculator';
import NumberProvider from '../src/providers/NumberProvider';
// /Users/cameronchardukian/Desktop/ReactProjects/react-calc/src/providers/NumberProvider.js
function App() {
  return (
    <div className="App">
    <NumberProvider>
      <Calculator />
    </NumberProvider>
    </div>
  );
}
// /Users/cameronchardukian/Desktop/ReactProjects/react-calc/src/providers

// /Users/cameronchardukian/Desktop/ReactProjects/react-calc/src/App.js
export default App;
