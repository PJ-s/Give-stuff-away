import React from "react";
import "./contact.scss";
import {Element} from "react-scroll";

export default class Contact extends React.Component {
   constructor(props) {
   super(props);

   }
   render(){
     return (
         <Element name="Contact">
             <div className="contact-container">
                    <div className="contact-form-box">
                        <div className="contact-form-header">
                            <h1>Skontaktuj się z nami</h1>
                            <div></div>
                        </div>
                        <h3>Formularz kontaktowy</h3>
                        <form action="">
                            <div className="inputs-box">
                                    <input type="text" placeholder="Imię"/>
                                    <input type="email" placeholder="Email"/>
                            </div>
                                <input className="input-big" type="text" placeholder="Wiadomość"/>
                            <button type="send">Wyślij</button>
                        </form>
                    </div>
             </div>
         </Element>
     )
   }
 }