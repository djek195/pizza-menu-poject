// Componnts
import Pizza from "./components/Pizza";

// Data
import {pizzaData} from "../../data/product";

const Menu = () => {
    const pizzas = pizzaData;
    return (
        <main className='menu'>
            <h2>Our menu</h2>
                {pizzas ? (
                    <>
                        <p>
                            Authentic Italian cuisine. 6 creative dishes to choose from. All from our store oven, all organic, all delicious.
                        </p>

                        <ul className='pizzas'>
                            {pizzas.map(pizza => <Pizza key={pizza.name} name={pizza.name} ingredients={pizza.ingredients} picture={pizza.photoName} price={pizza.price} soldOut={pizza.soldOut}/>)}
                        </ul>
                    </>
                    ) : <p>We're still working on our menu. Please come back later</p>}

        </main>
    )
}

export default Menu;