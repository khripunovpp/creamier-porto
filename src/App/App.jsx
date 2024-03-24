// import logo from '/vite.svg'
import './App.scss'

function App() {

    return (
        <section className="tail">
            <div className="container">
                <header className="header">
                    <h1 className="header__title">
                        Menu
                    </h1>
                    <p className="header__subtitle">
                        Eclairs
                    </p>
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
            </div>
        </section>
    )
}

export default App
