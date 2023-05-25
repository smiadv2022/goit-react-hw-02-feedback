import styled from '@emotion/styled';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(166, 151, 166);
  padding: 20px;
  marging: 0px;
  border-radius: 10px;
`;

export const Button = styled.button`
  display: flex;
  padding: 0.375rem 0.75rem;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  justify-content: center;
  width: 100px;
  marging: 5px;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  :hover {
    background-color: #6366f1;
  }
`;
export const Title = styled.h2`
  margin: 0px;
  color: #111827;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  letter-spacing: -0.025em;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-color: rgb(225, 210, 225);
  padding: 10px;

  border-radius: 20px;
`;
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  // flex-direction: column;
  gap: 10px;
  background-color: rgb(208, 174, 208);
  padding: 10px;
  border-radius: 20px;
`;

export const Statistic = styled.ul`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1.5rem;
`;
export const StatisticItem = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
  width: 80px;
  padding: 5px;
  font-size: 1rem;
  line-height: 1.2rem;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
`;
