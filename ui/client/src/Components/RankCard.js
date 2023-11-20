import React from "react";

function RankCard(){
    const playersList = ['Player1', 'Player2', 'Player3']
    return(
        <div>
            <h1>Rank</h1>
            <ul>
             {playersList.map((item)=> {
                return( <li>{item}</li>)
                })}
            </ul>
        </div>
    )
}

export default RankCard;