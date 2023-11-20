import React from "react";

function Choices(){
    const options = ['Country1', 'Country2', 'Country3', 'Country4']

    return(
        <div>
            <ul>
                {options.map((item, i) =>{
                   return( <li key={i}><button>{item}</button></li> )
                })}
            </ul>
        </div>
    )
}

export default Choices;