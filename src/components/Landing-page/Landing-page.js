import React from 'react';
import Header from "./Header/Header";
import HowToDo from "./Section-how-to-do/SectionHowToDo"
import About from "./Section-about/Section-about";
import Foundations from "./Section-foundations/foundations";
import Contact from "./Contact/contact";

export default class LandingPage extends React.Component {
    render() {
        return <div>
                    <Header/>
                    <HowToDo/>
                    <About/>
                    <Foundations/>
                    <Contact/>
               </div>
    }
}