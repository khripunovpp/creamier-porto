import {IngredientsDialog} from "./IngredientsDialog.jsx";

const items = [
    {
        name: 'Medovik \n(sugared nuts // sour cream filling)',
        price: '4.5',
        ingredients: 'water, milk, flour T00, flour T50, eggs, cream, sugar, salt, butter 83%, sour cream 20%, flower honey, mix of sugared walnuts and pecans, boiled condensed milk, lemon juice, cottage cheese, baking powder'
    },
    {
        name: 'Rose-Raspberry \nwith vanilla cream & raspberry+rose confit',
        price: '4',
        ingredients: 'water, milk, flour T00, flour T50, eggs, butter 83%, salt, sugar, cream, white chocolate Callebaut, gelatin, vanilla paste Guzman, raspberry puree, rose confit, pectin NH, lemon juice, glucose syrup, food coloring Fuksia Guzman'
    },
    {
        name: 'Golden bar \nwith Hazelnut Cream and Salted Caramel',
        price: '4.5',
        ingredients: 'water, milk, flour T00, flour T50, eggs, butter 83%, white chocolate Callebaut, milk chocolate Callebaut, sugar, salt, cream, glucose syrup, hazelnut paste, cocoa butter\n'
    },
    {
        name: 'Raffaello \nwith Almond-Coconut Cream',
        price: '4',
        ingredients: 'water, milk, flour T00, flour T50, eggs, butter 83%, white chocolate Callebaut, salt, sugar, coconut milk 70%, cream 35%, almond paste, condensed milk, gelatin 220bloom, blanched almonds, vegetable oil \n'
    },
    {
        name: 'Medovik BUT \nraspberry + pistachio version',
        price: '5',
        ingredients: 'water, milk, flour T00, flour T50, eggs, cream, sugar, salt, butter 83%, sour cream 20%, flower honey, raspberry confit, pistachio paste 40%, lemon juice, baking powder'
    },
    {
        name: 'Pistachio',
        price: '4',
        ingredients: 'water, milk, flour T00, flour T50, eggs, butter 83%, white chocolate Callebaut, salt, sugar, cream, cornstarch, dessert pistachio paste 40%, pistachio paste 100%'
    },
]

const item = ({name, price}) => <li className="menu__item">
                     <span className="menu__item-name">
                        {name}
                    </span>
    <span className="menu__item-price">
                        {price}€
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