import React from "react";
import "./Navigation.scss";


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
                        <li><a href="">Start</a></li>
                        <li><a href="">O co chodzi?</a></li>
                        <li><a href="">O nas</a></li>
                        <li><a href="">Fundacje i organizacje</a></li>
                        <li><a href="">Kontakt</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
