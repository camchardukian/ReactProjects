import React from 'react';
import Calculator from '../src/containers/Calculator';
import NumberProvider from '../src/providers/NumberProvider';

function App() {
  return (
    <div className="App">
    <NumberProvider>
      <Calculator />
    </NumberProvider>
    </div>
  );
}
export default App;
