import cardData from './CardList.tsx';
import './GetUserCardData.css';
import {useEffect, useState} from "react";

interface Card {
    id: number;
    name: string;
    imageSrc: string;
}
function GetUserCardData() {
    const [AnotheruserSelectedCard, AnothersetUserSelected] = useState<Card | null>(null);

    useEffect(() => {
        console.log("Updated selected card: ", AnotheruserSelectedCard);
    }, [AnotheruserSelectedCard]);
    const handleSelectCard = (card: Card) => {
        if (AnotheruserSelectedCard?.id === card.id) {
            AnothersetUserSelected(null);
            console.log("undo selected card: ", AnotheruserSelectedCard);
        } else {
            AnothersetUserSelected(card);
        }
    };

    const GetSelectedCard = () => {
        return AnotheruserSelectedCard;
    }
    const rows = [];
    for (let i = 0; i < cardData.length; i += 4) {
        rows.push(cardData.slice(i, i + 4));
    }

    return (
        <div className="scroll-container">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: "flex", marginBottom: "10px", justifyContent: "center", gap: "20px" }}>
                    {row.map((card) => (
                        <button
                            key={card.id}
                            className={`user-card`}
                            onClick={() => handleSelectCard(card)}
                        >
                            <img src={card.imageSrc} alt={card.name} className="card-img" />
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default GetUserCardData;