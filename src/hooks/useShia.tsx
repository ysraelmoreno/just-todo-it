import { useContext } from "react";
import { ShiaContext } from "../context/ShiaContext";

function useShia() {
  const context = useContext(ShiaContext);

  return context;
}

export default useShia;
