import { Route, Routes } from "react-router-dom";
import ExpenceBalance from "../components/ExpenceBalance";
import DailyExpences from "../components/DailyExpences"
import GraphData from "../components/GraphData";
import Percentage from "../components/Percentage";

export default function MyRouter() {
  return (
    <Routes>
          <Route path="/" element={<ExpenceBalance />} />
          <Route path="/DailyExpences" element={<DailyExpences />} />
          <Route path="/GraphData" element={<GraphData />} />
          <Route path="/Percentage" element={<Percentage />} />
    </Routes>
  );
}
