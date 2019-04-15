import React from "react";
import "../../sass/partials/log-in-panel/_log-in-panel.scss";
import { Link } from "react-router-dom";


export default class LogInPanel extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="page-login">
                    <ul>
                        <li>
                            <a href="#">
                                Zaloguj
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Załóż konto
                            </a>
                        </li>
                    </ul>
                </div>
                <nav className="page-nav">
                    <ul>
                        <li>
                            <Link to="/">
                                Start
                            </Link>
                        </li>
                        <li>
                            <Link to="/HowToDo">
                                O co chodzi?
                            </Link>
                        </li>
                        <li>
                            <Link to="/About">
                                O nas
                            </Link>
                        </li>
                        <li>
                            <Link to="Foundations">
                                Fundacje i organizacje
                            </Link>
                        </li>
                        <li>
                            <Link to="Contact">
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="form-box log-in-box">
                    <div className="form-header">
                        <h1>
                            Zaloguj się
                        </h1>
                        <div></div>
                    </div>
                    <form>
                        <input className="input-big" type="email" placeholder="Email"/>
                        <input className="input-big" type="password" placeholder="Hasło"/>
                        <div className="flex-container">
                            <button type="send">
                                Załóż konto
                            </button>
                            <button type="send">
                                <Link to="/LoggedView">
                                    Zaloguj się
                                </Link>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


