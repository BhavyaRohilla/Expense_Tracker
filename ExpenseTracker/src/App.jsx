import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet paper",
      amount: 294.67,
      date: new Date(2023, 2, 27),
    },
    {
      id: "e2",
      title: "car Insurance",
      amount: 944.67,
      date: new Date(2023, 2, 27),
    },
    {
      id: "e3",
      title: "Bike",
      amount: 24.67,
      date: new Date(2022, 2, 27),
    },
    {
      id: "e4",
      title: "Laptop",
      amount: 554.67,
      date: new Date(2023, 2, 27),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
