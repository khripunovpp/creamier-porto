import {useAtom, useAtomValue} from "jotai";
import {calcMode, cartItems} from "./main.jsx";
import {IngredientsDialog} from "./IngredientsDialog.jsx";
import eclairsCaption from "/img/eclairsCaption.png";

const menuEclairs = [
    // {
    //     name: 'Medovik \n(sugared nuts // sour cream filling)',
    //     ingredients: 'water, milk, flour T00, flour T50, eggs, cream, sugar, salt, butter 83%, sour cream 20%, flower honey, mix of sugared walnuts and pecans, boiled condensed milk, lemon juice, cottage cheese, baking powder',
    //     price: 4
    // },
    // {
    //     name: 'Rose-Raspberry \nwith vanilla cream & raspberry+rose confit',
    //     price: 3.5
    //     // ingredients: 'water, milk, flour T00, flour T50, eggs, butter 83%, salt, sugar, cream, white chocolate Callebaut, gelatin, vanilla paste Guzman, raspberry puree, rose confit, pectin NH, lemon juice, glucose syrup, food coloring Fuksia Guzman'
    // },
    // {
    //     name: 'Golden bar \nwith Hazelnut Cream and Salted Caramel',
    //     ingredients: 'water, milk, flour T00, flour T50, eggs, butter 83%, white chocolate Callebaut, milk chocolate Callebaut, sugar, salt, cream, glucose syrup, hazelnut paste, cocoa butter',
    //     price: 4,
    // },
    // {
    //     name: 'Raffaello \nwith Almond-Coconut Cream',
    //     ingredients: 'water, milk, flour T00, flour T50, eggs, butter 83%, white chocolate Callebaut, salt, sugar, coconut milk 70%, cream 35%, almond paste, condensed milk, gelatin 220bloom, blanched almonds, vegetable oil \n',
    //     price: 3
    // },
    {
        name: 'Pistachio',
        // ingredients: 'water, milk, flour T00, flour T50, eggs, butter 83%, white chocolate Callebaut, salt, sugar, cream, cornstarch, dessert pistachio paste 40%, pistachio paste 100%',
        price: 4,
    },
    // {
    //     name: 'Choux tangerine',
    //     price: 3.5,
    // },
    {
        name: 'CHOCO',
        ingredients: '',
        price: 3.5,
    },
    {
        name: 'Macaroon (all flavors)',
        ingredients: '',
        price: 2.5,
    },
    // {
    //     name: 'choux blackberry \n& vanilla',
    //     ingredients: 'water, milk 3.5%, butter 82.5%, sugar, flour, chicken eggs, cream 35%, blueberry puree, pectin NH, gelatin, vanilla, white chocolate 28%',
    //     price: 3.5,
    // },
    // {
    //     name: 'Choux \nLemon+Basil',
    //     price: 3,
    // },
    // {
    //     name: 'Cookies Triple Choc',
    //     price: 2.5,
    // },
    // {
    //     name: 'Medovik BUT \nberry + pistachio version',
    //     ingredients: 'water, milk, flour T00, flour T50, eggs, cream, sugar, salt, butter 83%, sour cream 20%, flower honey, raspberry confit, pistachio paste 40%, lemon juice, baking powder'
    // },
    // {
    //     name: 'Banoffee',
    //     ingredients: 'water, milk, flour T00, flour T50, eggs, butter 83%, caramel chocolate Cacao Barry, white chocolate Cacao Barry, salt, sugar, cream, boiled condensed milk, mascarpone, glucose syrop, banana, banana paste GUZMAN'
    // },
    // {
    //     name: 'Mango + Passsion Fruit',
    //     price: 3.5,
    //     // ingredients: 'water, milk, flour T00, flour T50, eggs, cream, sugar, salt, butter 83%, sour cream 20%, flower honey, mix of sugared walnuts and pecans, boiled condensed milk, lemon juice, cottage cheese, baking powder'
    // },
]

