import React from 'react'

/* 
When a user presses the "Add" button, it should insert a 0 at the end of the array.  (So new dice are set as "0")

When a user presses the "Remove" button, it should remove the last element of the array.  If the array is empty, be sure 
that there are no errors when the user clicks "Remove".

When the user clicks ANY of the dice, all the values of the array should be randomly set to a number between (inclusive) 1 and 6. 
*/

export default class DiceComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: props.num
    }
  }

  render() {
    return (
      <div style={{ 
        display: "inline-block",
        padding: "25px",
        border: "grey 2px solid",
        textAlign: "center"}}>{this.props.num}
      </div>
    );
  }
  
}
