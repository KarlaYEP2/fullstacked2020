import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => { 
    return (
        <div>
      <h1>{props.course}</h1>
          </div>  
)
}
const Part = (props) => {

return (
<div>
  <p>part {props.parts.name}, exercises {props.parts.exercises} </p>
</div>
)
}

const Content = (props) => {
  return (
  <div>
    <Part parts={props.parts[0]}/>
    <Part  parts={props.parts[1]}/>
    <Part  parts={props.parts[2]}/>

  </div>
  )
}



const Total = (props) => {
return (
  <div>
    <p>
      Total {props.total[0].exercises+props.total[1].exercises+props.total[2].exercises}
    </p>
  </div>
)
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total total={parts}/>

      </div>
  )
}
/*
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
    // const-definitions

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1}
      exercises1={exercises1}
      exercises2={exercises2}
      exercises3={exercises3}
      part2={part2}
      part3={part3}/>
      <Total total={exercises1+exercises2+exercises3}/>
    </div>
  )
}
*/

ReactDOM.render(<App />, document.getElementById('root'))