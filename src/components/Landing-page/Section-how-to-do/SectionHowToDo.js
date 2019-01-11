import React from "react";
import InfoBox from "./InfoBox/info-box";
import Steps from "./Steps/Steps";
import {Element} from "react-scroll";

export default class HowToDo extends React.Component {

    render() {
        return (
            <div>
                <InfoBox/>
                <Element name="HowToDo">
                    <div>
                        <Steps/>
                    </div>
                </Element>
            </div>
        );
    }
}