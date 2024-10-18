import {useAtom} from "jotai";
import {cartItems} from "./main.jsx";
import {Dialog} from "./Dialog.jsx";
import React from "react";
import {addOrderToFirebase} from "./db.js";
import toast from "react-simple-toasts";

export const FloatTotal = (props) => {
    const [items, setToCart] = useAtom(cartItems)
    const sum = Object.values(items)
        .reduce((acc, item) => acc + item.price * item.count, 0)
        .toFixed(2)
    const reset = () => {
        setToCart({})
    }
    const add = () => {
        const order = {
            date: Date.now(),
            items: Object.values(items).map(({name, price, count}) => ({name, price, count})),
            sum
        }
        addOrderToFirebase(order)
            .then(response => {
                reset()
                toast('Order added')
            })
            .catch(error => {
                toast('Error: ' + JSON.stringify(error))
            })
    }

    return <>
        {sum > 0 ? <aside className="total">
            <p className="total__sum">{sum}€</p>
            <TotalDialog items={items}/>
            <button className="button-simple" onClick={reset}>Reset</button>
            <button className="button-simple" onClick={add}>Send</button>
        </aside> : null}
    </>
}

export const TotalDialog = ({items}) => {
    const total = Object.values(items)
        .reduce((acc, item) => acc + item.price * item.count, 0)
        .toFixed(2)

    return (
        <Dialog trigger={<button className="button-simple">Order</button>} title="Total">
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