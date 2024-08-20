import React, { useEffect, useState } from "react";
import "./cards.css";

const CardRendering = () => {
    const [cards, setCards] = useState([]);

    const fetchData = async () => {
        let results = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await results.json();
        setCards(data);
        console.log(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className="container">
                {cards.map((card) => {
                    return (
                        <div key={card.id} className="card">
                            <h1>{card.title}</h1>
                            <p>{card.body}</p>
                            <span>by: {card.userId}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CardRendering;
