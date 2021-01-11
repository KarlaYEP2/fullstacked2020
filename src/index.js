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
    <Part part={props.part1}
      exercises={props.exercises1}/>
    <Part exercises={props.exercises2} part={props.part2}/>
    <Part exercises={props.exercises3} part={props.part3}/>

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
/*
  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
  */
}


ReactDOM.render(<App />, document.getElementById('root'))