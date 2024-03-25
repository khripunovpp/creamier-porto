import {PaymentsDialog} from "./PaymentsDialog.jsx";
import drake from "/img/drake.png";
import bg from "/img/bg.png";
import {useAtom} from "jotai";
import {dialog} from "./main.jsx";
import {Menu} from "./Menu.jsx";
import {IngredientsDialog} from "./IngredientsDialog.jsx";

function App() {
    const [displayed] = useAtom(dialog)
    const overlayHeight = window.innerHeight
    return (
        <section className="tail">
            <div className={`tail__fakeOverlay ${displayed ? 'visible' : ''}`} aria-hidden="true"
                 style={{height: overlayHeight}}/>
            <div className="container">
                <div className="tail__bg" aria-hidden="true">
                    <img src={bg} alt="Creamier" className="tail__bg-image" loading="lazy"/>
                </div>
                <section className="tail__inner">
                    <header className="header">
                        <div className="header__drake" aria-hidden="true">
                            <img src={drake} alt="Creamier" className="header__drake-image"
                                 loading="lazy"/>
                        </div>
                        <div className="header__inner">
                            <h1 className="header__title">
                                Menu
                            </h1>
                            <p className="header__subtitle">
                                Eclairs
                            </p>
                        </div>
                    </header>
                    <Menu/>
                    <section className="contacts">
                        <PaymentsDialog/>
                    </section>

                    <footer className="footer"></footer>
                </section>
            </div>
        </section>
    )
}

export default App
