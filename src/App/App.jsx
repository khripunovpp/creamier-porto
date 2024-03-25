// import logo from '/vite.svg'
import './App.scss'

function App() {

    return (
        <section className="tail">
            <div className="container">
                <div className="tail__bg" aria-hidden="true">
                    <img src="/img/bg.png" alt="Creamier" className="tail__bg-image" loading="lazy"/>
                </div>
                <section className="tail__inner">
                    <header className="header">
                        <div className="header__drake" aria-hidden="true">
                            <img src="/img/drake.png" alt="Creamier" className="header__drake-image"
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

                    <main className="menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                            <span className="menu__item-name">
                                Lemon & Basil 2.0 <br/>
                                (with soft lemon ganache)
                            </span>
                                <span className="menu__item-price">
                                4 €
                            </span>
                            </li>

                            <li className="menu__item">
                            <span className="menu__item-name">
                                Сhocolate 2.0 DUO <br/>
                                (raspberry & vanilla)
                            </span>
                                <span className="menu__item-price">
                                4 €
                            </span>
                            </li>

                            <li className="menu__item">
                            <span className="menu__item-name">
                                Strawberry milkshake <br/>
                                (With strawberry marshmallow)
                            </span>
                                <span className="menu__item-price">
                                4,5 €
                            </span>
                            </li>

                            <li className="menu__item">
                           <span className="menu__item-name">
                                Strawberry milkshake <br/>
                                (With strawberry marshmallow)
                            </span>
                                <span className="menu__item-price">
                                4,5 €
                            </span>
                            </li>
                        </ul>
                    </main>

                    <section className="contacts">


                        <button className="button">Payments</button>
                    </section>

                    <footer className="footer"></footer>
                </section>
            </div>
        </section>
    )
}

export default App
