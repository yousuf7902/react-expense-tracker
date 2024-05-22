import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

export const categories = ["Groceries", "Utilities", "Entertainment", "Electornics"];

function App() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [expenses, setExpenses] = useState([
        { id: 1, description: "aaa", amount: 10, category: "Utilities" },
        { id: 2, description: "bbb", amount: 20, category: "Groceries" },
        { id: 3, description: "ccc", amount: 30, category: "Entertainment" },
        { id: 4, description: "ddd", amount: 40, category: "Electornics" },
    ]);

    const visibleData = selectedCategory
        ? expenses.filter((e) => e.category === selectedCategory)
        : expenses;

    return (
        <>
            {/* (expense) => setExpenses([...expenses,{...expense, id:expenses.length+1}]) */}
            <ExpenseForm
                onSubmit={(expense) => {
                    setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
                }}
            />
            <ExpenseFilter
                expenses={expenses}
                onSelectCategory={(category) => setSelectedCategory(category)}
            />
            <ExpenseList
                expenses={visibleData}
                onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
            />
        </>
    );
}

export default App;
