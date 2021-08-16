import ShiaProvider from "./context/ShiaContext";
import Home from "./pages/Home";

function App() {
  return (
    <ShiaProvider>
      <Home />
    </ShiaProvider>
  );
}

export default App;
