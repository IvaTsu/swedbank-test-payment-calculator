import React from 'react';

const INPUT_CONTAINER_FULL_WIDTH = "12rem"; // for names: account, payments, description

export default () => (
    <form >
        <div className="accountContainer">
            <div className="innerAccountContainer">
                <div>
                    <label htmlFor="name">Account</label>
                    <select name="account" style={{ width: INPUT_CONTAINER_FULL_WIDTH }}>
                        <option value="Account name 1">Account name 1</option>
                        <option value="Account name 2">Account name 2</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="payments">Saved payments</label>
                    <select name="payments" style={{ width: INPUT_CONTAINER_FULL_WIDTH }}>
                        <option disabled defaultValue="Select a saved payment">Select a saved payment</option>
                        <option value="Payment option 1">Payment option 1</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <input name="amount" type="number" min="1" className="inputContainerWidthPart" />
                    <select name="currency" style={{ width: "3.5rem" }}>
                        <option value="EUR">EUR</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" style={{ width: INPUT_CONTAINER_FULL_WIDTH }} />
                </div>
            </div>
        </div>
        <div className="btnContainer">
            <button>Save</button>
            <button>Pay</button>
        </div>
    </form>
);