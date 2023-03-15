import React,{useState} from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 64.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 694.67,
    date: new Date(2021, 12, 28),
  },
  {
    id: "e6",
    title: "House Insurance",
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e5",
    title: "Medical Aid",
    amount: 294.67,
    date: new Date(2021, 5, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 6, 12),
  },
  {
    id: "e7",
    title: "New Bed (Wooden)",
    amount: 450,
    date: new Date(2019, 4, 2),
  },
];

const App=()=> {
    const [expenses,setExpenses] =useState(DUMMY_EXPENSES);
  

  const addExpenseHandler = (expense) => {
setExpenses((prevExpenses)=>{
  return[expense, ...prevExpenses];
});
  };
  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
}
export default App;
