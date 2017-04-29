import React, { Component } from 'react';
import './App.css';

let Note = ({note}) => (
  <span className="note" key={note}>
    {note}
  </span>
);

let Notes = ({interval, progression}) => (
    <div>
      {progression[interval].map((note) => {
        return (
            <Note 
                key={note} 
                note={note} 
                progression={progression} />
        );
      })}
    </div>
);

let Chord = ({interval, progression}) => (
  <div className="chord" key={interval}>
    <div>{interval}</div>
    <Notes 
        interval={interval} 
        progression={progression} />
  </div>
);

export default class Chords extends Component {
    render() {
        return (
            <div>
                {Object.keys(this.props.progression).map((interval) => {
                  return (
                    <Chord 
                        key={interval}
                        interval={interval} 
                        progression={this.props.progression} />
                  );
                })}
            </div>
        );
    }
}