import React, { useRef} from 'react';
import './App.css';

function App() {
  const countRef = useRef(0);
  const incrementRef = useRef(null);
  const incrementLet = useRef(null);

  let count = 0;

  console.log("Renderizou");
  console.log(countRef.current, "countRef")
  console.log(count, "count")

  return (
    <div className="App">
      <button 
        onClick={ (evt) => {
          countRef.current += 1;
          console.log("Valor de countRef", countRef.current);
        }}
        ref={incrementRef}
      >
        Increment ref
      </button>
      <button 
        onClick={() => {
          count += 1;
          console.log("Valor de count", count);
        }}
        ref={incrementLet}>
        Increment let
      </button>
    </div>
  );
}

export default App;
