import "./ExpenseForm.css";

function ExpenseList({ expenses, onDelete }) {
    if (expenses.length === 0) return null;
    return (
        <div className="table_container">
            <table className="expense_table">
                <thead>
                    <tr>
                        <th>Descriptions</th>
                        <th>Amount</th>
                        <th>Categories</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((expense) => (
                        <tr key={expense.id}>
                            <td>{expense.description}</td>
                            <td>{expense.amount}</td>
                            <td>{expense.category}</td>
                            <td>
                                <button onClick={() => onDelete(expense.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td>
                            ${expenses.reduce((acc, expense) => parseInt(expense.amount) + acc, 0)}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default ExpenseList;
