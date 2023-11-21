import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDailyExpenses,
  setYesterdayExpenses,
} from "../store/Slices/DailyExpensesSlice";
import { useTranslation } from "react-i18next";
import { RootState } from "../store/store"; 

export default function DailyExpenses() {
  const dispatch = useDispatch();
  const dailyExpenses = useSelector((state: RootState) => state.DailyExpenses.DailyExpenses);
  const yesterdayExpenses = useSelector((state: RootState) => state.DailyExpenses.YesterdayExpenses);
  const { t } = useTranslation(["welcome"]);

  useEffect(() => {
    const fetchExpensesData = async () => {
      try {
        const today = new Date();
        const dayIndex = today.getDay(); 

        const dailyResponse = await fetch("http://localhost:3000/expenses/1");
        const responseData = await dailyResponse.json();

        if (responseData && responseData.week) {
          const todayName = Object.keys(responseData.week)[dayIndex];
          const dailyTotal = responseData.week[todayName];

          dispatch(setDailyExpenses(dailyTotal));
        } else {
          console.error("Invalid expenses data format or no data for today:", responseData);
        }

        const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        const yesterdayIndex = (dayIndex - 1 + daysOfWeek.length) % daysOfWeek.length;
        const yesterdayName = daysOfWeek[yesterdayIndex];

        if (yesterdayName in responseData.week) {
          dispatch(setYesterdayExpenses(responseData.week[yesterdayName]));
        } else {
          console.error("Error in yesterday's expenses or no data for yesterday:", responseData);
        }
      } catch (error) {
        console.error("Error fetching expenses data:", error);
      }
    };

    fetchExpensesData();
  }, [dispatch]);

  const formattedDailyExpenses = dailyExpenses.toLocaleString(); 

  const variationPercentage = ((dailyExpenses - yesterdayExpenses) / (yesterdayExpenses || 1)) * 100;

  return (
    <>
      <h3>{t("title3")} {new Date().toLocaleDateString('en-US', { weekday: 'long' })}</h3>
      <p>{formattedDailyExpenses}</p>
      <h3>{t("title4")}</h3>
      <p>{variationPercentage.toFixed(2)}%</p>
    </>
  );
}









