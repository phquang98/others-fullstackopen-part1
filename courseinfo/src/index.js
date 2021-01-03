import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Header = ({ course }) => {
  return (
    <Fragment>
      <h1>{course}</h1>
    </Fragment>
  );
};

const Part = ({ part, exercise }) => {
  return (
    <Fragment>
      <p>
        {part} {exercise}
      </p>
    </Fragment>
  );
};

const Content = ({ data }) => {
  return (
    <Fragment>
      {data.map((dataUnit) => (
        <Part part={dataUnit.name} exercise={dataUnit.exercises}></Part>
      ))}
    </Fragment>
  );
};

const Total = ({ data }) => {
  let totalExes = 0;
  data.map((dataUnit) => (totalExes = Number(totalExes) + Number(dataUnit.exercises)));

  return (
    <Fragment>
      <p>Number of exercises {totalExes}</p>
    </Fragment>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content data={course.parts} />
      <Total data={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
