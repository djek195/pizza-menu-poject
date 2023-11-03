
const Pizza = ({name, ingredients, picture}) => {
    return (
        <div>
            <img src={picture} />
            <h3>{name}</h3>
            <p>{ingredients}</p>
        </div>
    )
}

export default Pizza;