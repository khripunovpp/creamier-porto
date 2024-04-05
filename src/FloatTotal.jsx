import {useAtom} from "jotai";
import {cartItems} from "./main.jsx";

export  const FloatTotal = (props) => {
    const [items, setToCart] = useAtom(cartItems)
    const sum = Object.values(items).reduce((acc, item) => acc + item.price * item.count, 0)
    const reset = () => {
        setToCart({})
    }
    return <>
        {sum ? <aside className="total">
            <p>{sum}€</p>
            <button className="button-simple" onClick={reset}>Reset</button>
        </aside> : null}
    </>
}