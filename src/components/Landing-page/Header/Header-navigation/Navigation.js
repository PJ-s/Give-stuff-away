import React from "react";
import "./Navigation.scss";
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default class Navigation extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="page-navigation-login">
                    <ul>
                        <li><a href="">Zaloguj</a></li>
                        <li><a href="">Załóż konto</a></li>
                    </ul>
                </div>
                <div className="page-navigation-nav">
                    <ul>
                        <Link activeClass="active" to="HowToDo" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                            <li>Start</li>
                        </Link>
                        <Link activeClass="active" to="HowToDo" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                            <li>O co chodzi?</li>
                        </Link>
                        <Link activeClass="active" to="About" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                            <li>O nas</li>
                        </Link>
                        <Link activeClass="active" to="Foundations" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                            <li>Fundacje i organizacje</li>
                        </Link>
                        <Link activeClass="active" to="Contact" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
                            <li>Kontakt</li>
                        </Link>
                    </ul>
                </div>
            </div>
        )
    }
}
