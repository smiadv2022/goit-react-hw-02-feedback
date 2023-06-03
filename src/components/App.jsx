import React from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Container } from './App.styled';
import { Statistics } from './Statistic/Statistic';
import { Notification } from './Notification/Notification';

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
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  render() {
    const total = this.countTotalFeedback();
    const percentage = ((this.state.good / total) * 100).toFixed(0);
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
            {total > 0 ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={total}
                positivePercentage={percentage}
              />
            ) : (
              <Notification message="There is no feedback given" />
            )}
          </Section>
        </Container>
      </>
    );
  }
}
