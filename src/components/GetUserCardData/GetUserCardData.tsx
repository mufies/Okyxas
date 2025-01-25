import cardData from './CardList.tsx';
import './GetUserCardData.css';

function GetUserCardData() {
    const rows = [];
    for (let i = 0; i < cardData.length; i += 5) {
        rows.push(cardData.slice(i, i + 5));
    }

    return (
        <div className="scroll-container">
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} style={{ display: 'flex', marginBottom: '10px' }}>
                    {row.map(card => (
                        <button key={card.id} className={"user-card"} onClick={() =>console.log(card.name)}>
                            <img src={card.imageSrc} alt={card.name} className={"card-img"} />
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default GetUserCardData;