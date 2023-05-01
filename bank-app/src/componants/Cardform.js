import React, { useState } from 'react';

function CardForm() {
    const [cards, setCards] = useState([]);
    const [id, setId] = useState(1);

    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const accountNumper = event.target.elements.accountNumper.value;
        const accountType = event.target.elements.accountType.value;
        const newCard = { id: id, name, accountNumper, accountType };
        setCards([...cards, newCard]);
        setId(id + 1);
    }

    function handleDelete(id) {
        const updatedCards = cards.filter((card) => card.id !== id);
        setCards(updatedCards);
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>

                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Enter your Account Numper:
                    <input type="number" name="accountNumper" />
                </label>
                <br />
                <label>
                    Enter your Account Type:
                    <input type="text" name="accountType" />
                </label>
                <br />
                <button type="submit" >Add Card</button>
            </form>
            <div>
                {cards.map((card) => (
                    <Card key={card.id} card={card} handleDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
}
function Card({ card, handleDelete }) {
    const { id, name, accountNumper, accountType } = card;
    function handleClick() {
        handleDelete(id);
    }
    return (
        <div>
            <h2>{`Card ${id}`}</h2>
            <h2>{name}</h2>
            <p>{accountNumper}</p>
            <p>{accountType}</p>
            <button onClick={handleClick}>Delete</button>
        </div>
    );
}

export default CardForm;
