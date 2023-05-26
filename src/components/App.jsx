import React from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Container } from './App.styled';
import { Statistics } from './Statistic/Statistic';
// import { Notification } from './Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  inputFeedback = typeFeedback => {
    this.setState(prevState => ({
      [typeFeedback]: (prevState[typeFeedback] += 1),
    }));
    console.log(this.state);
    this.countTotalFeedback();
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();

    return totalFeedback > 0 ? ((good / totalFeedback) * 100).toFixed(0) : 0;
  };
  render() {
    return (
      <>
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions
              typeFeedback={this.state}
              inputFeedback={this.inputFeedback}
            />
          </Section>
          <Section title="Statistic">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              // total={this.countTotalFeedback}
              // positivePercentage={this.countPositiveFeedbackPercentage}
            />
          </Section>
        </Container>
      </>
    );
  }
}
