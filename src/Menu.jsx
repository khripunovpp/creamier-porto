import {IngredientsDialog} from "./IngredientsDialog.jsx";
import {useAtom, useAtomValue} from "jotai";
import {calcMode, cartItems} from "./main.jsx";

const menuItems = [
    {
        name: 'Medovik \n(sugared nuts // sour cream filling)',
        ingredients: 'water, milk, flour T00, flour T50, eggs, cream, sugar, salt, butter 83%, sour cream 20%, flower honey, mix of sugared walnuts and pecans, boiled condensed milk, lemon juice, cottage cheese, baking powder'
    },
    // {
    //     name: 'Rose-Raspberry \nwith vanilla cream & raspberry+rose confit',
    //     ingredients: 'water, milk, flour T00, flour T50, eggs, butter 83%, salt, sugar, cream, white chocolate Callebaut, gelatin, vanilla paste Guzman, raspberry puree, rose confit, pectin NH, lemon juice, glucose syrup, food coloring Fuksia Guzman'
    // },
    {
        name: 'Golden bar \nwith Hazelnut Cream and Salted Caramel',
        ingredients: 'water, milk, flour T00, flour T50, eggs, butter 83%, white chocolate Callebaut, milk chocolate Callebaut, sugar, salt, cream, glucose syrup, hazelnut paste, cocoa butter'
    },
    // {
    //     name: 'Raffaello \nwith Almond-Coconut Cream',
    //     ingredients: 'water, milk, flour T00, flour T50, eggs, butter 83%, white chocolate Callebaut, salt, sugar, coconut milk 70%, cream 35%, almond paste, condensed milk, gelatin 220bloom, blanched almonds, vegetable oil \n'
    // },
    // {
    //     name: 'Medovik BUT \nberry + pistachio version',
    //     ingredients: 'water, milk, flour T00, flour T50, eggs, cream, sugar, salt, butter 83%, sour cream 20%, flower honey, raspberry confit, pistachio paste 40%, lemon juice, baking powder'
    // },
    {
        name: 'Pistachio',
        ingredients: 'water, milk, flour T00, flour T50, eggs, butter 83%, white chocolate Callebaut, salt, sugar, cream, cornstarch, dessert pistachio paste 40%, pistachio paste 100%'
    },
    {
        name: 'Banoffee',
        ingredients: 'water, milk, flour T00, flour T50, eggs, butter 83%, caramel chocolate Cacao Barry, white chocolate Cacao Barry, salt, sugar, cream, boiled condensed milk, mascarpone, glucose syrop, banana, banana paste GUZMAN'
    },
]

const item = ({name, price}) =>
    <div className="menu__item-inner">
                         <span className="menu__item-name">
                        {name}
                    </span>
        {/*<span className="menu__item-price">*/}
        {/*                {price}€*/}
        {/*            </span>*/}
    </div>

const countArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Buttons = ({choised,name}) => {
    const items = useAtomValue(cartItems)
    const activeCount = items[name] ? items[name].count : 0
    return <ul className="countlist">
        {countArr.map((count) => {
            return <li key={count} className={activeCount === count ? 'active' : ''}>
                <button type="button" onClick={() => choised(count)}>
                    {count}
                </button>
            </li>
        })}
    </ul>
}

export const Menu = () => {
    const [showCalc] = useAtom(calcMode)
    const [items, setToCart] = useAtom(cartItems)
    const addToCart = (menuItem, count) => {
        setToCart(storedItems => {
            if (storedItems[menuItem.name]) {
                if (storedItems[menuItem.name].count === count)  {
                    delete storedItems[menuItem.name]
                } else {
                    storedItems[menuItem.name].count = count
                }
            } else {
                storedItems[menuItem.name] = {
                    ...menuItem,
                    count,
                }
            }

            return {...storedItems}
        });
    }

    return <main className="menu">
        <section className="menu__header">
            <div className="menu__sizes">
                <span>Original <b>4€</b></span><span>Mini <b>2€</b></span>
            </div>
        </section>
        <ul className="menu__list">
            {menuItems.map(it => {
                const {name, price, ingredients} = it
                return <li className="menu__item" key={name}>
                    <IngredientsDialog key={name}
                                       title={name}
                                       body={ingredients}
                                       trigger={item({name, price})}/>

                    <div className="menu__item-footer">
                        {showCalc ? <Buttons choised={c => addToCart(it, c)} name={name}/> : null}
                    </div>
                </li>
            })}
        </ul>
    </main>
}