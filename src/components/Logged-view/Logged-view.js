import React from 'react';
import LoggedViewHeader from "./Header/Logged-view-header";
import LoggedViewForm_1 from "./Form/Logged-view-form_1";



export default class LoggedView extends React.Component {
    render() {
        return <div>
            <LoggedViewHeader/>
            <LoggedViewForm_1/>
        </div>
    }
}