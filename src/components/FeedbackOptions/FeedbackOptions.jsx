import { Button, Buttons } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ typeFeedback, inputFeedback }) => {
  const typeButton = Object.keys(typeFeedback);
  return (
    <>
      <Buttons>
        {typeButton.map(el => (
          <Button key={el} textBtn={el} onClick={() => inputFeedback(el)}>
            {el}
          </Button>
        ))}
      </Buttons>
    </>
  );
};
