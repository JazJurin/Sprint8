import "./App.css";
import DailyExpences from "./components/DailyExpences";
import ExpenceBalance from "./components/ExpenceBalance";
import GraphData from "./components/GraphData";
import Variation from "./components/Variation";

function App() {
  return (
    <>
      <ExpenceBalance />
      <GraphData />
      <DailyExpences />
      <Variation />
    </>
  );
}

export default App;
