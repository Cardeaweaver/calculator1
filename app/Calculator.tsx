'use client'

import { useState } from 'react'

export default function Calculator() {
  const [display, setDisplay] = useState('')

  const handleButtonClick = (value: string) => {
    if (value === 'C') {
      setDisplay('')
    } else if (value === '=') {
      try {
        // Replace special operators for evaluation
        let expression = display
          .replace(/sqrt/g, 'Math.sqrt')
          .replace(/\^/g, '**')
          .replace(/sin/g, 'Math.sin')
          .replace(/cos/g, 'Math.cos')
          .replace(/tan/g, 'Math.tan')
          .replace(/log/g, 'Math.log10')
          .replace(/ln/g, 'Math.log')
          .replace(/pi/g, 'Math.PI')
          .replace(/e(?![0-9])/g, 'Math.E')
        
        // Handle factorial
        if (expression.includes('!')) {
          const match = expression.match(/(\d+)!/)
          if (match) {
            const num = parseInt(match[1])
            let factorial = 1
            for (let i = 2; i <= num; i++) {
              factorial *= i
            }
            expression = expression.replace(/(\d+)!/, factorial.toString())
          }
        }
        
        const result = eval(expression)
        setDisplay(result.toString())
      } catch (error) {
        setDisplay('Error')
      }
    } else {
      setDisplay(display + value)
    }
  }

  return (
    <>
      <video id="background-video" autoPlay loop muted>
        <source src="/hack.mp4" type="video/mp4" />
      </video>

      <h1>This Is My Cool Math Box</h1>

      <div id="confetti-container"></div>
      <div className="calculator">
        <h3>Cardeá&apos;s Box-O-Math</h3>
        <input type="text" id="display" value={display} readOnly />
        <div className="buttons">
          <div className="clear">
            <button id="clear" onClick={() => handleButtonClick('C')}>
              C
            </button>
          </div>
          <button className="number" onClick={() => handleButtonClick('7')}>7</button>
          <button className="number" onClick={() => handleButtonClick('8')}>8</button>
          <button className="number" onClick={() => handleButtonClick('9')}>9</button>
          <button id="operator" onClick={() => handleButtonClick('+')}>+</button>
          <button className="number" onClick={() => handleButtonClick('4')}>4</button>
          <button className="number" onClick={() => handleButtonClick('5')}>5</button>
          <button className="number" onClick={() => handleButtonClick('6')}>6</button>
          <button id="operator" onClick={() => handleButtonClick('-')}>-</button>
          <button className="number" onClick={() => handleButtonClick('1')}>1</button>
          <button className="number" onClick={() => handleButtonClick('2')}>2</button>
          <button className="number" onClick={() => handleButtonClick('3')}>3</button>
          <button id="operator" onClick={() => handleButtonClick('*')}>*</button>
          <button className="number" onClick={() => handleButtonClick('0')}>0</button>
          <button className="number" onClick={() => handleButtonClick('.')}>.</button>
          <button id="equals" onClick={() => handleButtonClick('=')}>=</button>
          <button id="operator" onClick={() => handleButtonClick('/')}>/</button>
          <button id="operator" onClick={() => handleButtonClick('sqrt')}>sqrt</button>
          <button id="operator" onClick={() => handleButtonClick('^')}>^</button>
          <button id="operator" onClick={() => handleButtonClick('sin')}>sin</button>
          <button id="operator" onClick={() => handleButtonClick('cos')}>cos</button>
          <button id="operator" onClick={() => handleButtonClick('tan')}>tan</button>
          <button id="operator" onClick={() => handleButtonClick('log')}>log</button>
          <button id="operator" onClick={() => handleButtonClick('ln')}>ln</button>
          <button id="operator" onClick={() => handleButtonClick('!')}>!</button>
          <button id="operator" onClick={() => handleButtonClick('%')}>%</button>
          <button id="operator" onClick={() => handleButtonClick('pi')}>pi</button>
          <button id="operator" onClick={() => handleButtonClick('e')}>e</button>
        </div>
      </div>
    </>
  )
}
