import React, {Component} from 'react';

class Feedback extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render(){
    return (
      <div>
        <h3>Please leave feedback</h3>
        <ul>
          <li>
            <button type="button">
            Good
            </button>
          </li>
          <li>
            <button type="button">
              Neutral
            </button>
          </li>
          <li>
            <button type="button">
              Bad
            </button>
            </li>
        </ul>
        {/* {Children} */}
      </div>
    )
  }
}

export default Feedback;
