import React from "react";
import "./foundations.scss";

export default class Foundations extends React.Component {

    render() {
        return (
            <div className="section-foundations-box">
                <div className="section-foundations-header">
                    <h1>Komu pomagamy?</h1>
                    <div></div>
                    <button>Fundacjom</button>
                    <button>Organizacjom pozarządowym</button>
                    <button>Lokalnym zbiórkom</button>
                    <p>w naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują</p>
                </div>

            </div>
        )
    }
}