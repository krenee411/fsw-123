export default function Die(props) {
    return (
        <div id="flexBox">
            <div id="diceBox">
                <div className="die">
                    <h1>{props.die1}</h1>
                </div>
                <div className="die">
                    <h1>{props.die2}</h1>
                </div>
            </div>
            <div id="btnBox">
                <button onClick = {props.rollDice} >Roll!</button>
            </div>
        </div>
    );
}