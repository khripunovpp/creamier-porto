import {PaymentsDialog} from "./PaymentsDialog.jsx";
import drake from "/img/drake.png";
import bg from "/img/bg.png";
import line1 from "/img/line-1.png";
import line2 from "/img/line-2.png";
import line3 from "/img/line-3.png";
import line4 from "/img/line-4.png";
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
            <div className="line line-1" aria-hidden="true">
                <img src={line1} alt="" loading="lazy"/>
            </div>
            <div className="line line-2" aria-hidden="true">
                <img src={line2} alt="" loading="lazy"/>
            </div>
            <div className="line line-3" aria-hidden="true">
                <img src={line3} alt="" loading="lazy"/>
            </div>
            <div className="line line-4" aria-hidden="true">
                <img src={line4} alt="" loading="lazy"/>
            </div>
            <div className={`tail__fakeOverlay ${displayed ? 'visible' : ''}`} aria-hidden="true"
                 style={{minHeight: overlayHeight}}/>
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
                                Pastry
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

        {
            showCalc ? <FloatTotal /> : null
        }
    </>
}

export default App
