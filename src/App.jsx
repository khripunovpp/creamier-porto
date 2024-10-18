import {PaymentsDialog} from "./PaymentsDialog.jsx";
import logoMenu from "/img/logoMenu.png";
import bg from "/img/bg.png";
import insta from "/img/instagram.svg";
import {useAtom} from "jotai";
import {calcMode, dialog} from "./main.jsx";
import {Menu} from "./Menu.jsx";
import {FloatTotal} from "./FloatTotal.jsx";

function App() {
    const [displayed] = useAtom(dialog)
    const [showCalc] = useAtom(calcMode)
    const overlayHeight = window.innerHeight
    const year = new Date().getFullYear()
    return <>
        <section className="tail">
            <div className={`tail__fakeOverlay ${displayed ? 'visible' : ''}`} aria-hidden="true"
                 style={{minHeight: overlayHeight}}/>

            <div className="container">
                <div className="tail__bg" aria-hidden="true">
                    <img src={bg} alt="Creamier" className="tail__bg-image" loading="lazy"/>
                </div>

                <section className="tail__inner">
                    <header className="header">
                        <div className="header__inner">
                            <img src={logoMenu}
                                 alt="Creamier"
                                 className="header__logo"
                                 loading="lazy"/>
                        </div>
                    </header>

                    <Menu/>

                    <section className="contacts">
                        <PaymentsDialog/>

                        <a href="https://instagram.com/creamier.porto/"
                           className="contacts__link contacts__link--instagram"
                           target="_blank"
                           rel="noreferrer">
                            <img src={insta}
                                 alt="Instagram"
                                 loading="lazy"/>
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

        {
            showCalc ? <FloatTotal/> : null
        }
    </>
}

export default App