const menuCookies = [
    {
        name: 'peanuts with caramel',
        ingredients: 'butter, cane sugar, muscovado sugar, chicken egg, salt, wheat flour, baking powder, baking soda, salted peanuts, peanut butter, milk chocolate Cacao Barry, glucose syrup, cream 35%, soft pearls Cacao Barry',
        price: 2.5
    },
    {
        name: 'red velvet',
        ingredients: 'butter, white sugar, chicken egg, salt, wheat flour, baking powder, baking soda, vanilla, freeze-dried strawberry, red coloring, corn starch, strawberry puree, lemon puree, pectin NH, fresh strawberry',
        price: 2.9
    },
    {
        name: 'oreo',
        ingredients: 'butter, powdered sugar, chicken egg, salt, wheat flour, baking powder, cream 35%, cocoa, vanilla, white chocolate, cream cheese, Oreo',
        price: 2.9
    },
    {
        name: 'black currant',
        ingredients: 'butter, white sugar, chicken egg, salt, wheat flour, baking powder, blackcurrant puree, white chocolate, vanilla, freeze-dried cherry, raspberry puree, cherry puree, pectin NH, glucose syrup, gelatin',
        price: 2.9
    },
]

const item = ({name, price}) =>
    <div className="menu__item-inner">
                         <span className="menu__item-name">
                        {name}
                    </span>
        <span className="menu__item-price">
                        {price}€
                    </span>
    </div>

const Buttons = ({choised, name, maxItems}) => {
    const count = Array.from({length: maxItems || 10}, (_, i) => i + 1)
    const items = useAtomValue(cartItems)
    const activeCount = items[name] ? items[name].count : 0
    return <ul className="countlist">
        {count.map((count) => {
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
                if (storedItems[menuItem.name].count === count) {
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
        {/*<section className="menu__cookies">*/}
        {/*    <p className="menu__cookies-caption">cookie</p>*/}
        {/*    <ul className="menu__list">*/}
        {/*        {menuCookies.map(it => {*/}
        {/*            const {name, price, ingredients} = it*/}
        {/*            return <li className="menu__item" key={name}>*/}
        {/*                <IngredientsDialog key={name}*/}
        {/*                                   title={name}*/}
        {/*                                   body={ingredients}*/}
        {/*                                   trigger={item({name, price})}/>*/}

        {/*                <div className="menu__item-footer">*/}
        {/*                    {showCalc ? <Buttons choised={c => addToCart(it, c)} name={name}/> : null}*/}
        {/*                </div>*/}
        {/*            </li>*/}
        {/*        })}*/}
        {/*    </ul>*/}
        {/*</section>*/}

        <section className="menu__eclairs">
            {/*<img src={eclairsCaption}*/}
            {/*     alt="Eclairs"*/}
            {/*     className="menu__eclairs-caption"*/}
            {/*     loading="lazy"/>*/}
            <ul className="menu__list">
                {menuEclairs.map(it => {
                    const {name, price, ingredients} = it;
                    return <li className="menu__item" key={name}>
                        {ingredients
                            ? <IngredientsDialog key={name}
                                           title={name}
                                           body={ingredients}
                                           trigger={item({name, price})}/>
                            : item({name, price})
                        }

                        <div className="menu__item-footer">
                            {showCalc ? <Buttons choised={c => addToCart(it, c)} name={name}/> : null}
                        </div>
                    </li>
                })}
            </ul>
        </section>

        <section className="menu__other">
            <ul className="menu__list">
                <li className="menu__item">
                    <div className="menu__item-inner">
                        <span className="menu__item-name">
                            take away
                        </span>
                        <span className="menu__item-price">
                            0.5€
                        </span>
                    </div>
                    <div className="menu__item-footer">
                        {showCalc ? <Buttons maxItems={1} choised={c => addToCart({name: 'take away', price: 0.5}, c)}
                                             name={'take away'}/> : null}
                    </div>
                </li>
            </ul>
        </section>
    </main>
}