import React, { useState } from 'react';

function CardForm() {
    const [cards, setCards] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const description = event.target.elements.description.value;
        const imageUrl = event.target.elements.imageUrl.value;
        const newCard = { id: Date.now(), name, description, imageUrl };
        setCards([...cards, newCard]);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Description:
                    <input type="text" name="description" />
                </label>
                <br />
                <label>
                    Image URL:
                    <input type="text" name="imageUrl" />
                </label>
                <br />
                <button type="submit">Add Card</button>
            </form>
            <div>
                {cards.map((card) => (
                    <Card key={card.id} name={card.name} description={card.description} imageUrl={card.imageUrl} />
                ))}
            </div>
        </div>
    );
}

function Card({ name, description, imageUrl }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <img src={imageUrl} alt={name} />
        </div>
    );
}

export default CardForm;
