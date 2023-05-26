import styled from '@emotion/styled';
export const Button = styled.button`
  display: flex;
  padding: 0.375rem 0.75rem;

  background-color: rgba(30, 26, 30, 0.5);

  color: black;
  font-size: 600;
  line-height: 1.25rem;
  font-weight: 600;
  justify-content: center;
  width: 100px;
  marging: 5px;
  border-radius: 0.375rem;

  :hover {
    background-color: rgba(231, 120, 131, 0.15);

    color: black;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.28) 0px 0px 0px 1px;
  }
`;
export const Buttons = styled.div`
  display: flex;
  align-items: center;
  // flex-direction: column;
  gap: 10px;
  background-color: rgb(208, 174, 208, 0.05);
  padding: 10px;
  border-radius: 20px;
`;
