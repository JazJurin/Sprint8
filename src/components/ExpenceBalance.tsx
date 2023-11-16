import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBalance } from "../store/Slices/ExpenceBalanceSlice";

const ExpenceBalance = () => {
  const dispatch = useDispatch();
  const expenceBalance = useSelector(
    (state) => state.ExpencesBalance?.ExpenceBalance
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/expenses/1");
        const data = await response.json();
        console.log("Fetched data:", data);

        const balanceValue = calculateBalance(data);
        console.log("Calculated balance:", balanceValue);

        dispatch(addBalance(balanceValue));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  const calculateBalance = (expenceData) => {
    if (expenceData && expenceData.week) {
      const expenceWeek = expenceData.week;

      const totalExpences = Object.values(expenceWeek).reduce(
        (total, expence) => total + expence,
        0
      );
      const averageBalance = totalExpences / Object.keys(expenceWeek).length;

      return averageBalance.toFixed(2);
    }

    return 0;
  };

  return (
    <>
      <div className="card w-96 bg-primary text-primary-content">
        <div className="card-body">
          <h3 className="card-title">Expence Balance: </h3>
          <div>{expenceBalance}</div>
          <div className="flex card-actions justify-end">
            <button className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12.707 17.293L8.414 13H18v-2H8.414l4.293-4.293l-1.414-1.414L4.586 12l6.707 6.707z"
                />
              </svg>
            </button>
            <button className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z"
                />
              </svg>
            </button>
          </div>          
        </div>
      </div>
      
    </>
  );
};

export default ExpenceBalance;
