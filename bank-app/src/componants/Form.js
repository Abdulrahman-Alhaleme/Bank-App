import { useState } from "react";
import Cards from "./cards";
import CardForm from "./Test";


export default function Form() {
    const [userID, setUserId] = useState(1);
    const [username, setUserName] = useState("");
    const [userAccountNumper, setUserAccountNumper] = useState("");
    const [useraccountType, setUserAccountType] = useState("")

    const handleChangeId = (event) => {
        const Id = event.target.value;
        setUserId(Id)
    }

    const handleChangeUserAccountType = (event) => {
        const accountType = event.target.value;
        setUserAccountType(accountType)
    }

    const handleChangeAge = (event) => {
        const acountNumper = event.target.value;
        setUserAccountNumper(acountNumper)
    }
    const handleChangeName = (event) => {
        const name = event.target.value;
        setUserName(name)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <>
            <section className="formm" >
                <form onSubmit={handleSubmit}>
                    <label>Enter your Name:
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={handleChangeName}
                        />
                    </label>
                    <label>Enter your Account Numper:
                        <input
                            type="number"
                            name="acountNumper"
                            value={userAccountNumper}
                            onChange={handleChangeAge}
                        />
                    </label>
                    <label>Enter your Account Numper:
                        <input
                            type="number"
                            name="useraccountType"
                            value={useraccountType}
                            onChange={handleChangeUserAccountType}
                        />
                    </label>
                    <label className="IDD">
                        <input
                            type="number"
                            name="userID"
                            value={userID}
                            onChange={handleChangeId}
                        />
                    </label>
                    <button type="submit" onClick={() => setUserId(userID + 1)}>submit</button>

                </form>
            </section >

            {/* <section className="container">
                <div className="card">
                    <ul>
                        <li>{userID}</li>
                        <li>{username}</li>
                        <li>{userAccountNumper}</li>
                        <li>{useraccountType}</li>

                    </ul>

                </div>

            </section>
            <section className="container">
                <Cards id={userID} name={username} userAccountNumber={userAccountNumper} userAccountType={useraccountType} />
            </section> */}
            <section className="container">
                <CardForm />
            </section>
        </>

    )
}