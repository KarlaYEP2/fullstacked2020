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
  <p>part {props.part}, exercises {props.exercises}</p>
</div>
)
}

const Content = (props) => {
  return (
  <div>
    <Part part={props.part1} exercises={props.exercises1}/>
    <Part  part={props.part2} exercises={props.exercises2}/>
    <Part  part={props.part3} exercises={props.exercises3}/>

  </div>
  )
}



const Total = (props) => {
return (
  <div>
    <p>
      Total {props.total}
    </p>
  </div>
)
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
const partExercise = 'exercises'
console.log(part1[partExercise])
  return (
    <div>
      <Header course={course}/>
      <Content part1={part1.name}
      part2={part2.name}
      part3={part3.name}
      exercises1={part1.exercises}
      exercises2={part2.exercises}
      exercises3={part3.exercises}/>
      <Total total={part1.exercises+part2.exercises+part3.exercises}/>

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