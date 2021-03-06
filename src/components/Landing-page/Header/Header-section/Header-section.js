import React from "react";
import "../../../../sass/partials/landing-page/_header-section.scss";
import {Link} from "react-router-dom"


export default class HeaderSection extends React.Component {

    render() {
        return (
            <div className="header-section-box">
                <div className="header-section-title">
                    <h1>Zacznij pomagać!</h1>
                    <h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <div className="header-section-decoration"></div>
                </div>
                <div className="header-section-call-to-action">
                <button>
                    <Link to="/LoggedView" className="cta-link">
                        Oddaj rzeczy
                    </Link>
                </button>
                <button>Zorganizuj zbiórkę</button>
                </div>
            </div>
        )
    }
}