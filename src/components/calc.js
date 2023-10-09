import React, { useState } from "react";

const Calc= () => {
  const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }
  const clear =() => {
    setResult("");
  }
  const calculate = ()=>{
    try{
      setResult(eval(result).toString());
    } catch(err){
      setResult('Error');
    }
    
  }
  return (
      <div className="container">
        <section className="screen">
          {result}
        </section>
        <section className="button-container">
            <div className="column">
              <button name="7" onClick={handleClick}>7</button>
              <button name="4" onClick={handleClick}>4</button>
              <button name="1" onClick={handleClick}>1</button>
              <button name="0" onClick={handleClick}>0</button>
            </div>
            <div className="column">
              <button name="8" onClick={handleClick}>8</button>
              <button name="5" onClick={handleClick}>5</button>
              <button name="2" onClick={handleClick}>2</button>
              <button name="." onClick={handleClick}>.</button>
            </div>
            <div className="column">
              <button name="9" onClick={handleClick}>9</button>
              <button name="6" onClick={handleClick}>6</button>
              <button name="3" onClick={handleClick}>3</button>
              <button name="=" onClick={calculate}  id="result">=</button>
            </div>
            <div className="column-special">
              <button onClick={clear} id="clear">DEL</button>
              <button name="/" onClick={handleClick}>&divide;</button>
              <button name="*" onClick={handleClick}>&times;</button>
              <button name="-" onClick={handleClick}>&minus;</button>
              <button name="+" onClick={handleClick}>+</button>
            </div>
        </section>
      </div>
  );
}

export default Calc;