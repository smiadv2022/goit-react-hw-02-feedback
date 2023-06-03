import styled from '@emotion/styled';
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-color: rgb(225, 210, 225);
  padding: 5px;
  // height: 150px;
  border-radius: 10px;
`;

export const List = styled.ul`
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 600;
`;
export const Item = styled.li`
  display: flex;
  gap: 5px;
  align-items: center;
  // width: 100px;
  padding: 5px;
  font-size: 400;

  line-height: 1rem;
  background-color: transporante;
  border: 1px solid lightgray;
  border-radius: 10px;
`;
export const Title = styled.h2`
  margin: 3rem 5px 1rem 5px;
  color: #111827;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  letter-spacing: -0.025em;
`;
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
