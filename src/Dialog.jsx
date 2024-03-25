import {useAtom} from "jotai";
import {dialog} from "./main.jsx";
import {clearToasts} from "react-simple-toasts";
import Popup from "reactjs-popup";
import React from "react";

export const Dialog = ({
    trigger,
    title,
    children,
                       }) => {
    const [_, setOverlay] = useAtom(dialog)
    const bodyClasses = document.body.classList
    const handleClose = () => {
        setTimeout(() => {
            setOverlay(false)
            bodyClasses.remove('no-scroll')
            clearToasts()
        }, 100)
    }

    const handleOpen = () => {
        setOverlay(true)
        bodyClasses.add('no-scroll')
    }
    return (
        <Popup trigger={trigger} modal
               onOpen={handleOpen}
               onClose={handleClose}>
            <div className="payments-dialog dialog">
                <h2 className="dialog__title">{title}</h2>
                {children}
            </div>
        </Popup>
    )
}