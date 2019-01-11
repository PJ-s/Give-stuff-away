import React from "react";
import "./Section-about.scss";
import {Element} from "react-scroll";

export default class About extends React.Component {

    render() {
        return (
            <Element name="About">
                <div className="section-about">
                    <div className="section-about-text-box">
                        <h1>o nas</h1>
                        <div></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur culpa dicta dolore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consequatur culpa dicta dolore</p>
                    </div>
                    <div className="section-about-image-box"></div>
                </div>
            </Element>
        )
    }
}