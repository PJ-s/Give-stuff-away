import React from "react";
import "./Navigation.scss";
import {Link} from "react-router-dom";
import Scroll from "react-scroll";

export default class Navigation extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="page-login">
                    <ul>
                        <li>
                            <Link to="/LogInPanel">
                                Zaloguj
                            </Link>
                        </li>
                        <li>
                            <a>
                                Załóż konto
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="page-nav">
                    <ul>
                        <li>
                            <Link activeClass="active" to="/">
                                Start
                            </Link>
                        </li>
                        <li>
                            <Scroll.Link activeClass="active" to="HowToDo" spy={true} smooth={true} offset={-200} duration={500} onSetActive={this.handleSetActive}>
                                O co chodzi?
                            </Scroll.Link>
                        </li>
                        <li>
                            <Scroll.Link activeClass="active" to="About" spy={true} smooth={true} offset={-50} duration={500} onSetActive={this.handleSetActive}>
                                O nas
                            </Scroll.Link>
                        </li>
                        <li>
                            <Scroll.Link activeClass="active" to="Foundations" spy={true} smooth={true} offset={-50} duration={500} onSetActive={this.handleSetActive}>
                                Fundacje i organizacje
                            </Scroll.Link>
                        </li>
                        <li>
                            <Scroll.Link activeClass="active" to="Contact" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                                Kontakt
                            </Scroll.Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
