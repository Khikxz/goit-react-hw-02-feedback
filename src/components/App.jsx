import React, {Component} from 'react'
import {Feedback} from './Feedback/Feedback.jsx'
import {Statistics} from './Statistics/Statistics.jsx'
import {Notification} from './Notification/Notification.jsx'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback (){
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage(){
    const { good } = this.state;
    const total = this.countTotalFeedback();

    return total > 0 ? Math.round((good / total) * 100) : 0;
  }

  handleClick = type => {
    this.setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };
  
  render(){
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = ['good', 'neutral', 'bad'];

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <h1>React Homework 02: Feedback</h1>
        <Feedback             
          options={options}
          onLeaveFeedback={this.handleClick}
        />
        {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
      </div>
    );
  }
};
