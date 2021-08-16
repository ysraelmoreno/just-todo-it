import { useEffect } from "react";
import { useTransition, animated } from "react-spring";
import shiaImage from "../../assets/shialabeouf.png";

import useShia from "../../hooks/useShia";

import { ShiaContainer } from "./styles";

function ShiaLabeouf() {
  const { showing, removeShia, displayPhrases } = useShia();

  const transitions = useTransition(showing, {
    from: { left: "-120%" },
    enter: { left: "0%" },
    leave: { left: "-120%" },
    delay: 200,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      removeShia();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [showing]);

  return transitions(
    (styles, item) =>
      item && (
        <ShiaContainer style={styles}>
          <img src={shiaImage} alt="Shia Labeouf" />
          <div>
            <h2>{displayPhrases}</h2>
            <h5>JUST DO IT!</h5>
          </div>
        </ShiaContainer>
      )
  );
}

export default ShiaLabeouf;
