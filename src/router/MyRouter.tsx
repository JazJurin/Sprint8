import { Route, Routes } from "react-router-dom";
import ExpenseBalance from "../components/ExpenseBalance";
import DailyExpenses from "../components/DailyExpenses";
import GraphData from "../components/GraphData";
import Percentage from "../components/Variation";

export default function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<ExpenseBalance />} />
      <Route path="/DailyExpenses" element={<DailyExpenses />} />
      <Route path="/GraphData" element={<GraphData />} />
      <Route path="/Percentage" element={<Percentage />} />
    </Routes>
  );
}
