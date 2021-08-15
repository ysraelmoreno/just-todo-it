import styled from "styled-components";

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

export const Content = styled.div``;

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

  input {
    background-color: transparent;
    border: 1px solid #bababa;
    padding: 10px 15px;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  select {
    padding: 4px 10px;
    margin-bottom: 10px;
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid #bababa;
  }

  button {
    background-color: #1b78cd;
    border: none;

    height: 40px;
    color: white;
    border-radius: 5px;
    margin-top: 10px;

    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;

    transition: all 0.2s ease;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TodoContent = styled.div`
  width: 100%;

  margin-top: 40px;
`;

export const TodoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #f1f1f1;

  & + div {
    margin-top: 30px;
  }

  label {
    display: flex;
    align-items: center;
    color: #333333;
    transition: all 0.2s ease;

    span {
      text-transform: uppercase;
      letter-spacing: 1.5px;
      font-size: 12px;
    }

    h2 {
      font-size: 25px;
    }

    &:hover {
      color: #000000;
    }
    input {
      margin-right: 15px;
    }
  }

  min-height: 100px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
`;

export const Counter = styled.div`
  margin: 10px 0;

  span {
    color: #c1c1c1c1;
  }
`;
