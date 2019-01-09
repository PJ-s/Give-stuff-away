import React from "react";
import InfoBox from "./InfoBox/info-box";
import Steps from "./Steps/Steps";


export default class HowToDo extends React.Component {

    render() {
        return (
            <div>
                <InfoBox/>
                <Steps/>
            </div>
        )
    }
}