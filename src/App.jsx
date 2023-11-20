// const [count, setCount] = useState(0)

// function increment() {
//   setCount(count+1)
// }
/*
    <div>
        <button onClick={increment}>
          The count is {count}
        </button>
    </div>
*/

import { useState } from 'react'

import './App.css'

function App() {

  let [userInput, setUserInput] = useState("")

  function handleForm(e) {
    e.preventDefault()
    if (validCard(userInput)) {
      console.log('valid number')
    } else {
      console.log('invalid number')
    }
  }

  function handleInput(e) {
    setUserInput(e.target.value)
  }

  function validCard(str) {
    str = str.replaceAll(" ","")
    let doubles = ""
    for (let i = 0; i < str.length; i++) {
      let char = str[i]
      if (i%2===0) {
        doubles += (Number(char)*2)
      } else {
        doubles += char
      }
    }
    let sum = doubles.split('').map(c=>Number(c)).reduce((a,b)=>a+b)
    console.log("doubles:",doubles)
    console.log("sum:",sum)
    return sum%10===0
  }

  return (
    <>
      <form onSubmit={handleForm}>
        <div className="field">
          <input 
            type="text" 
            placeholder='Credit card number'
            onInput={handleInput}
            />
        </div>
        <button>
          Submit
        </button>
      </form>

    </>
  )
}
     

export default App
