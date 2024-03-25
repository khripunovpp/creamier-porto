import {IngredientsDialog} from "./IngredientsDialog.jsx";

const items = [{
    name: 'Lemon & Basil 2.0 \n(with soft lemon ganache)', price: '4€', ingredients: 'lemon, basil, ganache'
}, {
    name: 'Сhocolate 2.0 DUO \n(raspberry & vanilla)', price: '4€', ingredients: 'chocolate, raspberry, vanilla'
}, {
    name: 'DUO \n(chocolate & vanilla)', price: '4,5€', ingredients: 'strawberry, milkshake, marshmallow'
}, {
    name: 'Strawberry milkshake \n(With strawberry marshmallow)',
    price: '4,5€',
    ingredients: 'strawberry, milkshake, marshmallow'
},]

const item = ({name, price}) => <li className="menu__item">
                     <span className="menu__item-name">
                        {name}
                    </span>
    <span className="menu__item-price">
                        {price}
                    </span>
</li>

export const Menu = () => {

    return <main className="menu">
        <ul className="menu__list">
            {items.map(({name, price, ingredients}) => {

                return <IngredientsDialog key={name}
                                          title={name}
                                          body={ingredients}
                                          trigger={item({name, price})}/>
            })}
        </ul>
    </main>
}