function ExpenseList({ expenses, onDelete }) {
    if (expenses.length === 0) return null;
    return (
        <table className="" border="1">
            <thead>
                <tr>
                    <th>Descriptions</th>
                    <th>Amount</th>
                    <th>Categories</th>
                    <th></th>
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
                    <td>${expenses.reduce((acc, expense) => parseInt(expense.amount) + acc, 0)}</td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    );
}

export default ExpenseList;
