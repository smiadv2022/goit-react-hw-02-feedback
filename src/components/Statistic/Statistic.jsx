import React from 'react';

import { StatisticList, StatisticItem } from './Statistic.styled';
import { Notification } from '../Notification/Notification';
export function Statistics({ good, neutral, bad }) {
  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage =
    countTotalFeedback > 0 ? ((good / countTotalFeedback) * 100).toFixed(0) : 0;
  console.log(countTotalFeedback);
  return (
    <>
      {countTotalFeedback > 0 ? (
        <StatisticList>
          <StatisticItem key={good}>Good:{good} </StatisticItem>
          <StatisticItem>Neutral: {neutral}</StatisticItem>
          <StatisticItem>Bad: {bad}</StatisticItem>

          <StatisticItem>Total: {countTotalFeedback}</StatisticItem>
          <StatisticItem>
            Positive feedback: {countPositiveFeedbackPercentage}%
          </StatisticItem>
        </StatisticList>
      ) : (
        <Notification message="There is no feedback given" />
      )}
    </>
  );
}
