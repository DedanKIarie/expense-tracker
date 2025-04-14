import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(""); 

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleDeleteExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(search.toLowerCase())
  );


  const sortedExpenses = [...filteredExpenses];
  if (sortBy === "description") {
    sortedExpenses.sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === "category") {
    sortedExpenses.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <>
      <h1>Expense Tracker</h1>
      <SearchBar setSearch={setSearch} />
      <ExpenseForm onAddExpense={handleAddExpense} />

      {}
<div className="sort-buttons">
  <button onClick={() => setSortBy("description")}>Sort by Description</button>
  <button onClick={() => setSortBy("category")}>Sort by Category</button>
</div>


      <ExpenseTable expenses={sortedExpenses} onDelete={handleDeleteExpense} />
    </>
  );
}

export default App;
