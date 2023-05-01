import React from "react";
import { useState } from "react";

const Formm = () => {
    const [customerName, setCustomerName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [accountType, setAccountType] = useState("");
    const [count, setCount] = useState(0);
    const [array, setArray] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        let cards = {
            count: count,
            customerName: customerName,
            accountNumber: accountNumber,
            accountType: accountType,
        };

        setArray([...array, cards]);
        setCount(count + 1);

        console.log(array);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>SignUP</legend>

                    <div className="divP">
                        <div className="LabelInput">
                            <label>Customer Name</label>
                            <input
                                type="text"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="divP">
                        <div className="LabelInput">
                            <label>Account Number:</label>
                            <input
                                type="text"
                                value={accountNumber}
                                onChange={(e) => setAccountNumber(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="divP">
                        <div className="LabelInput">
                            <label>Account Type</label>
                            <input
                                type="text"
                                value={accountType}
                                onChange={(e) => setAccountType(e.target.value)}
                            />
                        </div>
                    </div>

                    <input type="submit" />
                </fieldset>
            </form>
            <div className="cardsContainer">
                {array.map((account) => {
                    return (
                        <div className="card">
                            <p>{count}</p>
                            <p>{account.customerName}</p>
                            <p>{account.accountNumber}</p>
                            <p>{account.accountType}</p>
                            <button id={count}>
                                delete
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Formm;