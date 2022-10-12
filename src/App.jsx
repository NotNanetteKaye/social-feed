import React, { useState } from "react";
import EntriesMapper from "./components/EntriesMapper/EntriesMapper";
import AddEntryForm from "./components/AddEntry/AddEntryForm";
import CustomButton from "./components/CustomButton/CustomButton";
import './App.css';

function App() {
  const [entries, setEntries] = useState([
    {
      name: "David Lagrange",
      post: "I love playing guitar. Does anyone want to play with me?",
    },
    {
      name: "Nanette",
      post: "I love playing guitar. Does anyone want to play with me?",
    },
    {
      name: "Lnagrange",
      post: "I love playing guitar. Does anyone want to play with me?",
    },
  ]);

  function addNewEntry(entry) {
    let tempEntries = [entry, ...entries];
    setEntries(tempEntries);
  }

  return (
    <div className="container-fluid">
      <h3 style={{margin: '1em'}}>Social<small className="text-muted">Feed</small></h3>
      <div className="row" style={{background: 'grey'}}>
        <div className= 'col-md-2'></div>
        <div className= 'col-md-7'>
          <div className="border-box"><AddEntryForm addNewEntryProperty={addNewEntry} /></div>
          <div className="border-box">
            <EntriesMapper userEntries={entries} />
            <CustomButton message="Like!"/>
            <CustomButton message="Dislike!"/>
          </div>
        </div>
        <div className= 'col-md-2' ></div>
      </div>
    </div>
  );
}

export default App;
