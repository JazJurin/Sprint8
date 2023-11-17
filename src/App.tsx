import "./App.css";
import DailyExpenses from "./components/DailyExpenses";
import ExpenseBalance from "./components/ExpenseBalance";
import GraphData from "./components/GraphData";
import Variation from "./components/Variation";

function App() {
  return (
    <>
      <ExpenseBalance />
      <GraphData />
      <DailyExpenses />
      <Variation />
    </>
  );
}

export default App;
