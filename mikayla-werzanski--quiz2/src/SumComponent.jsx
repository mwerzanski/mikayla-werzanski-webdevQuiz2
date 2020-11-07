import React from 'react'

/* 
The last component is the Sum component.  It should accept an array of numbers and display the sum of all those numbers in a h3 tag.  
If the list of numbers is empty, it should show 0.
*/

export default class SumComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      sumArr: props.sum
    }
  }

  render() {
    return (
      <div>
        <h3>
          Sum: {this.props.sumArr}
        </h3>
      </div>
    );
  }
}
