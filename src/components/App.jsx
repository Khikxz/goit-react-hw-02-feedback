import Feedback from './Feedback/Feedback.jsx'
import Statistics from './Statistics/Statistics.jsx'

export const App = () => {
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
      <Feedback/>
      <Statistics/>
    </div>
  );
};
