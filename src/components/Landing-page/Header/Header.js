import React from "react";
import Navigation from "./Header-navigation/Navigation";
import HeaderSection from "./Header-section/Header-section"
import "./Header.scss";

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