import React from "react";
import Navigation from "./Header-navigation/Navigation";
import HeaderSection from "./Header-section/Header-section"
import "../../../sass/partials/landing-page/_header.scss";

export default class Header extends React.Component {

    render() {
        return (
            <div className="page-header">
                <Navigation/>
                <HeaderSection/>
            </div>
        )
    }
}