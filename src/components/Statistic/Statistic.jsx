import React from 'react';

import { StatisticList, StatisticItem } from './Statistic.styled';
// import { Notification } from '../Notification/Notification';
export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  // const countTotalFeedback = good + neutral + bad;
  // const countPositiveFeedbackPercentage =
  //   countTotalFeedback > 0 ? ((good / countTotalFeedback) * 100).toFixed(0) : 0;
  // console.log(countTotalFeedback);
  return (
    <>
      <StatisticList>
        <StatisticItem key={good}>Good:{good} </StatisticItem>
        <StatisticItem>Neutral: {neutral}</StatisticItem>
        <StatisticItem>Bad: {bad}</StatisticItem>

        <StatisticItem>Total: {total}</StatisticItem>
        <StatisticItem>Positive feedback: {positivePercentage}%</StatisticItem>
      </StatisticList>
    </>
  );
}
