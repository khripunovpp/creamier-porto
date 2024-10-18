import {useAtom} from "jotai";
import {cartItems} from "./main.jsx";
import {Dialog} from "./Dialog.jsx";
import React from "react";

export const FloatTotal = (props) => {
    const [items, setToCart] = useAtom(cartItems)
    const sum = Object.values(items)
        .reduce((acc, item) => acc + item.price * item.count, 0)
        .toFixed(2)
    const reset = () => {
        setToCart({})
    }
    return <>
        {sum > 0 ? <aside className="total">
            <p className="total__sum">{sum}€</p>
            <TotalDialog items={items}/>
            <button className="button-simple" onClick={reset}>Reset</button>
        </aside> : null}
    </>
}

export const TotalDialog = ({items}) => {
    const total = Object.values(items)
        .reduce((acc, item) => acc + item.price * item.count, 0)
        .toFixed(2)

    return (
        <Dialog trigger={<button className="button-simple">Show</button>} title="Total">
            <ul className="cart-list">
                {Object.values(items).map(item => {
                    const sum = (item.price * item.count).toFixed(2)
                    return <li key={item.name} className="cart-list__item">
                        <span className="cart-list__item-name">{item.name}</span>
                        <span className="cart-list__item-count">{item.count} x {item.price}€</span>
                        <span className="cart-list__item-price">{sum}€</span>
                    </li>
                })}
            </ul>

            <p className="cart-list__total">Total: {total}€</p>
        </Dialog>
    )
}