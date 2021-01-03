import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const MostVotedAnec = ({ data }) => {
  return (
    <Fragment>
      <p>Anecdote with the most votes is:</p>
      <p>{data.anec}</p>
      <p>With {data.votes} votes</p>
    </Fragment>
  );
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [anecVoteClt, setAnecVoteClt] = useState(new Array(anecdotes.length).fill(0));

  const randomAnec = () => {
    const rand = Math.floor(Math.random() * Math.floor(anecdotes.length));
    setSelected(rand);
  };

  const increaseVote = () => {
    const tmpClt = [...anecVoteClt];
    tmpClt[selected] += 2;
    setAnecVoteClt(tmpClt);
  };

  // all votes 0 -> false -> show nothing
  // some votes not 0 -> true -> show sth
  const isClicked = !anecVoteClt.every((curEle) => curEle === 0);

  // very retard code -> ngmi
  const findMostVoted = () => {
    const tmpClt = [...anecVoteClt];
    let tmpBiggest = tmpClt[0];
    for (let i = 0; i < tmpClt.length; i++) {
      if (tmpClt[i] > tmpBiggest) {
        tmpBiggest = tmpClt[i];
      }
    }
    const resPosition = anecVoteClt.findIndex((curEle) => curEle === tmpBiggest);
    return { anec: anecdotes[resPosition], votes: anecVoteClt[resPosition] };
  };

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>This anecdote has {anecVoteClt[selected]} votes</p>
      <button onClick={increaseVote}>Vote</button>
      <button onClick={randomAnec}>Next anecdote</button>
      {isClicked && <MostVotedAnec data={findMostVoted()} />}
    </div>
  );
};

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
