import "./App.css";
import DailyExpenses from "./components/DailyExpenses";
import ExpenseBalance from "./components/ExpenseBalance";
import GraphData from "./components/GraphData";
import Variation from "./components/Variation";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import eeuu from "./images/eeuu.png";
import cat from "./images/cat.png";
import esp from "./images/esp.png"

function Welcome() {
  const { t, i18n } = useTranslation(["welcome"]);
  const changeLangEn = () => {
    i18n.changeLanguage("en");
  };
  const changeLangEs = () => {
    i18n.changeLanguage("es");
  };
  const changeLangCat = () => {
    i18n.changeLanguage("cat");
  };

  return (
    <>
      <h2>{t("title")}</h2>
      <button onClick={changeLangEn} tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img  src={eeuu} />
        </div>
      </button>
      <button onClick={changeLangCat} tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img  src={cat} />
        </div>
      </button>
      <button onClick={changeLangEs} tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img  src={esp} />
        </div>
      </button>
      <ExpenseBalance />
      <GraphData />
      <DailyExpenses />
      <Variation />
    </>
  );
}
function App() {
  return (
    <Suspense fallback="Cargando traducciones">
      <Welcome />
    </Suspense>
  );
}

export default App;
