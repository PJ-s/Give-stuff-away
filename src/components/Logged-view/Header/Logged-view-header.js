import React from "react";
import "./Logged-view-header.scss";
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default class LoggedViewHeader extends React.Component {
       constructor(props) {
       super(props);

       this.state = {

           dropdownMenu: false
       }
       }

       showDropdownMenu = () => {

           this.setState({

               dropdownMenu: !this.state.dropdownMenu
           })
       };


    render() {
        return (
            <div>
                <div className="container">
                    <div className="logged-view-login">
                        <ul>
                            <li>
                                    Witaj Agata
                            </li>
                            <span onClick={this.showDropdownMenu} className= "far fa-sun">

                                {this.state.dropdownMenu ?

                                    <ul className="logged-view-dropdown-menu">
                                        <li>
                                            Profil
                                        </li>
                                        <li>
                                            Ustawienia
                                        </li>
                                        <li>
                                            Moje zbiórki
                                        </li>
                                        <li>
                                            Wyloguj
                                        </li>
                                    </ul>
                                    : null
                                }
                            </span>
                        </ul>
                    </div>
                    <div className="logged-view-nav">
                        <ul>
                            <Link activeClass="active">
                                <li>
                                    Start
                                </li>
                            </Link>
                            <Link activeClass="active" to="HowToDo" spy={true} smooth={true} offset={-200} duration={500} onSetActive={this.handleSetActive}>
                                <li>
                                    O co chodzi?
                                </li>
                            </Link>
                            <Link activeClass="active" to="About" spy={true} smooth={true} offset={-50} duration={500} onSetActive={this.handleSetActive}>
                                <li>
                                    O nas
                                </li>
                            </Link>
                            <Link activeClass="active" to="Foundations" spy={true} smooth={true} offset={-50} duration={500} onSetActive={this.handleSetActive}>
                                <li>
                                    Fundacje i organizacje
                                </li>
                            </Link>
                            <Link style={{visibility: this.state.dropdownMenu ? "hidden" : "visible"}} activeClass="active" to="Contact" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                                <li>
                                    Kontakt
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="logged-view-call-to-action">
                        <h1>
                            Oddaj rzeczy, których już nie chcesz
                        </h1>
                        <span>
                            potrzebującym
                        </span>
                        <div className="logged-view-call-to-action-decoration"></div>
                        <h1>
                            Wystarczą 4 proste kroki:
                        </h1>
                        <div className="logged-view-boxes">
                            <div>
                                <p>
                                    Wybierz rzeczy
                                </p>
                            </div>
                            <div>
                                <p>
                                    Spakuj je w worki
                                </p>
                            </div>
                            <div>
                                <p>
                                    Wybierz fundację
                                </p>
                            </div>
                            <div>
                                <p>
                                    Zamów kuriera
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info-bar">
                    <h1>
                        Ważne!
                    </h1>
                    <p>
                        Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu je najlepiej przekazać.
                    </p>
                </div>
            </div>
        )
    }
}