import React from 'react';
import {
    HashRouter,
    Route
} from "react-router-dom";

import LandingPage from "./components/Landing-page/Landing-page";
import LoggedView from "./components/Logged-view/Logged-view";
import Contact from "./components/Landing-page/Contact/contact";
import HowToDo from "./components/Landing-page/Section-how-to-do/SectionHowToDo";
import About from "./components/Landing-page/Section-about/Section-about";
import Foundations from "./components/Landing-page/Section-foundations/foundations";
import LogInPanel from "./components/Log-in-panel/Log-in-panel";

export default class App extends React.Component {
    constructor(props) {
        super(props);

    }
    render(){
        return (<HashRouter>
                <>
                    <Route exact path="/" component={LandingPage}/>
                    <Route path="/HowToDo" component={HowToDo}/>
                    <Route path="/About" component={About}/>
                    <Route path="/Foundations" component={Foundations}/>
                    <Route path="/Contact" component={Contact}/>
                    <Route path="/LogInPanel" component={LogInPanel}/>
                    <Route path="/loggedView" component={LoggedView}/>
                </>
            </HashRouter>
        )
    }
}

