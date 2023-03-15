import React,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"

const NewExpense = (props) => {
    const [isEditing,setIsEditing] = useState(false);

    const onSaveExpenseData = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
const closeHandler = () =>{
    setIsEditing(true);
};

return(
    <div className="new-expense">

      {!isEditing 
    //  && <button onClick={newAddExpense}>add new Expense</button>
      }
    {
    // isEditing &&
    <ExpenseForm onSaveExpenseData={onSaveExpenseData} onCancel={closeHandler}/>}
    </div>
)

};

export default NewExpense;