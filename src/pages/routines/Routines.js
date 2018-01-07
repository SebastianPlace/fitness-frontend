import React, { Component } from 'react'
import MOCK_ROUTINES from '../../data/routines'

class Routines extends Component {
  render() {
    const routineList = MOCK_ROUTINES
      .map((routine, i) => <li key={i}>{routine.name}</li>)
    return (
      <div>
        <h2>Routines</h2>
        <ul>
          {routineList}
        </ul>
      </div>
    );
  }
}

export default Routines
