import React from 'react'
import 'react-simple-toasts/dist/theme/light.css'
import 'reactjs-popup/dist/index.css'
import {Dialog} from "./Dialog.jsx";

export const IngredientsDialog = ({
                                      trigger,
                                      title,
                                      body
                                  }) => {
    return (
        <Dialog title={title} trigger={trigger}>
            <div className="dialog__body">
                <p>{body}</p>
            </div>
        </Dialog>
    )
}