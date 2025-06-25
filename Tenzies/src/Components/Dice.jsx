export default function Dice(props) {
    const style ={
        backgroundColor: props.isHeld? "#59E391" : "white"
    }
    return (
        <button style = {style} className="dice-button">{props.value}</button>
    );
}