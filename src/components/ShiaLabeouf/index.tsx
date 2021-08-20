import { useEffect } from "react";
import { useTransition } from "react-spring";

import useShia from "../../hooks/useShia";

import { ShiaContainer } from "./styles";

function ShiaLabeouf() {
  const { showing, removeShia, displayPhrases, image } = useShia();

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
  }, [showing, removeShia]);

  return transitions(
    (styles, item) =>
      item && (
        <ShiaContainer style={styles}>
          <img src={image} alt="Shia Labeouf" />
          <div>
            <h2>{displayPhrases}</h2>
            <h5>JUST DO IT!</h5>
          </div>
        </ShiaContainer>
      )
  );
}

export default ShiaLabeouf;
