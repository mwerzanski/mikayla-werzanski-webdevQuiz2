import React from 'react'

/* 
The last component is the Sum component.  It should accept an array of numbers and display the sum of all those numbers in a h3 tag.  
If the list of numbers is empty, it should show 0.
*/

export default class DiceComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      sumArr: props.sum,
      sum: 0
    }
  }

  findSum(num) {
    this.setState= {
      sum: 2
    } 
  }

  render() {
    this.findSum(this.props.sum)
    return (
      <div><h3>
        Sum: {this.state.sum}
      </h3>
      </div>
    );
  }
}


