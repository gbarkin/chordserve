import React, { Component } from 'react';
import './App.css';
import Chordserve from './chordserve';
import Chords from './Chords';

class App extends Component {
  constructor() {
    super();
    this.chordserve = new Chordserve();
    this.state = {
        key: '',
        scale: '',
        progression: {}
    }
  }
  componentDidMount() {
    let results = this.chordserve.randomSelect();
    console.log(results);
    this.setState((state, props) => {
        return {
          key: results.key,
          scale: results.scale,
          progression: results.progression
        }
    })
  }
  toTitleCase(str) {
      if(!str) return str
      return str.toLowerCase()
        .split(' ')
        .map(i => i[0].toUpperCase() + i.substring(1))
        .join(' ')
  }
  formatScale(scale) {
    return scale.split('_')
      .map(w => this.toTitleCase(w))
      .join(' ')
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Chordserve</h2>
        </div>
        <div className="App-intro answer">
          <div>
            <span>{this.state.key} <b>{this.formatScale(this.state.scale)}</b></span>
          </div>
          <div className="chord-box">
            <Chords progression={this.state.progression} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
