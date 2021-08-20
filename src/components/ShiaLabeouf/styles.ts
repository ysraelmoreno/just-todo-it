import { animated } from "react-spring";
import styled from "styled-components";

export const ShiaContainer = styled(animated.div)`
  display: flex;
  align-items: center;

  position: absolute;
  margin: 0;
  bottom: 0;
  left: -50%;

  width: 30%;

  img {
    width: 30%;
  }

  div {
    h2 {
      font-size: 15px;
    }
    h5 {
      color: #cccccc;
      text-transform: uppercase;
      letter-spacing: 1.5px;
    }
  }
`;
