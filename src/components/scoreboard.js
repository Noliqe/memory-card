function Scoreboard(props) {

    return <div className="scoreboard">
        <p>Current score: {props.current}</p>
        <p>Level: {props.level}</p>
        <p>High score: {props.highScore}</p>
    </div>
}
  
  export default Scoreboard;