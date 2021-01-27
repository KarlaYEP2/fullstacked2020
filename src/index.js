import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';

const Statistic = (props) => {
  return(
    <p>{props.text} {props.value}</p>
  )
}

// a proper place to define a component
const Statistics = (props) => {
  if (props.good + props.neutral + props.bad===0) {
    return(
      <div>
        <h1>no Statistics</h1>
      </div>
    )
  }
  return (
    <div>
    <h1>Statistics</h1>
    <Statistic text="good" value ={props.good} />
    <Statistic text="neutral" value ={props.neutral} />
    <Statistic text="bad" value ={props.bad} />
    <Statistic text="all" value ={props.good + props.neutral + props.bad} />
    <Statistic text="average" value ={(props.good - props.bad) / (props.good + props.neutral +props.bad)} />
    <Statistic text="percentage" value ={(100 * props.good) / (props.good+props.neutral+props.bad)} />
    </div>
  )
}
const Button = (props) => {
  return(
    <button onClick={() => props.setValue(props.value + 1)}>{props.text}</button>
  )
  }
  
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
       <h1>Give Feedback</h1>     
        <Button value={good} text={"good"} setValue={setGood}/>
        <Button value={neutral} text={"neutral"} setValue={setNeutral}/>
        <Button value={bad} text={"bad"} setValue={setBad}/>
       <Statistics good={good} neutral={neutral} bad={bad}/>  </div>


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