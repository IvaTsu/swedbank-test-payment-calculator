import React from 'react';

const INPUT_CONTAINER_FULL_WIDTH = "20rem"; // for names: account, payments, description
const INPUT_CONTAINER_HEIGHT = "2rem";
const INPUT_LEFT_BOTTOM_MARGIN = "0 0 0.5rem 0.5rem";
const INPUT_LEFT_TOP_MARGIN = "0.5rem 0 0 0.5rem";

export default () => (
    <form>
        <div className="accountContainer">
            <div className="innerAccountContainer">
                <div>
                    <label htmlFor="account" className="label">Account</label>
                    <select
                        name="account"
                        style={{ width: INPUT_CONTAINER_FULL_WIDTH, height: INPUT_CONTAINER_HEIGHT, margin: INPUT_LEFT_BOTTOM_MARGIN }}
                        className="border selectInput"
                    >
                        <option value="Account name 1">Account name 1</option>
                        <option value="Account name 2">Account name 2</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="payments">Saved payments</label>
                    <select
                        name="payments"
                        style={{ width: INPUT_CONTAINER_FULL_WIDTH, height: INPUT_CONTAINER_HEIGHT, margin: INPUT_LEFT_BOTTOM_MARGIN }}
                        className="border selectInput"
                    >
                        <option disabled defaultValue="Select a saved payment">Select a saved payment</option>
                        <option value="Payment option 1">Payment option 1</option>
                    </select>
                </div>
                <div className="amountContainer">
                    <label htmlFor="amount" style={{ marginRight: "0.5rem" }}>Amount</label>
                    <input
                        name="amount"
                        type="number"
                        min="1"
                        className="inputContainerWidthPart border"
                        style={{ height: INPUT_CONTAINER_HEIGHT }}
                    />
                    <select
                        name="currency"
                        style={{ width: "4.5rem", height: INPUT_CONTAINER_HEIGHT }}
                        className="border selectInput"
                    >
                        <option value="EUR">EUR</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        style={{ width: INPUT_CONTAINER_FULL_WIDTH, height: INPUT_CONTAINER_HEIGHT, margin: INPUT_LEFT_TOP_MARGIN }}
                        className="border"
                    />
                </div>
            </div>
        </div>
        <div className="btnContainer">
            <button>Save</button>
            <button>Pay</button>
        </div>
    </form>
);