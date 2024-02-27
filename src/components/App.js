import React, { useState } from 'react';
import css from './App.module.css';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

const INIT_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [{ good, neutral, bad }, setState] = useState(INIT_STATE);

  const onClickHandle = name => {
    setState(prevState => ({ ...prevState, [name]: prevState[name] + 1 }));
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    const goodFeedbackPerc = Math.round((good * 100) / total);
    return goodFeedbackPerc || 0;
  };

  return (
    <div className={css.main}>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={Object.keys(INIT_STATE)}
          onLeaveFeedback={onClickHandle}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {!countTotalFeedback() ? (
          <Notification message="There is not feedback"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        )}
      </Section>
    </div>
  );
};

export default App;
