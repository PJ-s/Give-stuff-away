import React from "react";
import "../../../../sass/partials/landing-page/_info-box.scss";


export default class InfoBox extends React.Component {

    render() {
        return (
            <div className="section-info-box">
                <div className="info-box-column">
                    <h1>10</h1>
                    <p>oddanych worków</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat diam libero, imperdiet ultrices ex tincidunt ac.</p>
                </div>
                <div className="info-box-column">
                    <h1>5</h1>
                    <p>wspartych organizacji</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat diam libero, imperdiet ultrices ex tincidunt ac.</p>
                </div>
                <div className="info-box-column">
                    <h1>7</h1>
                    <p>zorganizowanych zbiórek</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas feugiat diam libero, imperdiet ultrices ex tincidunt ac.</p>
                </div>

            </div>
        )
    }
}