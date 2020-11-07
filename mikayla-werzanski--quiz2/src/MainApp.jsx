import React from 'react'
import DiceComponent from './DiceComponent'
import SumComponent from './SumComponent'

/* 
When a user presses the "Add" button, it should insert a 0 at the end of the array.  (So new dice are set as "0")

When a user presses the "Remove" button, it should remove the last element of the array.  If the array is empty, be sure 
that there are no errors when the user clicks "Remove".

When the user clicks ANY of the dice, all the values of the array should be randomly set to a number between (inclusive) 1 and 6. 
*/

export default class MainApp extends React.Component {
  constructor() {
    super();
    this.state = {
      sum: 0,
      arr: [],
    }
  }

  add() {
    let newArr = this.state.arr.concat(0)
    this.setState({
        arr: newArr,
    })
  };

  remove() {
    const num = this.state.arr[this.state.arr.length-1]
    this.setState({
        arr: this.state.arr.pop(),
        sum: this.state.sum - num
    })
  };

  randomize() {
    let arrLength = this.state.arr.length
    let newArrr = []
    while (0 < arrLength) {
      let randomNum = Math.floor(Math.random() * 6 + 1)
      newArrr = newArrr.concat(randomNum)
      arrLength --
    }
    this.setState({
      arr: newArrr
    })
    let sum = 0;
    for (let num of this.state.sumArr){
      sum = sum + num
    }
  }

  render() {
    return (
      <div>
        <h1>Dice Roller</h1>
        <button onClick={() => this.add()}>Add</button>
        <button onClick={() => this.remove()}>Remove</button>
        <div onClick={() => this.randomize()}>
          {this.state.arr.map(item => (
              <DiceComponent num={item}></DiceComponent>
          ))}
          <div><br/><SumComponent sumArr={this.state.sum}/></div>
        </div>
      </div>
    );
  }
  
}
