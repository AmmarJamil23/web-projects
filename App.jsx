import React from 'react'
import WelcomeMessage from './WelcomeMessage'
import JSXRules from './components/JSXRules'

const App = () => {
  const myName = "Ammar"

  const multiply = (a, b) => a * b

  const specialClass = 'Simple-Class'
  return (
    <section>
      <p>2 + 2 = {2 + 2}</p>
      <h1> {myName}</h1>

      <p>My friends list: {['ammar', 'ali']}</p>

      <p>10 * 2 = {multiply(10, 2)}</p>

      <p className= {specialClass}>This is a special class</p>
    </section>
  )
}

export default App
