import { useState } from "react";
import { createContext } from "react";
import ShiaLabeouf from "../components/ShiaLabeouf";
import { useCallback } from "react";
import phrases from "../data/phrases";

interface IShiaContext {
  showing: boolean;
  addShia: () => void;
  removeShia: () => void;
  displayPhrases: string;
}

export const ShiaContext = createContext<IShiaContext>({} as IShiaContext);

function ShiaProvider({ children }: { children: React.ReactNode }) {
  const [showing, setShowing] = useState<boolean>(false);
  const [displayPhrases, setDisplayPhrases] = useState<string>(
    "Don't let your dreams be dreams"
  );

  const addShia = useCallback(() => {
    setShowing(true);
    setDisplayPhrases(phrases[Math.floor(Math.random() * (5 - 0) + 0)]);
  }, []);

  const removeShia = useCallback(() => {
    setShowing(false);
  }, []);

  return (
    <ShiaContext.Provider
      value={{ showing, addShia, removeShia, displayPhrases }}
    >
      {children}
      <ShiaLabeouf />
    </ShiaContext.Provider>
  );
}

export default ShiaProvider;
