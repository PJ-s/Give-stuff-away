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
                            <Link to="/loggedView">
                                Zaloguj
                            </Link>
                        </li>
                        <li><a href="">
                            Załóż konto
                        </a></li>
                    </ul>
                </div>
                <div className="page-nav">
                    <ul>
                        <Link activeClass="active" to="/">
                            <li>
                                Start
                            </li>
                        </Link>
                        <Scroll.Link activeClass="active" to="HowToDo" spy={true} smooth={true} offset={-200} duration={500} onSetActive={this.handleSetActive}>
                            <li>
                                O co chodzi?
                            </li>
                        </Scroll.Link>
                        <Scroll.Link activeClass="active" to="About" spy={true} smooth={true} offset={-50} duration={500} onSetActive={this.handleSetActive}>
                            <li>
                                O nas
                            </li>
                        </Scroll.Link>
                        <Scroll.Link activeClass="active" to="Foundations" spy={true} smooth={true} offset={-50} duration={500} onSetActive={this.handleSetActive}>
                            <li>
                                Fundacje i organizacje
                            </li>
                        </Scroll.Link>
                        <Scroll.Link activeClass="active" to="Contact" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                            <li>
                                Kontakt
                            </li>
                        </Scroll.Link>
                    </ul>
                </div>
            </div>
        )
    }
}
