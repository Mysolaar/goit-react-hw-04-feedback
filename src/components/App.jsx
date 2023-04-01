import React, { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import css from "./App.module.css";

const App = () => {
    const [state, setState] = useState({
        good: 0,
        neutral: 0,
        bad: 0,
    });

const onLeaveFeedback = (event) => {
    const stateName = event.target.name;
    setState((prevState) => ({
            ...prevState,
            [stateName]: prevState[stateName] + 1,
        }));
    };

const countTotalFeedback = () => {
    return state.good + state.neutral + state.bad;
    };

const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
        return (state.good / totalFeedback) * 100;
};
    
const { good, neutral, bad } = state;
const options = Object.keys(state);
const total = countTotalFeedback();
const positivePercentage = countPositiveFeedbackPercentage();
    
return (
            <div className={css.container}>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={options}
                        onLeaveFeedback={onLeaveFeedback}
                    />
                </Section>
                <Section title="Statistics">
                    {total !== 0 ? (
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
                </Section>
            </div>
        );
    };

export default App;