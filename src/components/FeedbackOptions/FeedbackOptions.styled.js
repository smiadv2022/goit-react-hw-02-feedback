import styled from '@emotion/styled';
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
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  // flex-direction: column;
  gap: 10px;
  background-color: rgb(208, 174, 208);
  padding: 10px;
  border-radius: 20px;
`;
