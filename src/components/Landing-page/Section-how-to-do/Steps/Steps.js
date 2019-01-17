import React from "react";
import "./Steps.scss";

export default class Steps extends React.Component {

    render() {
        return (
            <div className="section-steps-box">
                <div className="section-steps-header">
                    <h1>
                        wystarczą 4 proste kroki
                    </h1>
                    <div></div>
                </div>
                <div className="section-steps-elements">
                    <div>
                        <span className="fas fa-hands"></span>
                        <p>
                            Wybierz rzeczy
                        </p>
                        <div></div>
                        <p>
                            ubrania, zabawki, sprzęt, inne
                        </p>
                    </div>
                    <div>
                        <span className="fas fa-arrow-down"></span>
                        <p>
                            Spakuj je
                        </p>
                        <div></div>
                        <p>
                            skorzystaj z worków na śmieci
                        </p>
                    </div>
                    <div>
                        <span className="fas fa-glasses"></span>
                        <p>
                            Zdecyduj komu chcesz pomóc
                        </p>
                        <div></div>
                        <p>
                            wybierz zaufane miejsce
                        </p>
                    </div>
                    <div>
                        <span className="fas fa-people-carry"></span>
                        <p>
                            Zamów kuriera
                        </p>
                        <div></div>
                        <p>
                            kurier przyjedzie w dowolnym terminie
                        </p>
                    </div>
                </div>
                <button>
                    załóż konto
                </button>
            </div>
        )
    }
}