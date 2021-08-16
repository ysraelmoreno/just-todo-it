import styled from "styled-components";

export const ButtonContainer = styled.button`
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
`;
