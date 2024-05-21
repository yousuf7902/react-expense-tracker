function ExpenseFilter({ expenses, onSelectCategory }) {
    return (
        <select className="form-select" onChange={(event) => onSelectCategory(event.target.value)}>
            <option value="">All Categories</option>
            {expenses.map((expense) => (
                <option value={expense.category} key={expense.id}>
                    {expense.category}
                </option>
            ))}
        </select>
    );
}

export default ExpenseFilter;
