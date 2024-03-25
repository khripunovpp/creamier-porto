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
    const year = new Date().getFullYear()
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
                        <a href="https://instagram.com/creamier.porto/"
                           className="contacts__link contacts__link--instagram"
                           target="_blank" rel="noreferrer">
                            <span className="contacts__link-text">Instagram</span>
                        </a>
                    </section>

                    <footer className="footer">
                        <p className="footer__text">
                            &copy; All rights reserved {year}
                        </p>
                    </footer>
                </section>
            </div>
        </section>
    )
}

export default App
