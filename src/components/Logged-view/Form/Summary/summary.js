import React from "react";
import "../../../../sass/partials/logged-view/_logged-view-summary.scss";


export default class Summary extends React.Component {
   constructor(props) {
   super(props);

   }
   render(){
     return (
         <div className="summary-container">
             <header>
                 <h1>
                     Podsumowanie Twojej darowizny
                 </h1>
                 <p>
                     Oddajesz:{this.props.match.params.items}
                 </p>
                 <p>
                 </p>
             </header>
         </div>
     )
   }
 }