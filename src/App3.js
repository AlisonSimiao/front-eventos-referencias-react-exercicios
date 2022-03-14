import React, { useRef } from 'react';
import './App.css';

function App3() {
  const daniel = useRef(null);
  const joao = useRef(null);
  const pedro = useRef(null);
  const defaultBehavior = {
    fontSize: '10px', 
    color: 'black',
  }
  const behavior = {
    daniel: {
      fontSize: '30px', 
      color: 'red',
    },
    joao: {
      fontSize: '60px', 
      color: 'green',
    },
    pedro:{
      fontSize: '90px', 
      color: 'blue',
    }
}
  const handleClick = (target)=>{
      
      const strong = target.current;
      let config;

      if(strong.style.fontSize !== "10px")
        config = defaultBehavior;   
      else 
        config = behavior[strong.id];
          
      console.log( config );
      strong.style.fontSize = config.fontSize;
      strong.style.color = config.color;
  }

  return (
    <div className="App">
      <strong id="daniel" ref={daniel} style={defaultBehavior} onClick={_=>handleClick(daniel)}>Daniel</strong>
      <strong id="joao" ref={joao}     style={defaultBehavior} onClick={_=>handleClick(joao)}>João</strong>
      <strong id="pedro" ref={pedro}   style={defaultBehavior} onClick={_=>handleClick(pedro)}>Pedro</strong>
    </div>
  );
}

export default App3;
