import styled, { css } from "styled-components";

interface TodoItemProps {
  isChecked: boolean;
}

export const AppWrapper = styled.main`
  max-width: 1124px;
  width: 100%;
  margin: 0 auto;
`;

export const LogoContainer = styled.section`
  display: flex;
  align-items: center;
  h1 {
    color: #333333;
    font-size: 30px;
  }

  span {
    opacity: 0.5;
  }

  img {
    margin-right: 20px;
    width: 150px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding-top: 50px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;

  margin: 0 auto;
  margin-top: 30px;

  label {
    width: 100%;
    color: #bababa;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  button {
  }
`;

export const TodoContent = styled.div`
  width: 100%;

  margin-top: 40px;

  .phrases {
    width: 100%;
    text-align: center;
    margin-top: 50px;
  }

  .credits {
    text-align: center;
  }
`;

export const TodoItemCheck = styled.div<TodoItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-right: 30px;

  span {
    margin-top: 5px;
    font-size: 9px;
    color: red;
    text-transform: uppercase;
    ${(props) =>
      props.isChecked &&
      css`
        color: green;
      `}
  }
`;

export const TodoInputItem = styled.div<TodoItemProps>`
  display: flex;
  align-items: center;

  p {
    ${(props) =>
      props.isChecked &&
      css`
        text-decoration: line-through;
      `}
  }
  &:hover {
    color: #000000;
  }

  h6 {
    text-transform: uppercase;
    letter-spacing: 1.5px;
    opacity: 0.6;
    font-weight: normal;
    font-size: 12px;
    ${(props) =>
      props.isChecked &&
      css`
        text-decoration: line-through;
      `};
  }
`;

export const TodoItem = styled.div`
  width: 1fr;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #bababa;

  & + div {
    margin-top: 30px;
  }

  form {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      color: #333333;
      transition: all 0.2s ease;
    }
  }
`;

export const Counter = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;

  span {
    color: #c1c1c1c1;
  }
`;

export const TodoDate = styled.div`
  display: flex;
  align-items: center;
  width: 25%;

  button {
    height: fit-content;
    background-color: transparent;
    color: #333333;
  }

  span {
    margin-right: 20px;
    color: #333333;
    opacity: 0.5;
  }
`;
