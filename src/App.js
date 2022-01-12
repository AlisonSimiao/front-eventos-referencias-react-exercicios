import { useRef, useEffect } from 'react';
import './App.css';

function App() {
  const countRef = useRef(0);
  const incrementRef = useRef(null);
  const incrementLet = useRef(null);

  let count = 0;

  console.log("Renderizou");
  console.log(countRef.current, "countRef")
  console.log(count, "count")

  useEffect(() => {
    incrementRef.current.addEventListener('click', () => {
      countRef.current += 1;
      console.log("Valor de countRef", countRef.current);
    });

    incrementLet.current.addEventListener('click', () => {
      count += 1;
      console.log("Valor de count", count);
    });

  }, []);

  return (
    <div className="App">
      <button ref={incrementRef}>
        Increment ref
      </button>
      <button ref={incrementLet}>
        Increment let
      </button>
    </div>
  );
}

export default App;
