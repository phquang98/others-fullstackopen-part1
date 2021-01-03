import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

const Stat = ({ text, content }) => {
  return (
    <Fragment>
      {text === "Positive" ? (
        <tr>
          <th>{text}</th>
          <td>{content}%</td>
        </tr>
      ) : (
        <tr>
          <th>{text}</th>
          <td>{content}</td>
        </tr>
      )}
    </Fragment>
  );
};

const Stats = ({ data }) => {
  const allHelper = () => data.good + data.neutral + data.bad;

  const avgHelper = () => {
    const res = (1 * data.good + 0 * data.neutral + -1 * data.bad) / allHelper();
    return res.toFixed(3);
  };

  const posHelper = () => {
    const res = data.good / (data.good + data.bad);
    return Math.round(res * 100);
  };

  return (
    <Fragment>
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Stats</th>
          </tr>
        </thead>
        <tbody>
          <Stat text="Good" content={data.good} />
          <Stat text="Neutral" content={data.neutral} />
          <Stat text="Bad" content={data.bad} />
          <Stat text="All" content={allHelper()} />
          {isNaN(avgHelper()) ? (
            <tr>
              <th>Average</th>
              <td>Input sth first...</td>
            </tr>
          ) : (
            <Stat text="Average" content={avgHelper()} />
          )}
          {isNaN(posHelper()) ? (
            <tr>
              <th>Positive</th>
              <td>Input sth first...</td>
            </tr>
          ) : (
            <Stat text="Positive" content={posHelper()} />
          )}
        </tbody>
      </table>
    </Fragment>
  );
};

const Btn = ({ text, btnClickHandler }) => {
  return (
    <Fragment>
      <button onClick={btnClickHandler}>{text}</button>
    </Fragment>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGood = () => {
    setGood(good + 1);
  };

  const addNeutral = () => {
    setNeutral(neutral + 1);
  };

  const addBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h2>Give Feedback</h2>
      <Btn text="Good" btnClickHandler={addGood} />
      <Btn text="Neutral" btnClickHandler={addNeutral} />
      <Btn text="Bad" btnClickHandler={addBad} />
      <h3>Statistics</h3>
      <Stats data={{ good, neutral, bad }} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
