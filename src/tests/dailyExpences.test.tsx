import { render, waitFor, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import DailyExpenses from "../components/DailyExpenses";

describe("DailyExpenses", () => {
  beforeEach(() => {
  });

  it("renders DailyExpenses component and shows daily expenses", async () => {
    render(
      <Provider store={store}>
        <DailyExpenses />
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Título3/i)).toBeTruthy();
      expect(screen.getByText(/Título4/i)).toBeTruthy();
      expect(screen.getByText(/domingo/i)).toBeTruthy();
      expect(screen.getByText(/100/i)).toBeTruthy();
    });

  });

  it("renders DailyExpenses component and shows variation percentage", async () => {
    render(
      <Provider store={store}>
        <DailyExpenses />
      </Provider>
    );

    await waitFor(() => {
      console.log(document.body.innerHTML);

      const variationText = screen.queryByText(/variación/i);
      const percentageText = screen.queryByText(/50/i);

      expect(variationText).toBeTruthy();
      expect(percentageText).toBeTruthy();
    });

  });
});






