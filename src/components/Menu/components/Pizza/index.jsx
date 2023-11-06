const Pizza = ({name, ingredients, picture, price, soldOut}) => {
    return (
        <li className={`pizza ${soldOut && 'sold-out' }`}>
            <img src={picture} alt={name}/>
            <div>
            <h3>{name}</h3>
            <p>{ingredients}</p>
            <span>{!soldOut ? price : 'SOLD OUT'}</span>
            </div>
        </li>
    )
}

export default Pizza;