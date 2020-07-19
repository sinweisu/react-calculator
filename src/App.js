import React, {useState } from 'react';
import './App.css';
import * as Style from './style';

const App = () => {
  const [input, setInput] = useState('0');


  const handleClick = (e) => {
    if (input.length === 11) {
      alert('Too long!');
    } else {
      // console.log(input);
      if (input === '0') {
        setInput(e.target.value);
      } else {
        setInput((input + e.target.value));
      }
    }
  }

  const handleCalculate = (e) => {
    setInput(eval(input));
  }

  const handleClear = () => {
    setInput('0');
  }

  const handleDelete = () => {
    if (input.length === 1) {
      setInput('0');
    } else {
      setInput((input.toString()).slice(0, -1));
    }
  }

  return (
    <Style.Calculator>
      <Style.WindowDiv>{input}</Style.WindowDiv>
      <Style.KeyBoardDiv>
        <Style.ClearKeyDiv>
          <div>
            <button onClick={handleClear} style={{ width: 150 }}>CLEAR</button>
          </div>
          <div>
            <button onClick={handleDelete} style={{ width: 70 }}> D</button>
          </div>
        </Style.ClearKeyDiv>
        <Style.NumberAndOperatorDiv>
          <Style.NumberKeyDiv>
            <div>
              <button value='7' onClick={handleClick} style={{marginLeft: 10}}>7</button>
              <button value='8' onClick={handleClick} style={{}}>8</button>
              <button value='9' onClick={handleClick} style={{}}>9</button>
            </div>
            <div>
              <button value='4' onClick={handleClick} style={{marginLeft: 10}}>4</button>
              <button value='5' onClick={handleClick} style={{}}>5</button>
              <button value='6' onClick={handleClick} style={{}}>6</button>
            </div>
            <div>
              <button value='1' onClick={handleClick} style={{marginLeft: 10}}>1</button>
              <button value='2' onClick={handleClick} style={{}}>2</button>
              <button value='3' onClick={handleClick} style={{}}>3</button>
            </div>
            <div>
              <button value='0' onClick={handleClick} style={{ width: 110, marginBottom: 10, marginLeft: 10}}>0</button>
              <button value='=' onClick={handleCalculate} style={{marginBottom: 10}}>=</button>
            </div>

          </Style.NumberKeyDiv>
          <Style.OperatorDiv>
            <div><button value='+' onClick={handleClick} style={{ width: 50, height: 50, marginTop: 5, marginBottom: 5, marginLeft: 5, marginRight: 10 }}>+</button></div>
            <div><button value='-' onClick={handleClick} style={{ width: 50, height: 50, marginTop: 5, marginBottom: 5, marginLeft: 5, marginRight: 10 }}>-</button></div>
            <div><button value='*' onClick={handleClick} style={{ width: 50, height: 50, marginTop: 5, marginBottom: 5, marginLeft: 5, marginRight: 10 }}>*</button></div>
            <div><button value='/' onClick={handleClick} style={{ width: 50, height: 50, marginTop: 5, marginBottom: 5, marginLeft: 5, marginRight: 10 }}>/</button></div>
          </Style.OperatorDiv>
        </Style.NumberAndOperatorDiv>
      </Style.KeyBoardDiv>
    </Style.Calculator>
  );
}

export default App;
