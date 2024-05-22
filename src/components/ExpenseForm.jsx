import React from "react";
import "./ExpenseForm.css";
import { categories } from "../App";
import { useForm } from "react-hook-form";

function ExpenseForm({ onSubmit }) {
    /* const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted");
    }; */

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    return (
        <div className="form_container">
            <h1 className="heading">Expense Tracker</h1>
            <form
                className="form_handle"
                onSubmit={handleSubmit((data) => {
                    onSubmit(data);
                    reset();
                })}
            >
                <div className="field">
                    <label htmlFor="description">Description</label>
                    <input
                        {...register("description", { required: true })}
                        type="text"
                        id="description"
                    ></input>
                    {errors.description && <p className="erros_field">This field is required...</p>}
                </div>

                <div className="field">
                    <label htmlFor="amount">Amount</label>
                    <input
                        {...register("amount", { required: true })}
                        type="number"
                        id="amount"
                    ></input>
                    {errors.amount && <p className="erros_field">This field is required...</p>}
                </div>

                <div className="field">
                    <label htmlFor="category">Category</label>
                    <select {...register("category")} id="category">
                        <option value=""></option>
                        {categories.map((category) => (
                            <option value={category} key={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="field">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ExpenseForm;
