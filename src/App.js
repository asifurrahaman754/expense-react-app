import "./App.css";
import Index from "./components/Index";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Index />
    </GlobalProvider>
  );
};

export default App;
