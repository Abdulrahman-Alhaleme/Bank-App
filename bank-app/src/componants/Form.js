import { useState } from "react";
import Cards from "./cards";
import CardForm from "./Cardform";


const Form = () => {
    const [userID, setUserId] = useState(1);
    const [username, setUserName] = useState("");
    const [userAccountNumper, setUserAccountNumper] = useState("");
    const [useraccountType, setUserAccountType] = useState("")
    const [array, setArray] = useState([]);


    const handleSubmit = (event) => {
        event.preventDefault();

    }


    let cards = {
        userID: userID,
        username: username,
        userAccountNumper: userAccountNumper,
        useraccountType: useraccountType,
    };

    setArray([...array, cards])
    setUserId(userID + 1);

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



    return (
        <>
            <section className="formm" >
                <form onSubmit={handleSubmit}>
                    <label>Enter your Name:
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </label>
                    <label>Enter your Account Numper:
                        <input
                            type="number"
                            name="acountNumper"
                            value={userAccountNumper}
                            onChange={(e) => setUserAccountNumper(e.target.value)}
                        />
                    </label>
                    <label>Enter your Account Numper:
                        <input
                            type="number"
                            name="useraccountType"
                            value={useraccountType}
                            onChange={(e) => setUserAccountType(e.target.value)}
                        />
                    </label>
                    <label className="IDD">
                        <input
                            type="number"
                            name="userID"
                            value={userID}
                            onChange={(e) => setUserId(e.target.value)}
                        />
                    </label>
                    <button type="submit" onClick={() => setUserId(userID + 1)}>submit</button>

                </form>
            </section >

            <section className="container">
                {array.map((account) => {
                    return (
                        <div className="card">
                            <ul>
                                <li>{userID}</li>
                                <li>{account.username}</li>
                                <li>{account.userAccountNumper}</li>
                                <li>{account.useraccountType}</li>
                                <button id={userID}>delete</button>

                            </ul>

                        </div>
                    )

                })}
            </section>
            <section className="container">
                <Cards id={userID} name={username} userAccountNumber={userAccountNumper} userAccountType={useraccountType} />
            </section>
            <section className="container">
                <CardForm />
            </section>

        </>

    )
}
export default Form
