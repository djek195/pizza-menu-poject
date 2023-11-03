import Pizza from "./components/Pizza";

const Menu = ({data}) => {
    console.log(data);
    return (
        <main className='menu'>
            <h2>Our menu</h2>
            {data.map(pizza => <Pizza name={pizza.name} ingredients={pizza.ingredients} picture={pizza.photoName}/>)}
        </main>
    )
}

export default Menu;