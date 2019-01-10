import React from "react";
import "./contact.scss";


export default class Contact extends React.Component {
   constructor(props) {
   super(props);

   }
   render(){
     return (
             <div className="contact-container">
                    <div className="contact-image-box"></div>
                    <div className="contact-form-box">
                        <h1>Skontaktuj się z nami</h1>
                        <div className="decoration"></div>
                        .
                        <h3>Formularz kontaktowy</h3>
                        <form action="">
                            <div className="inputs-box">
                                <label htmlFor="">Imię
                                    <input type="text"/>
                                </label>
                                <label htmlFor="">Email
                                    <input type="email"/>
                                </label>
                            </div>
                            <label htmlFor="">Wiadomość
                                <input type="text"/>
                            </label>
                            <button type="send">Wyślij</button>
                        </form>
                    </div>
             </div>
     )
   }
 }