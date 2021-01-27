import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';


// a proper place to define a component
const Statistics = (props) => {
  return (
    <div>
    <h1>Statistics</h1>
    <p>good  {props.good}</p> 
    <p>neutral  {props.neutral}</p>
    <p>bad  {props.bad}</p>
    <p>all {props.good + props.neutral + props.bad}</p>
    <p>average {(props.good - props.bad) / (props.good + props.neutral +props.bad)}</p>
      <p>percentage {(100 * props.good) / (props.good+props.neutral+props.bad)}%</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
       <h1>Give Feedback</h1>     
    <button onClick={() => setGood(good + 1)}>
    good
  </button>
  <button onClick={() => setNeutral(neutral + 1)}>
    neutral
  </button>
  <button onClick={() => setBad(bad + 1)}>
    bad
  </button>
  <Statistics good={good} neutral={neutral} bad={bad}/>
  </div>

  )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)
/*
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
    <h1>Statistics</h1>
    <p>good  {good}</p> 
    <p>neutral  {neutral}</p>
    <p>bad  {bad}</p>
    <p>all {good + neutral + bad}</p>
    <p>average {(good - bad) / (good + neutral +bad)}</p>
    <p>percentage {(100 * good) / (good+neutral+bad)}%</p>
    </div>
  )
}
ReactDOM.render(<App />, 
  document.getElementById('root')
)
*/