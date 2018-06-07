import React from 'react';

const INPUT_CONTAINER_FULL_WIDTH = "20rem"; // for names: account, payments, description
const INPUT_CONTAINER_HEIGHT = "2rem";

export default () => (
    <form>
        <div className="accountContainer">
            <div className="innerAccountContainer">
                <div>
                    <label htmlFor="account">Account</label>
                    <select name="account" style={{ width: INPUT_CONTAINER_FULL_WIDTH, height: INPUT_CONTAINER_HEIGHT }}>
                        <option value="Account name 1">Account name 1</option>
                        <option value="Account name 2">Account name 2</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="payments">Saved payments</label>
                    <select name="payments" style={{ width: INPUT_CONTAINER_FULL_WIDTH, height: INPUT_CONTAINER_HEIGHT }}>
                        <option disabled defaultValue="Select a saved payment">Select a saved payment</option>
                        <option value="Payment option 1">Payment option 1</option>
                    </select>
                </div>
                <div className="amountContainer">
                    <label htmlFor="amount">Amount</label>
                    <input name="amount" type="number" min="1" className="inputContainerWidthPart" style={{ height: INPUT_CONTAINER_HEIGHT }} />
                    <select name="currency" style={{ width: "4.5rem", height: INPUT_CONTAINER_HEIGHT }}>
                        <option value="EUR">EUR</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" style={{ width: INPUT_CONTAINER_FULL_WIDTH, height: INPUT_CONTAINER_HEIGHT }} />
                </div>
            </div>
        </div>
        <div className="btnContainer">
            <button>Save</button>
            <button>Pay</button>
        </div>
    </form>
);