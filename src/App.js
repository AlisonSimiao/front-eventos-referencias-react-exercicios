import { useRef } from 'react';
import './App.css';

function App() {
  const countRef = useRef(0);
  let count = 0;

  console.log("Renderizou");
  console.log(countRef.current, "countRef")
  console.log(count, "count")

  function incrementCountRef() {
    countRef.current += 1;
    console.log("Valor de countRef", countRef.current);
  }

  function incrementCount() {
    count += 1;
    console.log("Valor de count", count);
  }

  return (
    <div className="App">
      <button onClick={() => incrementCountRef()}>Increment ref</button>
      <button onClick={() => incrementCount()}>Increment let</button>
    </div>
  );
}

export default App;
