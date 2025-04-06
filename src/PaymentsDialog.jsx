import React from 'react'
import toast from 'react-simple-toasts'
import 'react-simple-toasts/dist/theme/light.css'
import 'reactjs-popup/dist/index.css'
import copy from "copy-to-clipboard";
import {Dialog} from "./Dialog.jsx";


const payments = [
    {
        label: 'IBAN',
        value: 'FR7617598000010001700202927'
    },
    {
        label: 'Account Name',
        value: 'Logunov Maksim'
    },
    {
        label: 'Bank Name',
        value: 'LYDIA SOLUTIONS'
    },
    {
        label: 'BIC',
        value: 'LYDIFRP2XXX'
    },
]

const icon = (
    <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <g transform="matrix(1.43 0 0 1.43 12 12)">
            <path
                style={{
                    stroke: "none",
                    strokeWidth: 1,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeDashoffset: 0,
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 4,
                    fillRule: "nonzero",
                    opacity: 1
                }}
                transform=" translate(-8, -7.5)"
                d="M 2.5 1 C 1.675781 1 1 1.675781 1 2.5 L 1 10.5 C 1 11.324219 1.675781 12 2.5 12 L 4 12 L 4 12.5 C 4 13.324219 4.675781 14 5.5 14 L 13.5 14 C 14.324219 14 15 13.324219 15 12.5 L 15 4.5 C 15 3.675781 14.324219 3 13.5 3 L 12 3 L 12 2.5 C 12 1.675781 11.324219 1 10.5 1 Z M 2.5 2 L 10.5 2 C 10.78125 2 11 2.21875 11 2.5 L 11 10.5 C 11 10.78125 10.78125 11 10.5 11 L 2.5 11 C 2.21875 11 2 10.78125 2 10.5 L 2 2.5 C 2 2.21875 2.21875 2 2.5 2 Z M 12 4 L 13.5 4 C 13.78125 4 14 4.21875 14 4.5 L 14 12.5 C 14 12.78125 13.78125 13 13.5 13 L 5.5 13 C 5.21875 13 5 12.78125 5 12.5 L 5 12 L 10.5 12 C 11.324219 12 12 11.324219 12 10.5 Z"
                strokeLinecap="round"
            />
        </g>
    </svg>
)


const paymentsList = () => {
    const handleCopy = (
        name,
        value
    ) => {
        copy(value);
        toast(`${name} has been copied`)
    }
    return (payments.map(({label, value}) => (
        <li key={label} className="payments-list__item" onClick={() => handleCopy(label, value)}>
            <div className="payments-list__item-inner">
                <span className="payments-list__item-label">{label}</span>
                <span className="payments-list__item-value">{value}</span>
            </div>
            <div className="payments-list__item-copy">
                <button
                    className="copy">
                    {icon}
                </button>
            </div>
        </li>
    )))
}

export const PaymentsDialog = () => {
    return (
        <Dialog trigger={<button className="button">Payment</button>} title="Payment information">
            <ul className="payments-list">
                {paymentsList()}
            </ul>
            <div className="stripe-payment">
                <span className="stripe-payment__or">or</span>
                <a href="https://revolut.me/pashtitto" target="_blank" className="stripe-payment__link">
                    Pay by card
                </a>
            </div>

        </Dialog>
    )
}