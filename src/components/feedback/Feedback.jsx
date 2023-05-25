import React from 'react';

import {
  Title,
  Button,
  Wrapper,
  Buttons,
  Statistic,
  StatisticItem,
  Container,
} from '../feedback/Feedback.styled';

export default class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positive: 0,
  };

  countTotalFeedback1 = () => {
    this.setState(prevState => ({
      total: prevState.good + prevState.neutral + prevState.bad,
    }));
  };
  positiveFeedBack = () => {
    this.setState(prevState => ({
      positive: (prevState.good / prevState.total) * 100,
    }));
  };
  handleGood = () => {
    console.log(this);
    this.setState(prevState => ({ good: (prevState.good += 1) }));
    this.countTotalFeedback();
    this.positiveFeedBack();
  };
  handleNeutral = () => {
    console.log('eee', this);
    this.setState(prevState => ({ neutral: (prevState.neutral += 1) }));
    this.countTotalFeedback();
    this.positiveFeedBack();
  };
  handleBad = () => {
    console.log('eee', this);
    this.setState(prevState => ({ bad: (prevState.bad += 1) }));
    this.countTotalFeedback();
    this.positiveFeedBack();
  };
  // countTotalFeedback = () => {
  //   this.setState(prevState => ({ total: (prevState.good += 100) }));
  // };
  render() {
    // const { gg } = this.props;
    return (
      <>
        <Container>
          <Wrapper>
            <Title>Please leave feedback</Title>
            <Buttons>
              <Button onClick={this.handleGood}>Good </Button>
              <Button onClick={this.handleNeutral}>Neutral</Button>
              <Button onClick={this.handleBad}>Bad</Button>
            </Buttons>
          </Wrapper>
          <Statistic>
            Statistic
            <StatisticItem>good: {this.state.good} </StatisticItem>
            <StatisticItem>neutral: {this.state.neutral} </StatisticItem>
            <StatisticItem>bad: {this.state.bad} </StatisticItem>
          </Statistic>
          <Title>Total: {this.state.total}</Title>
          <Title>PositiveFeedBack: {this.state.positive.toFixed(0)}%</Title>
        </Container>
      </>
    );
  }
}
